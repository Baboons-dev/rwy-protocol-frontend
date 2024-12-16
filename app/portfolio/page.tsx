"use client";

import { PortfolioHeader } from "@/components/portfolio/portfolio-header";
import { PortfolioTable } from "@/components/portfolio/portfolio-table";

export default function PortfolioPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <PortfolioHeader title="Portfolio" />
      <PortfolioTable />
    </div>
  );
}