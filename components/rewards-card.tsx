"use client";

import { Card } from "@/components/ui/card";
import { RewardValue } from "@/components/ui/reward-value";
import { InfoIcon } from "lucide-react";

interface RewardsCardProps {
  title: string;
  points: string;
  usdValue: string;
  rwafiValue: string;
  percentage?: string;
  variant?: "primary" | "default";
}

export function RewardsCard({
  title,
  points,
  usdValue,
  rwafiValue,
  percentage,
  variant = "default",
}: RewardsCardProps) {
  return (
    <Card
      style={{
        background:
          variant === "primary"
            ? "linear-gradient(93.56deg, #2271FE 0.02%, #0B63FF 99.98%)"
            : "",
      }}
      className={`${
        variant === "primary" ? "text-white" : "bg-card"
      } rounded-[20px] px-[20px] py-[15px]`}
    >
      <div className="">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xs font-mono font-[500]">
            {title}
            {percentage && (
              <span className="ml-2 text-green-500">{percentage}</span>
            )}
          </h3>
          {variant === "primary" && (
            <InfoIcon className="h-4 w-4 text-[#FFFFFF80]" />
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline space-x-2">
            <div className="text-5xl font-bold font-mono">{points}</div>
            <div
              style={{
                color: variant === "primary" ? "#FFFFFF80" : "#00000080",
              }}
              className="text-[16px] font-mono"
            >
              points
            </div>
          </div>

          <RewardValue
            variant={variant}
            usdValue={usdValue}
            rwafiValue={rwafiValue}
          />
        </div>
      </div>
    </Card>
  );
}
