"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export function UnstakingInfo() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h3 className="font-semibold">Unstaking</h3>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>123,405.0403 CSPR</span>
          </div>
        </div>
        
        <div className="text-right space-y-1">
          <div className="text-sm text-muted-foreground">
            Available in 13h 12m 24s
          </div>
          <Button>Claim</Button>
        </div>
      </div>
    </Card>
  );
}