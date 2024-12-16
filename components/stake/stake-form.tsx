"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function StakeForm() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="stake">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="stake">Stake</TabsTrigger>
          <TabsTrigger value="unstake">Unstake</TabsTrigger>
        </TabsList>
        
        <TabsContent value="stake">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Balance</span>
              <span>100,000.040392 CSPR</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>You will pay</span>
                <span>0 CSPR</span>
              </div>
              <Input type="number" placeholder="0.00" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>You will receive</span>
                <span>0 stCSPR</span>
              </div>
              <Input type="number" placeholder="0.00" disabled />
            </div>
            
            <Button className="w-full">Balance</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="unstake">
          {/* Unstake form content */}
        </TabsContent>
      </Tabs>
    </Card>
  );
}