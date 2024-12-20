'use client';
import { EpochBadge } from '@/components/ui/epoch-badge';

interface EpochProgressProps {
  currentEpoch: number;
  tvl: string;
}

export function EpochProgress({ currentEpoch, tvl }: EpochProgressProps) {
  return (
    <div className="w-full h-[40px] md:h-[50px] pr-4 bg-white rounded-[10px] border border-[#0B63FF] shadow-sm">
      <div className="h-full flex items-center justify-between">
        <EpochBadge epoch={currentEpoch} tvl={tvl} />
        <div className="hidden xl:block relative h-[10px] w-[26px] rounded-full lg:w-[260px] lg:rounded-[10px] overflow-hidden bg-[#0B63FF33]">
          <div
            className="h-full w-full flex-1 bg-primary transition-all"
            style={{ transform: `translateX(-${100 - 45}%)` }}
          />
        </div>
        <div className="relative flex xl:hidden items-center justify-center rounded-full w-[26px] h-[25px]">
          <div className="absolute w-full h-full rounded-full border-4 border-[#0B63FF33]"></div>
          <div
            className="absolute w-full h-full rounded-full border-4 border-[#0B63FF] border-b-transparent"
            // style={{ transform: `rotate(${1 * 360}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
