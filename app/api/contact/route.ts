// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Envoi via Brevo (Sendinblue) - Email transactionnel
    const brevoApiKey = process.env.BREVO_API_KEY;
    
    if (!brevoApiKey) {
      console.error('BREVO_API_KEY not configured');
      return NextResponse.json(
        { error: 'Configuration serveur manquante' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        sender: {
          name: 'Dormesia Contact',
          email: 'contact@dormesia.com', // Votre email vérifié sur Brevo
        },
        to: [
          {
            email: 'contact@dormesia.com', // Votre email de réception
            name: 'Dormesia',
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `[Contact] ${subject}`,
        htmlContent: `
          <h2>Nouveau message de contact</h2>
          <p><strong>De :</strong> ${name} (${email})</p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: 'Message envoyé avec succès' },
        { status: 200 }
      );
    }

    const errorData = await response.json();
    console.error('Brevo send email error:', errorData);
    
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}