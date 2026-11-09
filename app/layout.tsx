import type { ReactNode } from 'react';

export const metadata = {
  title: 'Eurocottage',
  description: 'Vakantiewoningen',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        {/* Bestaande site-stijlen. Afbeeldingen komen uit /public/img. */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
