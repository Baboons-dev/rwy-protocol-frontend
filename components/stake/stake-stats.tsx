'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function StakeStats() {
  return (
    <div className="mx-[5px] lg:mx-[20px] my-[10px] p-[5px] lg:p-[10px] border border-[#EBEDED] rounded-[10px] grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-2 py-[5px] px-[10px] lg:p-[10px]">
        <div className="flex items-center space-x-2">
          <h3 className="text-[9px] lg:text-xs font-mono font-semibold">
            REWARD RATE
          </h3>
          <p className="bg-[#FFCD2A] rounded-[5px] w-[25px] h-[18px] text-center text-[9px] lg:text-[10px] font-mono font-semibold">
            x1
          </p>
        </div>
        <div>
          <div className="text-[14px] lg:text-[20px] font-bold">
            1 CSPR : 1 Point
          </div>
          <p className="text-[9px] lg:text-[10px] font-mono text-[#000000BF]">
            Rate Decrease to x0.9 in: 13h 12m 45s
          </p>
        </div>
      </div>

      <div className="space-y-2 py-[5px] px-[10px] lg:p-[10px]">
        <h3 className="text-[9px] lg:text-xs font-mono font-semibolds">
          PROJECTED ANNUAL REWARD
        </h3>
        <div className="text-[14px] lg:text-[20px] font-bold">
          134.4K Points
        </div>
      </div>
    </div>
  );
}
