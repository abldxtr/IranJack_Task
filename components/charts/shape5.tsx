"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { browser: "chrome", visitors: 600, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 300, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 100, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 200, fill: "var(--color-edge)" },
  { browser: "other", visitors: 210, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#A6E9ED",
  },
  safari: {
    label: "Safari",
    color: "#F5F5F5",
  },
  firefox: {
    label: "Firefox",
    color: "#00B7C3",
  },
  edge: {
    label: "Edge",
    color: "#005B70",
  },
  other: {
    label: "Other",
    color: "#00666D",
  },
} satisfies ChartConfig;

export function Shape5() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <ChartContainer
      config={chartConfig}
      // className="h-[200px] xl:w-[300px] w-full "
      // className=" xl:w-[260px] 2xl:w-[400px] lg:w-[200px] md:w-full h-full "
      className=" w-full h-full "
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={60}
          strokeWidth={8}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className=" font-semibold text-[28px] leading-[20px] text-[#424242] "
                    >
                      1000
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
