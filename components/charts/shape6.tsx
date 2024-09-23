"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 86, mobile: 180, tablet: 12 },
  { month: "February", desktop: 200, mobile: 300, tablet: 12 },
  { month: "March", desktop: 120, mobile: 220, tablet: 12 },
  { month: "April", desktop: 190, mobile: 100, tablet: 12 },
  { month: "May", desktop: 130, mobile: 230, tablet: 12 },
  { month: "June", desktop: 140, mobile: 240, tablet: 12 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function Shape6() {
  return (
    <ChartContainer
      config={chartConfig}
      //   className="xl:w-[200px] md:w-full h-full"
      className="h-[200px] xl:w-[400px] w-full "
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />

        <Bar dataKey="desktop" fill="#93C5FD" radius={1} />
        <Bar dataKey="mobile" fill="#1D4ED8" radius={1} />
        <Bar dataKey="mobile" fill="#888888" radius={1} />
      </BarChart>
    </ChartContainer>
  );
}
