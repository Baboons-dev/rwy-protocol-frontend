'use client';

import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Dummy data to mimic the chart in the screenshot
const generateDummyData = (days: number) => {
  return Array.from({ length: days }, (_, i) => ({
    date: i,
    value: Math.floor(Math.random() * 200) + 50 + i * 2,
  }));
};

const timeRanges = [
  { label: '24H', days: 24 },
  { label: '1W', days: 7 },
  { label: '1M', days: 30 },
  { label: '3M', days: 90 },
  { label: '1Y', days: 365 },
];

export function PortfolioChart() {
  const [selectedRange, setSelectedRange] = useState(timeRanges[0]);
  const data = generateDummyData(selectedRange.days);

  return (
    <Card className="p-[10px]">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-1 lg:space-x-2 border border-[#EBEDED] rounded-[10px] p-[5px]">
          {timeRanges.map((range) => (
            <Button
              key={range.label}
              variant={selectedRange === range ? 'default' : 'outline'}
              size="sm"
              className={
                selectedRange === range
                  ? 'border-0 bg-[#0B63FF33] w-[25px] h-[22px] rounded-[5px] text-primary font-mono text-[10px] lg:text-xs font-bold hover:text-white'
                  : 'border-0 bg-white w-[25px] h-[22px] rounded-[5px] text-[#808080] font-mono text-[10px] lg:text-xs font-bold'
              }
              onClick={() => setSelectedRange(range)}
            >
              {range.label}
            </Button>
          ))}
        </div>
        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="flex items-center border border-[#EBEDED] rounded-[10px] p-[5px] text-primary space-x-2 lg:space-x-4">
            <Button
              className="border-0 text-[10px] lg:text-xs w-[56px] h-[22px] lg:w-[90px] lg:h-[30px]"
              variant="outline"
              size="sm"
            >
              Revenue
            </Button>
            <Button
              className="border-0 bg-[#0B63FF33] text-[10px] lg:text-xs w-[56px] h-[22px] lg:w-[90px] lg:h-[30px]"
              variant="outline"
              size="sm"
            >
              Balance
            </Button>
          </div>
          <div className="rounded-[10px] border border-[#EBEDED] bg-[#FFFFFF] w-[30px] h-[30px] py-1.5 lg:w-[40px] lg:h-[40px] lg:py-3 flex flex-col items-center">
            <img src="/calender.svg" alt="boox" />
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
