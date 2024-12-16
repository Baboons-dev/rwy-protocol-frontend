interface EpochBadgeProps {
  epoch: number;
  tvl: string;
}

export function EpochBadge({ epoch, tvl }: EpochBadgeProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-full flex">
        <div className="min-w-[109px] h-[50px] w-full h-full flex items-center space-x-2 py-2 bg-[#0B63FF] px-4 rounded-tl-[10px] rounded-bl-[10px]">
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
