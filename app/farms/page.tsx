'use client';

import { FarmsHeader } from '@/components/farms/farms-header';
import { FarmsTable } from '@/components/farms/farms-table';

export default function FarmsPage() {
  return (
    <div className="py-[20px] max-w-7xl mx-auto space-y-6">
      <FarmsHeader title="Farms" />
      <FarmsTable />
    </div>
  );
}
