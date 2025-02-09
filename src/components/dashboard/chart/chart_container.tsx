"use client"

import { Area, AreaChart, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../../ui/chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
  },
} satisfies ChartConfig

export function ChartComponent() {
  return (
    <div className="bg-white p-8 px-10 rounded-md shadow-md w-full max-w-[1000px] h-full flex flex-col items-start justify-start gap-y-4">
        <h1 className="font-medium text-xl">PENDAPATAN</h1>
        <ChartContainer config={chartConfig} className="w-full h-full pb-8">
            <AreaChart
                accessibilityLayer
                data={chartData}
            >
                 <defs>
                    <linearGradient id="colorGradient" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="white" stopOpacity={1} />
                        <stop offset="100%" stopColor="#2A2E54" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis 
                    tickMargin={35}
                    tickLine={false}
                    axisLine={false}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                    dataKey="desktop"
                    type="natural"
                    fill="url(#colorGradient)"
                    gradientTransform="linear"
                    stroke="#000000"
                    strokeWidth={2}

                />
            </AreaChart>
        </ChartContainer>
    </div>
  )
}
