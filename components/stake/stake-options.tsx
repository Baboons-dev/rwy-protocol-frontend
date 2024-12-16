"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const options = [
  {
    title: "Stake CSPR",
    subtitle: "Get stCSPR",
    multiplier: "x1",
    active: true,
  },
  {
    title: "Borrow CUSD",
    subtitle: "$110 stCSPR",
    multiplier: "x2",
    comingSoon: true,
  },
  {
    title: "Stake CUSD",
    subtitle: "Get stCUSD",
    multiplier: "x3",
    comingSoon: true,
  },
];

export function StakeOptions() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {options.map((option) => (
        <Card
          key={option.title}
          className={`p-4 relative ${
            option.active ? "border-blue-500" : "border-border"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary">{option.multiplier} Multiplier</Badge>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <h3 className="font-semibold">{option.title}</h3>
          <p className="text-sm text-muted-foreground">{option.subtitle}</p>
          {option.comingSoon && (
            <Badge className="absolute top-2 right-2">Coming Soon</Badge>
          )}
        </Card>
      ))}
    </div>
  );
}