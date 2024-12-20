'use client';

import { Card } from '@/components/ui/card';
import { RewardValue } from '@/components/ui/reward-value';
import { InfoIcon } from 'lucide-react';
import Icon from './Icon';
import { Children, useState } from 'react';
import { InfoModal } from './infoModal';

interface RewardsCardProps {
  title: string;
  points: string;
  usdValue: string;
  rwafiValue: string;
  percentage?: string;
  variant?: 'primary' | 'default';
  children?: any;
}

export function RewardsCard({
  title,
  points,
  usdValue,
  rwafiValue,
  percentage,
  variant = 'default',
  children,
}: RewardsCardProps) {
  const [openModal, setModalOpen] = useState(false);
  return (
    <Card
      style={{
        background:
          variant === 'primary'
            ? 'linear-gradient(93.56deg, #2271FE 0.02%, #0B63FF 99.98%)'
            : '',
      }}
      className={`${children ? 'w-[calc(100vw-10px)]' : 'w-full'} md:w-full ${
        variant === 'primary' ? 'text-white' : 'bg-card'
      } ${children ? 'p-[5px]' : 'p-[10px]'} rounded-[20px] lg:px-[20px] lg:py-[15px]`}
    >
      <div
        className={`${children ? 'flex items-center justify-between gap-2' : ''} xl:block`}
      >
        {openModal && <InfoModal onOpenChange={setModalOpen} />}
        <div className={children ? 'pl-[10px] py-[10px] lg:pl-0 lg:py-0' : ''}>
          <div className="flex justify-between items-start mb-2 mt-0 lg:mt-0 lg:mt-6">
            <h3 className="text-[10px] lg:text-xs font-mono font-[500]">
              {title}
              {percentage && (
                <span className="ml-2 text-[#39C412]">{percentage}</span>
              )}
            </h3>
            {variant === 'primary' && (
              <div
                onMouseEnter={() => setTimeout(() => setModalOpen(true), 500)}
                onMouseLeave={() => setTimeout(() => setModalOpen(false), 2000)}
                className="relative"
              >
                <Icon fill={'#FFFFFF'} name={'info'} />
              </div>
            )}
          </div>

          <div className="space-y-0 lg:space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-baseline space-x-2">
                <div className="text-[21px] lg:text-5xl font-bold">
                  {points}
                </div>
                <div
                  style={{
                    color: variant === 'primary' ? '#FFFFFF80' : '#00000080',
                  }}
                  className="text-[10px] lg:text-[16px] font-mono"
                >
                  points
                </div>
              </div>
              {title === 'DAILY REWARDS' && (
                <Icon fill={'#FFFFFF'} name={'lines'} />
              )}
            </div>

            <RewardValue
              variant={variant}
              usdValue={usdValue}
              rwafiValue={rwafiValue}
            />
          </div>
        </div>
        {children && <div className="w-1/2 block xl:hidden">{children}</div>}
      </div>
    </Card>
  );
}
