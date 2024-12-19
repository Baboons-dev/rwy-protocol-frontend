'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

const options = [
  {
    title: 'Stake CSPR',
    subtitle: 'Get stCSPR',
    multiplier: 'x1',
    active: true,
  },
  {
    title: 'Borrow CUSD',
    subtitle: '$110 stCSPR',
    multiplier: 'x2',
    comingSoon: true,
  },
  {
    title: 'Stake CUSD',
    subtitle: 'Get stCUSD',
    multiplier: 'x3',
    comingSoon: true,
  },
];

export function StakeOptions() {
  return (
    <div className="p-[5px] flex items-center">
      {options.map((option, i) => (
        <div className="w-full flex">
          {i !== 0 && (
            <img
              src={i === 1 ? '/arrWhite.svg' : '/arrGray.svg'}
              className="w-[14px] lg:w-auto relative z-10 mr-[-10px] lg:mr-[-22px]"
              alt="blue"
            />
          )}
          <Card
            key={option.title}
            className={`w-full px-[10px] lg:px-[15px] py-[10px] rounded-[15px] relative border-0 shadow-0 ${
              i == 0 ? '' : 'bg-[#F7F8F9]'
            }`}
          >
            <div
              className={`flex flex-col items-center justify-center ${
                option.comingSoon ? '' : 'gap-4'
              }`}
            >
              <Badge variant={i == 0 ? 'secondary' : 'destructive'}>
                {option.multiplier} Multiplier
              </Badge>
              <div>
                <h3
                  style={{
                    color: i == 0 ? '#000000' : '#00000059',
                  }}
                  className="font-bold text-[12px] lg:text-[16px]"
                >
                  {option.title}
                </h3>
                <p
                  style={{
                    color: i == 0 ? '#00000059' : '#00000033',
                  }}
                  className="text-[9px] lgtext-sm font-mono font-semibold text-center text-[#00000059]"
                >
                  {option.subtitle}
                </p>
                {option.comingSoon && (
                  <div className="flex items-center justify-center gap-2">
                    <img src={'/lock.svg'} className="" alt="blue" />
                    <h3 className="text-center text-[8px] lg:text-[10px] font-mono font-semibold ">
                      Coming Soon
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </Card>
          {/* {i === 1 && (
            <img src="/arrGray.svg" className="relative z-10" alt="blue" />
          )} */}
        </div>
      ))}
    </div>
  );
}
