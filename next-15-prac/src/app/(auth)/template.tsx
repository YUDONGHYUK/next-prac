'use client';

/** Template
 * 템플릿은 앱의 여러 페이지에서 공유되는 UI라는 점에서 layout과 비슷하다
 * 동일한 템플릿을 공유하는 경로(route)들 사이를 이동할 때마다, 완전히 새로 시작하는 상태가 된다.
 *  - 새로운 template 컴포넌트 인스턴스가 마운트(mount)된다.
 *  - DOM 요소들이 다시 새성된다. (layout은 DOM을 재사용)
 *  - 상태(state)가 초기화된다.
 *  - effect가 다시 동기화된다.
 */

import { useState } from 'react';
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

  const [input, setInput] = useState('');

  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          <p>Header</p>
        </header>
        <div>
          <input
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
        </div>
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
