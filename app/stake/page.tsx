"use client";

import { StakeHeader } from "@/components/stake/stake-header";
import { StakeOptions } from "@/components/stake/stake-options";
import { StakeStats } from "@/components/stake/stake-stats";
import { StakeForm } from "@/components/stake/stake-form";
import { StakeInfo } from "@/components/stake/stake-info";
import { UnstakingInfo } from "@/components/stake/unstaking-info";

export default function StakePage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <StakeHeader title="Stake & Covnert" />
      <StakeOptions />
      <StakeStats />
      <StakeForm />
      <StakeInfo />
      <UnstakingInfo />
    </div>
  );
}