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
    <div className="px-[60px] py-[30px] space-y-6">
      <div className="w-full flex items-center gap-2">
        <div className="w-full lg:w-3/5">
          <p className="text-xs mb-2 font-semibold text-[#00000059] font-mono">
            CURRENT EPOCH
          </p>
          <EpochProgress currentEpoch={1} tvl="$7m" />
        </div>

        {openModal && <HistoryModal onOpenChange={setModalOpen} />}

        <div className="hidden lg:block w-2/5">
          <p className="text-xs mb-2 font-semibold text-[#00000059] font-mono">
            NEXT EPOCH
          </p>
          <div className="w-full h-[50px] py-2 px-4 border border-[#EBEDED] bg-white rounded-lg">
            <div className="w-full flex items-center justify-between">
              <span>Epoch 2</span>
              <span>$7-15m TVL</span>
              <span className="text-red-500">-10% Rewards</span>
            </div>
          </div>
        </div>

        <div className="w-[50xp] mt-6">
          <div
            onClick={() => setModalOpen(true)}
            className="rounded-[10px] border border-[#EBEDED] bg-[#FFFFFF] w-[50px] h-[50px] py-4 flex flex-col items-center"
          >
            <img src="/box.svg" alt="boox" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[60%_1fr] xl:grid-cols-[40%_1fr_1fr] gap-6">
        <RewardsCard
          title="TOTAL REWARDS"
          points="134,304"
          usdValue="0.0000"
          rwafiValue="0.0000"
          variant="primary"
        />
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

      <div className="grid grid-cols-2 gap-6">
        <PortfolioValue value="$142,560.32" />
        <StakeCard title="Stake CSPR" />
      </div>

      <PortfolioChart />
    </div>
  );
}
