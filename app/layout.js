import {Space_Grotesk} from 'next/font/google';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata = {
  title: 'Andrew Ransom',
  description: 'Your next employee!',
  icons: {
    icon: '/assets/images/andrewmtn.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
