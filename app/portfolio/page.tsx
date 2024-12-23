'use client';

import { PortfolioHeader } from '@/components/portfolio/portfolio-header';
import { PortfolioTable } from '@/components/portfolio/portfolio-table';

export default function PortfolioPage() {
  return (
    <div className="py-[20px] px-[5px] md:px-10 max-w-7xl mx-auto space-y-[20px]">
      <PortfolioHeader title="Portfolio" />
      <PortfolioTable />
    </div>
  );
}
