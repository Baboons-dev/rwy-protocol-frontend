'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

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
  const [toggleRow, setRowToggle] = useState(-1);

  return (
    <div className="rounded-lg shadow-sm">
      <div className="grid grid-cols-4  lg:grid-cols-[1fr_1fr_1fr_3fr] gap-2 md:gap-4 px-[10px] md:px-[20px] bg-transparent text-[8px] md:text-[10px] font-mono text-black pb-[5px]">
        <div>Asset</div>
        <div>Point Multiplier</div>
        <div>Staked</div>
        <div>Unstaking</div>
      </div>

      {assets.map((asset, i) => (
        <div className="w-full bg-white flex flex-col rounded-[10px] mb-[5px] border border-[#EBEDED]">
          <div
            key={asset.name}
            className="bg-white grid grid-cols-4 lg:grid-cols-[1fr_1fr_1fr_3fr] gap-2 px-[10px] md:px-[20px] h-12 items-center rounded-[10px]"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image
                  src={asset.icon}
                  alt={asset.name}
                  width={30}
                  height={30}
                />
              </div>
              <span className="font-bold text-xs md:text-sm font-mono">
                {asset.name}
              </span>
              {asset.comingSoon && (
                <p className="hidden bg-[#0B63FF1A] px-[8px] py-[5px] rounded-[5px] text-primary font-[500] text-[10px] leading-tight font-mono">
                  Soon
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Badge className="rounded-[5px]" variant="secondary">
                {asset.multiplier}
              </Badge>
              {asset.decreaseInfo && (
                <span className="text-[8px] md:text-[10px] font-mono text-[#000000BF]">
                  {asset.decreaseInfo}
                </span>
              )}
            </div>

            <div className="font-semibold text-[10px] md:text-xs font-mono">
              {asset.deposit}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 md:space-x-6">
                <div className="flex items-center space-x-1 md:space-x-2">
                  <img
                    className="w-[12px] h-[12px]"
                    src="/loadIcon.svg"
                    alt="looad"
                  />
                  <span className="font-semibold text-[10px] md:text-xs font-mono">
                    1
                  </span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <img
                    className="w-[12px] h-[12px]"
                    src="/tick.svg"
                    alt="looad"
                  />
                  <span className="font-semibold text-[10px] md:text-xs font-mono">
                    1
                  </span>
                </div>
              </div>

              <div
                onClick={() => setRowToggle(i === toggleRow ? -1 : i)}
                className="block lg:hidden"
              >
                <img
                  src="/expand.svg"
                  className={`transform ${toggleRow === i ? 'rotate-0' : 'rotate-180'}`}
                  alt="eexpaand"
                />
              </div>

              <div className="hidden lg:flex gap-[5px]">
                <Button
                  size="sm"
                  className="w-[85px] font-xs"
                  disabled={asset.comingSoon}
                >
                  Stake
                </Button>
              </div>
            </div>
          </div>
          {toggleRow === i && (
            <div className="w-full px-[10px] py-[5px] flex gap-[5px]">
              <Button
                size="sm"
                className="w-full font-xs"
                disabled={asset.comingSoon}
              >
                Stake
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
