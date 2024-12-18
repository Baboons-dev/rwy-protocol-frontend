import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Icon from '../Icon';

interface NavItemProps {
  href: string;
  name: string;
  badge?: string;
  isActive: boolean;
}

export function NavItem({ href, name, badge, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      style={{
        color: isActive ? '#0B63FF' : '#000000',
      }}
      className={cn(
        'flex font-semibold text-[14px] items-center space-x-3 px-[30px] py-2 rounded-lg mb-1 group',
        'hover:bg-primary/5',
      )}
    >
      <Icon fill={isActive ? '#0B63FF' : '#000000'} name={name} />
      <span>{name}</span>
      {badge && (
        <span className="ml-auto text-[10px] leading-tight bg-blue-100 text-blue-600 px-[8px] py-[5px] rounded-[5px] font-mono font-medium">
          {badge}
        </span>
      )}
    </Link>
  );
}
