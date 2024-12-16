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
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Stake", href: "/stake", icon: Wallet },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Farms", href: "/farms", icon: Trees },
  { name: "Nodes", href: "/nodes", icon: Network, badge: "Soon" },
  { name: "Governance", href: "/governance", icon: Vote, badge: "Soon" },
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
            icon={item.icon}
            name={item.name}
            badge={item.badge}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </div>
  );
}
