'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function StakeForm() {
  return (
    <Card className=" mx-[5px] my-[10px] lg:mx-[20px] p-[5px] bg-[#F7F8F9] border border-[#EBEDED]">
      <Tabs
        defaultValue="stake"
        className="p-0 rounded-[10px] rounded-tr-[10px] bg-white"
      >
        <TabsList className=" py-0 grid grid-cols-2">
          <TabsTrigger className="text-[12px] lg:text-sm" value="stake">
            Stake
          </TabsTrigger>
          <TabsTrigger className="text-[12px] lg:text-sm" value="unstake">
            Unstake
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="stake"
          className="p-[10px] lg:px-[20px] lg:pb-[20px]"
        >
          <div className="space-y-4 rounded-bl-[10px] rounded-br-[10px]">
            <div className="flex px-[20px] justify-between text-[10px] lg:text-sm font-mono font-[400]">
              <span>Balance</span>
              <div className="flex flex-col items-end">
                <span className="font-semibold">100,000.040392 CSPR</span>
                <span>~ $1,000 USD</span>
              </div>
            </div>

            <div className="bg-[#F7F8F9] rounded-[10px] px-[10px] py-[15px] space-y-2">
              <div className="flex justify-between font-mono font-bold text-[10px] lg:text-xs px-[10px]">
                <span>You will pay</span>
                <span>0 CSPR</span>
              </div>
              <Input
                className="rounded-[10px] px-[20px] text-[16px] font-mono font-semibold text-[#cccccc]"
                type="number"
                placeholder="0"
              />

              <div className="mt-[10px]">
                <div className="relative w-full mt-[20px] h-[10px] bg-[#0B63FF33] rounded-[10px]">
                  <div className="w-1/2 absolute top-0 left-0 h-[10px] bg-primary rounded-[10px]"></div>
                  <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-primary rounded-full cursor-pointer shadow-lg"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between font-semibold font-mono text-[10px] lg:text-xs px-[20px]">
                <span>You will receive</span>
                <span className="font-normal text-primary">0 stCSPR</span>
              </div>
            </div>

            <Button className="w-full bg-primary text-[12px] lg:text-[14px]">
              Balance
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="unstake">{/* Unstake form content */}</TabsContent>
      </Tabs>
    </Card>
  );
}
