'use client';

import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

interface ParticipationModalProps {
  onOpenChange: (open: boolean) => void;
}

export function InfoModal({ onOpenChange }: ParticipationModalProps) {
  return (
    <Dialog open onOpenChange={onOpenChange}>
      {/* <DialogOverlay></DialogOverlay> */}
      <DialogContent
        style={{
          borderRadius: '10px',
        }}
        className="w-full left-[35%] top-[14%] lg:top-[24%] lg:left-[44%] xl:top-[28%] p-[14px] max-w-[250px] h-[80px]"
      >
        <p className="h-[56px] text-[10px] text-[#000000BF] leading-[14px] font-mono">
          Whatever here lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </DialogContent>
    </Dialog>
  );
}
