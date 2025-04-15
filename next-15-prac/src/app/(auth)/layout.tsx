'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          <p>Header</p>
        </header>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== '/');

          return (
            <Link
              className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
              key={link.href}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
        {children}
        <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
