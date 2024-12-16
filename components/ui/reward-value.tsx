"use client";

interface RewardValueProps {
  usdValue: string;
  rwafiValue: string;
  soon?: boolean;
  variant: string;
}

export function RewardValue({
  usdValue,
  rwafiValue,
  soon = true,
  variant,
}: RewardValueProps) {
  return (
    <div
      style={{
        color: variant === "primary" ? "#FFFFFFBF" : "#000000BF",
      }}
      className="flex space-x-4 font-mono text-sm"
    >
      <div>
        {usdValue} USD{" "}
        {soon && (
          <span
            style={{
              color: variant === "primary" ? "#FFFFFF80" : "#0B63FFBF",
            }}
          >
            (SOON)
          </span>
        )}
      </div>
      <div>
        {rwafiValue} RWAFi{" "}
        {soon && (
          <span
            style={{
              color: variant === "primary" ? "#FFFFFF80" : "#0B63FFBF",
            }}
          >
            (SOON)
          </span>
        )}
      </div>
    </div>
  );
}
