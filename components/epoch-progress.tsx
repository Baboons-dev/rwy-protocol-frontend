"use client";

import { Progress } from "@/components/ui/progress";
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
        <Progress value={75} className="w-[260px] h-[10px]" />
      </div>
    </div>
  );
}
