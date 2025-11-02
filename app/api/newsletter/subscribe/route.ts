// app/api/newsletter/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, source, quizResult } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Appel à l'API Brevo (Sendinblue)
    const brevoApiKey = process.env.BREVO_API_KEY;
    
    if (!brevoApiKey) {
      console.error('BREVO_API_KEY not configured');
      return NextResponse.json(
        { error: 'Configuration serveur manquante' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // ID de votre liste Brevo (à adapter)
        attributes: {
          SOURCE: source || 'unknown',
          QUIZ_RESULT: quizResult || '',
          SIGNUP_DATE: new Date().toISOString(),
        },
        updateEnabled: true, // Met à jour le contact s'il existe déjà
      }),
    });

    const data = await response.json();

    if (response.ok || response.status === 400) {
      // 400 signifie que le contact existe déjà, c'est ok
      return NextResponse.json(
        { 
          success: true, 
          message: 'Inscription réussie ! Consultez votre email.' 
        },
        { status: 200 }
      );
    }

    console.error('Brevo API error:', data);
    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription' },
      { status: 500 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}