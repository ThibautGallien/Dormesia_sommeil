// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterPopup from '@/components/NewsletterPopup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dormesia - Votre guide pour un sommeil réparateur',
  description: 'Découvrez des conseils, articles et ressources pour améliorer la qualité de votre sommeil et votre bien-être.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  );
}