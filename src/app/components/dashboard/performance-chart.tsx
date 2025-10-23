'use client';

import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';

interface PerformanceChartProps {
  performance: {
    taskCompletionRate: number;
    errorRate: number;
  };
}

const chartConfig = {
  completion: {
    label: 'Completion',
    color: 'hsl(var(--primary))',
  },
  error: {
    label: 'Error',
    color: 'hsl(var(--destructive))',
  },
} satisfies ChartConfig;


export function PerformanceChart({ performance }: PerformanceChartProps) {
  const chartData = [
    { metric: 'performance', completion: performance.taskCompletionRate, error: performance.errorRate },
  ];

  return (
    <ChartContainer config={chartConfig} className="h-10 w-full">
      <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ left: -30 }}>
        <XAxis type="number" dataKey="completion" hide />
        <YAxis type="category" dataKey="metric" hide />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Bar dataKey="completion" stackId="a" fill="var(--color-completion)" radius={[5, 5, 5, 5]} barSize={10} />
        <Bar dataKey="error" stackId="a" fill="var(--color-error)" radius={[5, 5, 5, 5]} barSize={10} />
      </BarChart>
    </ChartContainer>
  );
}
