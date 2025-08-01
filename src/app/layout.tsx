import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Alex Johnson | Full Stack Developer',
  description: 'Professional portfolio of Alex Johnson - Full Stack Developer & UI Designer specializing in React, Node.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <nav className="navbar">
          <div className="container">
            <a href="/" className="logo">Alex Johnson</a>
            <div className="nav-links">
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/awards">Awards</a>
              <a href="/journey">Journey</a>
              <a href="/techstack">Tech Stack</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}