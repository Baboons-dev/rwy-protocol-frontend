"use client";

import {
  LayoutDashboard,
  Wallet,
  Briefcase,
  Trees,
  Network,
  Vote,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { NavItem } from "@/components/navigation/nav-item";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Stake", href: "/stake" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Farms", href: "/farms" },
  { name: "Nodes", href: "/nodes", badge: "Soon" },
  { name: "Governance", href: "/governance", badge: "Soon" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col py-[50px] w-64 border border-[#EFF3F4] rounded-[20px] bg-card min-h-[calc(100vh-4rem)]">
      <nav className="flex-1">
        {navigation.map((item) => (
          <NavItem
            key={item.name}
            href={item.href}
            name={item.name}
            badge={item.badge}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </div>
  );
}
