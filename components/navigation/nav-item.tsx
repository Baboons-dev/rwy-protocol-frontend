import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  name: string;
  badge?: string;
  isActive: boolean;
}

export function NavItem({
  href,
  icon: Icon,
  name,
  badge,
  isActive,
}: NavItemProps) {
  return (
    <Link
      href={href}
      style={{
        color: isActive ? "#0B63FF" : "#000000",
      }}
      className={cn(
        "flex items-center space-x-3 px-[30px] py-2 rounded-lg mb-1 group",
        "hover:bg-primary/5"
      )}
    >
      <Icon
        style={{
          color: isActive ? "#0B63FF" : "#000000",
        }}
        className="h-5 w-5"
      />
      <span>{name}</span>
      {badge && (
        <span className="ml-auto text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
          {badge}
        </span>
      )}
    </Link>
  );
}
