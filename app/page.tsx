import { EpochProgress } from "@/components/epoch-progress";
import { RewardsCard } from "@/components/rewards-card";
import { PortfolioValue } from "@/components/portfolio-value";
import { StakeCard } from "@/components/stake-card";
import { PortfolioChart } from "@/components/portfolio-chart";

export default function Dashboard() {
  return (
    <div className="px-[60px] py-[30px] space-y-6">
      <div className="w-full flex items-center gap-2">
        <EpochProgress
          currentEpoch={1}
          nextEpoch={2}
          tvl="$7m"
          nextTvl="$7-15m"
          rewardChange="-10%"
        />

        <div className="hidden lg:block w-2/5 h-[50px] py-2 px-4 bg-white rounded-lg">
          <div className="w-full flex items-center justify-between">
            <span>Epoch 2</span>
            <span>$7-15m TVL</span>
            <span className="text-red-500">-10% Rewards</span>
          </div>
        </div>
        <div className="rounded-[10px] border border-[#EBEDED] bg-[#FFFFFF] w-[50px] h-[50px] py-4 flex flex-col items-center">
          <img src="/box.svg" alt="boox" />
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
