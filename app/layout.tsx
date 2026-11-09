import type { ReactNode } from 'react';

export const metadata = {
  title: 'Eurocottage',
  description: 'Vakantiewoningen',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
