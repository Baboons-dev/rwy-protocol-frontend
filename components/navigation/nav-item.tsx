import { cn } from '@/lib/utils';
import Icon from '../Icon';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  name: string;
  badge?: string;
  disabled?: boolean;
}

export function NavItem({ href, name, disabled, badge }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link href={disabled ? '#' : href} passHref>
      <div
        className={cn(
          'flex font-semibold text-[14px] items-center space-x-3 px-[30px] py-2 rounded-lg mb-1 group hover:bg-primary/5',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
        style={{
          color: disabled ? 'gray' : pathname === href ? '#0B63FF' : '#000000',
        }}
      >
        <Icon fill={pathname === href ? '#0B63FF' : '#000000'} name={name} />
        <span>{name}</span>
        {badge && (
          <span className="ml-auto text-[10px] leading-tight bg-blue-100 text-blue-600 px-[8px] py-[5px] rounded-[5px] font-mono font-medium">
            {badge}
          </span>
        )}
      </div>
    </Link>
  );
}
