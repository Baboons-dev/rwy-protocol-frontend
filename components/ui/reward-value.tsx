'use client';

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
        color: variant === 'primary' ? '#FFFFFFBF' : '#000000BF',
      }}
      className="flex space-x-1 lg:space-x-2 font-mono text-[10px] lg:text-xs"
    >
      <div className="flex xl:block 2xl:flex gap-1">
        <span className="whitespace-nowrap">{usdValue} USD </span>
        {soon && (
          <span
            className="hidden lg:block"
            style={{
              color: variant === 'primary' ? '#FFFFFF80' : '#0B63FFBF',
            }}
          >
            (SOON)
          </span>
        )}
      </div>
      <div className="break-words">
        <span className="whitespace-nowrap">{rwafiValue} RWAFi </span>
        {soon && (
          <span
            style={{
              color: variant === 'primary' ? '#FFFFFF80' : '#0B63FFBF',
            }}
          >
            (SOON)
          </span>
        )}
      </div>
    </div>
  );
}
