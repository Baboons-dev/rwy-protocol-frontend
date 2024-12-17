"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "./Icon";

interface StakeCardProps {
  title: string;
}

export function StakeCard({ title }: StakeCardProps) {
  return (
    <Card className="rounded-[20px] h-[120px] px-[20px] py-[15px]">
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-[10px] text-white font-semibold font-mono bg-[#0B63FFBF] rounded-[5px] max-w-[100px] px-2 py-1">
            x1 Multiplier
          </CardTitle>
          <Icon fill={"#FFFFFF"} name={"rightCorner"} />
        </div>
      </CardHeader>
      <CardContent className="p-0 mt-[15px]">
        <div className="text-3xl font-bold">Stake CSPR</div>
      </CardContent>
    </Card>
  );
}
