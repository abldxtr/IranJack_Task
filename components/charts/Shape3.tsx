"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with axes";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Shape3() {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[200px] lg:w-[400px] w-full scale-90 sm:scale-100 "
      // className="h-full w-full "
    >
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: -20,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={3} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Area
          type="linear"
          dataKey="mobile"
          // type="natural"
          fill="#00B7C3"
          fillOpacity={0.3}
          stroke="#00B7C3"
          stackId="a"
        />
        <Area
          type="linear"
          dataKey="desktop"
          // type="natural"
          fill="#CFB7DA"
          fillOpacity={0.5}
          stroke="#B146C2"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}
