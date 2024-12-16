"use client";
import { EpochBadge } from "@/components/ui/epoch-badge";

interface EpochProgressProps {
  currentEpoch: number;
  nextEpoch: number;
  tvl: string;
  nextTvl: string;
  rewardChange: string;
}

export function EpochProgress({
  currentEpoch,
  nextEpoch,
  tvl,
  nextTvl,
  rewardChange,
}: EpochProgressProps) {
  return (
    <div className="w-full lg:w-3/5 pr-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <EpochBadge epoch={currentEpoch} tvl={tvl} />
        <div className="relative h-[10px] w-[260px] overflow-hidden rounded-full bg-[#0B63FF33]">
          <div
            className="h-full w-full flex-1 bg-[#0B63FF] transition-all"
            style={{ transform: `translateX(-${100 - 45}%)` }}
          />
        </div>
      </div>
    </div>
  );
}
