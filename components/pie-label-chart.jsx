"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Sales in the past month from all regions"

const chartData = [
  { region: "North America", sales: 7500,fill: "var(--color-NorAmr)" },
  { region: "Europe", sales: 6000,fill: "var(--color-Europe)" },
  { region: "Asia", sales: 6800,fill: "var(--color-Asia)" },
  { region: "South America", sales: 8200,fill: "var(--color-SthAmr)" },
  { region: "Oceania", sales: 8000 ,fill: "var(--color-Oceania)"},
  { region: "Africa", sales: 7000,fill: "var(--color-Africa)" },
  { region: "Middle East", sales: 5000 ,fill: "var(--color-MidEast)"}
];


const chartConfig = {
  "NorAmr": {
    label: "North America",
    color: "hsl(var(--chart-1))",
  },
  "Europe": {
    label: "Europe",
    color: "hsl(var(--chart-2))",
  },
  "Asia": {
    label: "Asia",
    color: "hsl(var(--chart-3))",
  },
  "SthAmr": {
    label: "South America",
    color: "hsl(var(--chart-4))",
  },
  "Oceania": {
    label: "Oceania",
    color: "hsl(var(--chart-5))",
  },
  "Africa": {
    label: "Africa",
    color: "hsl(var(--chart-6))",
  },
  "MidEast": {
    label: "Middle East",
    color: "hsl(var(--chart-7))",
  },
};

export default function PieLabelChart() {
  return (
    <Card className="flex flex-col">
       <CardHeader className="items-start pb-0">
        <CardTitle className="text-lg">Pie Chart - Label with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="w-full min-h-[200px]   pb-0  [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="sales" label nameKey="region" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 42.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className=" text-muted-foreground text-xs leading-normal">
          Showing total sales from all regions around the world
        </div>
      </CardFooter>
    </Card>
  )
}
