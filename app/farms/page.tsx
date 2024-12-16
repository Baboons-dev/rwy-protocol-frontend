"use client";

import { FarmsHeader } from "@/components/farms/farms-header";
import { FarmsTable } from "@/components/farms/farms-table";

export default function FarmsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <FarmsHeader title="Farms" />
      <FarmsTable />
    </div>
  );
}