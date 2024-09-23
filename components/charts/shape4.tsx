"use client";

import { RadialBar, RadialBarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 473, fill: "#60A5FA" },
  { browser: "opera", visitors: 350, fill: "#1E3A8A" },
  { browser: "miniopera", visitors: 250, fill: "#1D4ED8" },
  { browser: "other", visitors: 500, fill: "var(--color-other)" },
];

// #F5F5F5
// #1E3A8A

// #3B82F6
// #555555

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#F5F5F5",
  },
  safari: {
    label: "Safari",
    color: "#1E3A8A",
  },
  firefox: {
    label: "Firefox",
    color: "#1D4ED8",
  },
  edge: {
    label: "Edge",
    color: "#60A5FA",
  },
  opera: {
    label: "opera",
    color: "#1E3A8A",
  },
  miniopera: {
    label: "miniopera",
    color: "#1D4ED8",
  },

  other: {
    label: "Other",
    color: "#555555",
  },
} satisfies ChartConfig;

export function Shape4() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
      // className=" xl:w-[270px] 2xl:w-[400px] md:w-full sm:h-full mx-auto  "
      // className=" w-full sm:h-full  h-[calc(100%_-_20px)] "
    >
      <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="browser" />}
        />
        <RadialBar dataKey="visitors" background />
      </RadialBarChart>
    </ChartContainer>
  );
}
