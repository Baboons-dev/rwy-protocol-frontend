import { cn } from '@/lib/utils';
import Icon from '../Icon';
import React, { useState } from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  name: string;
  badge?: string;
  isActive: boolean;
  setIsActive: (active: string) => void;
  disabled?: boolean;
}

export function NavItem({
  href,
  name,
  disabled,
  isActive,
  setIsActive,
  badge,
}: NavItemProps) {
  return (
    <Link
      href={disabled ? '#' : href}
      passHref
      onClick={() => {
        if (!disabled) setIsActive(href);
      }}
    >
      <div
        className={cn(
          'flex font-semibold text-[14px] items-center space-x-3 px-[30px] py-2 rounded-lg mb-1 group',
          disabled ? 'cursor-not-allowed' : 'hover:bg-primary/5 cursor-pointer',
        )}
        style={{
          color: disabled ? 'gray' : isActive ? '#0B63FF' : '#000000',
        }}
      >
        <Icon fill={isActive ? '#0B63FF' : '#000000'} name={name} />
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
