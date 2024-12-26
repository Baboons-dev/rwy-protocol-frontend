'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ParticipationModalProps {
  onOpenChange: (open: boolean) => void;
}

export function HistoryModal({ onOpenChange }: ParticipationModalProps) {
  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent
        style={{
          borderRadius: '20px',
        }}
        className="w-full px-[30px] py-[20px] max-w-[600px] h-[400px] cursor-pointer"
      >
        <DialogHeader className="">
          <DialogTitle className="flex items-center justify-between text-[24px] font-bold">
            <span>Epoch History</span>
            <img
              className="p-[11px] rounded-[10px] bg-[#EFF3F4] cursor-pointer"
              src="/closeIcon.svg"
              alt="close"
              onClick={() => onOpenChange(false)}
            />
          </DialogTitle>
        </DialogHeader>
        <div className="mt-0 h-[300px]">
          <p className="text-sm font-bold text-[#000000] leading-[19px] mb-2 font-mono">
            Upcoming
          </p>
          <div className="w-full h-[45px] px-[20px] border border-[#EBEDED] bg-white rounded-lg">
            <div className="w-full h-full flex items-center justify-between text-[12px] font-medium text-[#000000] font-mono">
              <span className="font-sans text-[14px] font-bold">Epoch 2</span>
              <span>$7-15m TVL</span>
              <span className="text-red-500">-10% Rewards</span>
              <span>14/01/25 - 14/07/25</span>
            </div>
          </div>

          <p className="text-sm font-bold text-[#000000] leading-[19px] mb-2 mt-[30px] font-mono">
            Past
          </p>
          <div className="w-full h-[45px] px-[20px] border border-[#EBEDED] mb-2 bg-white rounded-lg">
            <div className="w-full h-full flex items-center justify-between text-[12px] font-medium text-[#000000] font-mono">
              <span className="font-sans text-[14px] font-bold">Epoch 2</span>
              <span>$7m TVL</span>
              <span>1.51b points</span>
              <span>14/01/25 - 14/07/25</span>
            </div>
          </div>
          <div className="w-full h-[45px] px-[20px] border border-[#EBEDED] bg-white rounded-lg">
            <div className="w-full h-full flex items-center justify-between text-[12px] font-medium text-[#000000] font-mono">
              <span className="font-sans text-[14px] font-bold">Epoch 2</span>
              <span>$7m TVL</span>
              <span>1.51b points</span>
              <span>14/01/25 - 14/07/25</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
