interface EpochBadgeProps {
  epoch: number;
  tvl: string;
}

export function EpochBadge({ epoch, tvl }: EpochBadgeProps) {
  return (
    <div className="flex h-full items-center space-x-2">
      <div className="w-full h-full flex">
        <div className="min-w-[109px] w-full h-[50px] flex items-center space-x-2 bg-primary px-4 rounded-tl-[8px] rounded-bl-[8px]">
          <img src="/fire.svg" alt="ffire" />
          <span className="text-white text-[21px] font-bold">
            Epoch {epoch}
          </span>
        </div>
        <img src="/blue.svg" className="relative z-10 ml-[-0.4px]" alt="blue" />
      </div>
      <span className="w-[120px] no-wrap text-black font-bold ml-[20px]">
        {tvl} TVL
      </span>
    </div>
  );
}
