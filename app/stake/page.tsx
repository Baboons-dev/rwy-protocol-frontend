'use client';

import { StakeHeader } from '@/components/stake/stake-header';
import { StakeOptions } from '@/components/stake/stake-options';
import { StakeStats } from '@/components/stake/stake-stats';
import { StakeForm } from '@/components/stake/stake-form';
import { StakeInfo } from '@/components/stake/stake-info';
import { UnstakingInfo } from '@/components/stake/unstaking-info';

export default function StakePage() {
  return (
    <div className="px-[5px] py-[20px] lg:px-[60px] lg:py-[40px]">
      <StakeHeader title="Stake & Convert" />
      <div className="max-w-[590px] mx-auto my-[20px] bg-[#ffffff] rounded-[15px] border border-[#EBEDED]">
        <StakeOptions />
        <StakeStats />
        <StakeForm />
        <StakeInfo />
      </div>
      <div className="max-w-[590px] mx-auto">
        <div className="flex justify-between font-bold font-mono text-[10px] lg:text-xs px-[20px]">
          <span>Unstaking</span>
          <span className="font-normal text-[9px] lg:text-xs">Claim</span>
        </div>
        <UnstakingInfo />
      </div>
    </div>
  );
}
