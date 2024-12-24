'use client';

import { usePathname } from 'next/navigation';
import { NavItem } from '@/components/navigation/nav-item';

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Stake', href: '/stake' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Farms', href: '/farms' },
  { name: 'Nodes', href: '/nodes', badge: 'Soon', disabled: true },
  { name: 'Governance', href: '/governance', badge: 'Soon', disabled: true },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col py-[50px] w-64 border border-[#EFF3F4] rounded-[20px] bg-card min-h-[calc(97vh-4rem)]">
      <nav className="flex-1 px-2">
        {navigation.map((item) => (
          <NavItem
            key={item.name}
            href={item.href}
            name={item.name}
            badge={item.badge}
            disabled={item.disabled}
            // isActive={pathname === item.href}
          />
        ))}
      </nav>
    </div>
  );
}
