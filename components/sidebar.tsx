'use client';

// import { usePathname } from 'next/navigation';
import { NavItem } from '@/components/navigation/nav-item';
import { useMemo, useState } from 'react';
import { useAuthStore } from '@/lib/store/use-store';

export function Sidebar() {
  const { token } = useAuthStore();
  // const pathname = usePathname();
  // const [activeTab, setActiveTab] = useState<string>(pathname ?? '/');

  const navigation = useMemo(
    () => [
      { name: 'Dashboard', href: '/' },
      { name: 'Stake', href: '/stake', hide: !token },
      { name: 'Portfolio', href: '/portfolio', hide: !token },
      { name: 'Farms', href: '/farms' },
      { name: 'Nodes', href: '/nodes', badge: 'Soon', disabled: true },
      {
        name: 'Governance',
        href: '/governance',
        badge: 'Soon',
        disabled: true,
      },
    ],
    [token],
  );

  return (
    <div className="flex fixed top-[5rem] left-[10px] bottom-0 w-[260px] flex-col py-[50px] w-64 border border-[#EFF3F4] rounded-[20px] bg-card min-h-[calc(97vh-4rem)]">
      <nav className="flex-1 px-2">
        {navigation
          // .filter(({ hide }) => !hide)
          .map((item) => (
            <NavItem
              key={item.name}
              href={item.href}
              name={item.name}
              badge={item.badge}
              // disabled={item.disabled}
              // isActive={activeTab === item.href}
              // setIsActive={setActiveTab}
            />
          ))}
      </nav>
    </div>
  );
}
