import './globals.css';
import { Inter } from 'next/font/google';
import { getSiteConfig, getNavigation } from '@/utils/config';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteConfig = getSiteConfig();
const navigation = getNavigation();

export const metadata = {
  title: siteConfig.site.title,
  description: siteConfig.site.description,
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
            <a href="/" className="logo">{siteConfig.site.logo}</a>
            <div className="nav-links">
              {navigation.map((item) => (
                <a key={item.path} href={item.path}>{item.name}</a>
              ))}
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <p>{siteConfig.site.copyright}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}