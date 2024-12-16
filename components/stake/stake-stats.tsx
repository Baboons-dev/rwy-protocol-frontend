"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StakeStats() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold">REWARD RATE</h3>
          <Badge variant="secondary">x1</Badge>
        </div>
        <div className="text-2xl font-mono font-bold">1 CSPR : 1 Point</div>
        <p className="text-sm text-muted-foreground">
          Rate Decrease to x0.9 in: 13h 12m 45s
        </p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">PROJECTED ANNUAL REWARD</h3>
        <div className="text-2xl font-mono font-bold">134.4K Points</div>
      </div>
    </div>
  );
}