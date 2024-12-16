"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PortfolioValueProps {
  value: string;
}

export function PortfolioValue({ value }: PortfolioValueProps) {
  return (
    <Card className="rounded-[20px] h-[120px] px-[20px] py-[15px]">
      <CardHeader className="p-0">
        <CardTitle className="p-0 text-xs text-black font-semibold font-mono">
          PORTFOLIO VALUE
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-[15px]">
        <div className="text-5xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
