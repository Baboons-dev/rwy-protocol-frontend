'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from './Icon';

interface PortfolioValueProps {
  value: string;
}

export function PortfolioValue({ value }: PortfolioValueProps) {
  return (
    <Card className="rounded-[20px] px-[15px] py-[10px] lg:px-[20px] lg:py-[15px]">
      <CardHeader className="p-0">
        <CardTitle className="p-0 text-[10px] lg:text-xs text-black flex items-center justify-between font-semibold font-mono">
          <span>PORTFOLIO VALUE</span>
          <Icon fill={'#FFFFFF'} name={'rightCorner'} />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-[15px]">
        <div className="text-[18px] lg:text-5xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
