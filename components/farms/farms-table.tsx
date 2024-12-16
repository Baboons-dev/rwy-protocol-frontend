"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Farm {
  name: string;
  icon: string;
  platformBalance: string;
  deposit: string;
  multiplier: string;
  decreaseInfo?: string;
  comingSoon?: boolean;
  apr: string;
  tvl: string;
}

const farms: Farm[] = [
  {
    name: "CSPR",
    icon: "/icons/cspr.svg",
    platformBalance: "0",
    deposit: "0",
    multiplier: "x1",
    decreaseInfo: "Decreases to x0.9 in 13h 12m 45s",
    apr: "12.5%",
    tvl: "$1.2M"
  },
  {
    name: "RWAfi",
    icon: "/icons/rwafi.svg",
    platformBalance: "0",
    deposit: "0",
    multiplier: "x2",
    comingSoon: true,
    apr: "25.0%",
    tvl: "$800K"
  },
  {
    name: "CUSD",
    icon: "/icons/cusd.svg",
    platformBalance: "0",
    deposit: "0",
    multiplier: "x2",
    comingSoon: true,
    apr: "18.7%",
    tvl: "$500K"
  }
];

export function FarmsTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-8 gap-4 p-4 text-sm text-muted-foreground border-b">
        <div>Asset</div>
        <div>Platform Balance</div>
        <div>Deposit</div>
        <div>Point Multiplier</div>
        <div>APR</div>
        <div>TVL</div>
        <div className="col-span-2"></div>
      </div>

      {farms.map((farm) => (
        <div key={farm.name} className="grid grid-cols-8 gap-4 p-4 items-center border-b last:border-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Image src={farm.icon} alt={farm.name} width={24} height={24} />
            </div>
            <span className="font-medium">{farm.name}</span>
            {farm.comingSoon && (
              <Badge variant="secondary" className="text-xs">Soon</Badge>
            )}
          </div>
          
          <div>{farm.platformBalance}</div>
          <div>{farm.deposit}</div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">
              {farm.multiplier}
            </Badge>
            {farm.decreaseInfo && (
              <span className="text-sm text-muted-foreground">
                {farm.decreaseInfo}
              </span>
            )}
          </div>

          <div className="text-green-500">{farm.apr}</div>
          <div>{farm.tvl}</div>

          <div>
            <Button variant="outline" size="sm" className="w-full" disabled={farm.comingSoon}>
              Deposit
            </Button>
          </div>
          <div>
            <Button variant="outline" size="sm" className="w-full" disabled={farm.comingSoon}>
              Withdraw
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}