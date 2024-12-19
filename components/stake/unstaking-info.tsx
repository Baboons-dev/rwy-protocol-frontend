'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

export function UnstakingInfo() {
  return (
    <div className="mt-2 flex flex-col gap-2">
      <Card className="px-[20px] py-[10px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-[10px]">
            <img src="/loadIcon.svg" alt="looaad" />
            <h3 className="font-semibold text-[10px] lg:text-[14px] font-mono">
              123,405.0403 CSPR
            </h3>
          </div>
          <span className="text-[9px] lg:text-[10px] font-mono">
            Available in 13h 12m 24s
          </span>
        </div>
      </Card>
      <Card className="px-[20px] w-full h-[45px]">
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-[10px]">
            <img src="/tick.svg" alt="looaad" />
            <h3 className="font-semibold text-[10px] lg:text-[14px] font-mono">
              123,405.0403 CSPR
            </h3>
          </div>
          <Button className="w-[86px] h-[30px] bg-primary text-[10px] lg:text-xs">
            Claim
          </Button>
        </div>
      </Card>
    </div>
  );
}
