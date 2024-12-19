'use client';
import { EpochBadge } from '@/components/ui/epoch-badge';

interface EpochProgressProps {
  currentEpoch: number;
  tvl: string;
}

export function EpochProgress({ currentEpoch, tvl }: EpochProgressProps) {
  return (
    <div className="w-full pr-4 bg-white rounded-[10px] border border-[#0B63FF] shadow-sm">
      <div className="h-full flex items-center justify-between">
        <EpochBadge epoch={currentEpoch} tvl={tvl} />
        <div className="relative h-[10px] w-[260px] overflow-hidden rounded-[10px] bg-[#0B63FF33]">
          <div
            className="h-full w-full flex-1 bg-primary transition-all"
            style={{ transform: `translateX(-${100 - 45}%)` }}
          />
        </div>
      </div>
    </div>
  );
}
