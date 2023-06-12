import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Container>
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
