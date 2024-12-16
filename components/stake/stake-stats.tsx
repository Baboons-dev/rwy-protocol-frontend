"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StakeStats() {
  return (
    <div className="mx-[20px] my-[10px] p-[10px] border border-[#EBEDED] rounded-[10px] grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-2 p-[10px]">
        <div className="flex items-center space-x-2">
          <h3 className="text-xs font-mono font-semibold">REWARD RATE</h3>
          <Badge variant="secondary">x1</Badge>
        </div>
        <div>
          <div className="text-[20px] font-bold">1 CSPR : 1 Point</div>
          <p className="text-[10px] font-mono text-[#000000BF]">
            Rate Decrease to x0.9 in: 13h 12m 45s
          </p>
        </div>
      </div>

      <div className="space-y-2 p-[10px]">
        <h3 className="text-xs font-mono font-semibolds">
          PROJECTED ANNUAL REWARD
        </h3>
        <div className="text-[20px] font-bold">134.4K Points</div>
      </div>
    </div>
  );
}
