"use client";

import { Card } from "@/components/ui/card";
import { RewardValue } from "@/components/ui/reward-value";
import { InfoIcon } from "lucide-react";
import Icon from "./Icon";

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
              <span className="ml-2 text-[#39C412]">{percentage}</span>
            )}
          </h3>
          {variant === "primary" && <Icon fill={"#FFFFFF"} name={"info"} />}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline space-x-2">
              <div className="text-5xl font-bold">{points}</div>
              <div
                style={{
                  color: variant === "primary" ? "#FFFFFF80" : "#00000080",
                }}
                className="text-[16px] font-mono"
              >
                points
              </div>
            </div>
            {title === "DAILY REWARDS" && (
              <Icon fill={"#FFFFFF"} name={"lines"} />
            )}
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
