"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Asset {
  name: string;
  icon: string;
  platformBalance: string;
  deposit: string;
  multiplier: string;
  decreaseInfo?: string;
  comingSoon?: boolean;
}

const assets: Asset[] = [
  {
    name: "CSPR",
    icon: "/icons/cspr.svg",
    platformBalance: "0",
    deposit: "0",
    multiplier: "x1",
    decreaseInfo: "Decreases to x0.9 in 13h 12m 45s"
  },
  {
    name: "RWAfi",
    icon: "/icons/rwafi.svg",
    platformBalance: "0",
    deposit: "0",
    multiplier: "x2",
    comingSoon: true
  },
  {
    name: "CUSD",
    icon: "/icons/cusd.svg",
    platformBalance: "0",
    deposit: "0",
    multiplier: "x2",
    comingSoon: true
  }
];

export function PortfolioTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-6 gap-4 p-4 text-sm text-muted-foreground border-b">
        <div>Asset</div>
        <div>Platform Balance</div>
        <div>Deposit</div>
        <div>Point Multiplier</div>
        <div className="col-span-2"></div>
      </div>

      {assets.map((asset) => (
        <div key={asset.name} className="grid grid-cols-6 gap-4 p-4 items-center border-b last:border-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Image src={asset.icon} alt={asset.name} width={24} height={24} />
            </div>
            <span className="font-medium">{asset.name}</span>
            {asset.comingSoon && (
              <Badge variant="secondary" className="text-xs">Soon</Badge>
            )}
          </div>
          
          <div>{asset.platformBalance}</div>
          <div>{asset.deposit}</div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">
              {asset.multiplier}
            </Badge>
            {asset.decreaseInfo && (
              <span className="text-sm text-muted-foreground">
                {asset.decreaseInfo}
              </span>
            )}
          </div>

          <div>
            <Button variant="outline" size="sm" className="w-full" disabled={asset.comingSoon}>
              Deposit
            </Button>
          </div>
          <div>
            <Button variant="outline" size="sm" className="w-full" disabled={asset.comingSoon}>
              Withdraw
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}