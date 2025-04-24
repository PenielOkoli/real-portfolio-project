import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tochukwu Okoli | Technical Product Manager',
  description: 'Portfolio of Tochukwu Okoli, a Technical Product Manager specializing in Fintech and AI solutions.',
  keywords: ['Product Management', 'Fintech', 'AI', 'Tochukwu Okoli', 'Technical PM'],
  authors: [{ name: 'Tochukwu Okoli', url: 'https://linkedin.com/in/tochukwuokoli' }],
  openGraph: {
    title: 'Tochukwu Okoli | Technical Product Manager',
    description: 'Portfolio of Tochukwu Okoli, a Cloud Infrastructure Expert specializing in Cloud Security and AI solutions.',
    url: 'https://tochukwuokoli.com',
    siteName: 'Tochukwu Okoli',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tochukwu Okoli | Technical Product Manager',
    description: 'Portfolio of Tochukwu Okoli, a Technical Product Manager specializing in Fintech and AI solutions.',
    images: ['/images/og-image.jpg'],
  },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}