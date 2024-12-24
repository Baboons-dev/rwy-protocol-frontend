'use client';
import { EpochProgress } from '@/components/epoch-progress';
import { RewardsCard } from '@/components/rewards-card';
import { PortfolioValue } from '@/components/portfolio-value';
import { StakeCard } from '@/components/stake-card';
import { PortfolioChart } from '@/components/portfolio-chart';
import { useState } from 'react';
import { HistoryModal } from '@/components/historyModal';

export default function Dashboard() {
  const [openModal, setModalOpen] = useState(false);

  return (
    <div className="px-[5px] py-[10px] lg:px-[60px] lg:py-[30px] space-y-2 lg:space-y-6">
      <div className="w-[calc(100vw-10px)] md:w-full flex items-center gap-2">
        <div className="w-full xl:w-3/5">
          <p className="hidden lg:block text-xs px-[20px]  mb-2 font-semibold text-[#00000059] font-mono">
            CURRENT EPOCH
          </p>
          <EpochProgress currentEpoch={1} tvl="$7m" />
        </div>

        {openModal && <HistoryModal onOpenChange={setModalOpen} />}

        <div className="hidden xl:block w-2/5">
          <p className="text-xs mb-2 px-[20px] font-semibold text-[#00000059] font-mono">
            NEXT EPOCH
          </p>
          <div className="w-full h-[50px] items-center flex py-2 px-4 border border-[#EBEDED] bg-white rounded-[10px] justify-between">
            <span className="text-[18px] font-semibold text-[#000000BF]">
              Epoch 2
            </span>
            <span className="text-[14px]">$7-15m TVL</span>
            <span className="text-red-500 text-[12px] font-mono">
              -10% Rewards
            </span>
          </div>
        </div>

        <div className="w-[50xp] lg:mt-6">
          <div
            onClick={() => setModalOpen(true)}
            className="rounded-[10px] border border-[#EBEDED] bg-[#FFFFFF] w-[40px] md:w-[50px] h-[40px] md:h-[50px] py-3 md:py-4 flex flex-col items-center"
          >
            <img src="/box.svg" alt="boox" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr] xl:grid-cols-[1fr_1fr] gap-[20px]">
        <RewardsCard
          title="TOTAL REWARDS"
          points="134,304"
          usdValue="0.00"
          rwafiValue="0.00"
          variant="primary"
          children={
            <RewardsCard
              title="DAILY REWARDS"
              points="304"
              usdValue="0.00"
              rwafiValue="0.00"
              percentage="0.0384%"
            />
          }
        />
        <div className="hidden xl:flex gap-[20px] w-full">
          <RewardsCard
            title="DAILY REWARDS"
            points="304"
            usdValue="0.0000"
            rwafiValue="0.0000"
            percentage="0.0384%"
          />
          <RewardsCard
            title="YEARLY REWARDS"
            points="451.4K"
            usdValue="0.0000"
            rwafiValue="0.0000"
            percentage="0.0384%"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[5px] lg:gap-6">
        <PortfolioValue value="$142,560.32" />
        <StakeCard title="Stake CSPR" />
      </div>

      <PortfolioChart />
    </div>
  );
}
