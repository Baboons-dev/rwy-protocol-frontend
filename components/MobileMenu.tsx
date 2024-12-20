'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from './Icon';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Stake', href: '/stake' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Farms', href: '/farms' },
  // { name: 'Nodes', href: '/nodes', badge: 'Soon' },
  // { name: 'Governance', href: '/governance', badge: 'Soon' },
];

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <div className="w-full border border-[#EFF3F4] px-4 sm:px-10">
      <nav className="flex h-[60px] justify-between items-center px-2">
        {navigation.map((item) => (
          <Link
            href={item.href}
            style={{
              color: pathname === item.href ? '#0B63FF' : '#000000',
            }}
            className={cn(
              'flex font-semibold text-[14px] items-center space-x-3 px-[30px] py-2 rounded-lg mb-1 group',
              'hover:bg-primary/5',
            )}
          >
            <Icon
              fill={pathname === item.href ? '#0B63FF' : '#000000'}
              name={item.name}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
