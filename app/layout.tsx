import type { ReactNode } from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'Eurocottage',
  description: 'Vakantiewoningen',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          rel="stylesheet"
        />
      </head>
      <body className="home_page">
        {children}
        {/* Tijdelijk: jQuery en Bootstrap JS voor menu en dropdowns, zoals op de oude site. */}
        <Script src="/js/jquery-3.2.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
