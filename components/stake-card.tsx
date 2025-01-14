'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from './Icon';

interface StakeCardProps {
  title: string;
}

export function StakeCard({ title }: StakeCardProps) {
  return (
    <Card className="rounded-[10px] lg:rounded-[20px] h-[69px] lg:h-[120px] px-[15px] py-[10px] lg:px-[20px] lg:py-[15px]">
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-[9px] lg:text-[10px] text-white font-semibold font-mono bg-[#0B63FFBF] rounded-[5px] max-w-[100px] px-2 py-1">
            x1 Multiplier
          </CardTitle>
          <Icon fill={'#FFFFFF'} name={'rightCorner'} />
        </div>
      </CardHeader>
      <CardContent className="p-0 mt-[4px] lg:mt-[14px]">
        <div className="text-[18px] lg:text-3xl font-bold">Stake CSPR</div>
      </CardContent>
    </Card>
  );
}
