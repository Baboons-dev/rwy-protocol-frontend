"use client";

import { Button } from "@/components/ui/button";
import { WalletIcon, Network } from "lucide-react";
import Image from "next/image";

export function Topbar() {
  return (
    <div className="h-16 border-b bg-[#FFFFFF] px-[30px] py-[10px] rounded-[20px] border border-[#EFF3F4]">
      <div className="w-full h-full flex items-center justify-between">
        <img src={"/logo.svg"} alt="logoo" />
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#EBECED] px-[7px] py-[12px] font-mono"
          >
            <span>0206b8...392a</span>
          </Button>
          <img src={"/wallet.png"} alt="wallet" />
        </div>
      </div>
    </div>
  );
}
