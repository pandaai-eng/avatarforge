import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AvatarForge OS',
  description: 'Build and package premium AI avatar systems, prompt packs, and sellable digital products.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
