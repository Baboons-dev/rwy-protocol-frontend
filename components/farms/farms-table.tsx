'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
    name: 'CSPR',
    icon: '/cspr.svg',
    platformBalance: '0',
    deposit: '120,405 CSPR',
    multiplier: 'x1',
    decreaseInfo: 'Decreases to x0.9 in 13h 12m 45s',
  },
  {
    name: 'RWAfi',
    icon: '/rwafi.svg',
    platformBalance: '0',
    deposit: '120,405 CSPR',
    multiplier: 'x2',
    comingSoon: true,
  },
  {
    name: 'CUSD',
    icon: '/cusd.svg',
    platformBalance: '0',
    deposit: '120,405 CSPR',
    multiplier: 'x2',
    comingSoon: true,
  },
];

export function FarmsTable() {
  return (
    <div className="rounded-lg shadow-sm">
      <div className="grid grid-cols-[1fr_1fr_1fr_2fr] gap-4 px-[20px] bg-transparent text-[10px] font-mono text-black pb-[5px]">
        <div>Asset</div>
        <div>Point Multiplier</div>
        <div>Staked</div>
        <div>Unstaking</div>
      </div>

      {assets.map((asset) => (
        <div
          key={asset.name}
          className="bg-white grid grid-cols-[1fr_1fr_1fr_2fr] gap-4 px-[20px] h-12 mb-[5px] items-center rounded-[10px] border border-[#EBEDED]"
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <Image src={asset.icon} alt={asset.name} width={30} height={30} />
            </div>
            <span className="font-bold text-sm font-mono">{asset.name}</span>
            {asset.comingSoon && (
              <p className="bg-[#0B63FF1A] px-[8px] py-[5px] rounded-[5px] text-[#0B63FF] font-[500] text-[10px] leading-tight font-mono">
                Soon
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Badge className="rounded-[5px]" variant="secondary">
              {asset.multiplier}
            </Badge>
            {asset.decreaseInfo && (
              <span className="text-[10px] font-mono text-[#000000BF]">
                {asset.decreaseInfo}
              </span>
            )}
          </div>

          <div className="font-semibold text-xs font-mono">{asset.deposit}</div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <img
                  className="w-[12px] h-[12px]"
                  src="/loadIcon.svg"
                  alt="looad"
                />
                <span className="font-semibold text-xs font-mono">1</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  className="w-[12px] h-[12px]"
                  src="/tick.svg"
                  alt="looad"
                />
                <span className="font-semibold text-xs font-mono">1</span>
              </div>
            </div>

            <div className="flex gap-[5px]">
              <Button
                variant="outline"
                size="sm"
                className="w-[85px] bg-[#0B63FF] text-white font-xs"
                disabled={asset.comingSoon}
              >
                Stake
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
