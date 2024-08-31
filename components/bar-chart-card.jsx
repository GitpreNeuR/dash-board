"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

export const description = "A multiple bar chart showing sales data by channel."

const chartData = [
  { month: "January", online: 1500, inStore: 500,  },
  { month: "February", online: 1900, inStore: 1600  },
  { month: "March", online: 2000, inStore: 1700 },
  { month: "April", online: 2100, inStore: 1900 },
  { month: "May", online: 2350, inStore: 2040 },
  { month: "June", online: 2600, inStore: 2000 },
]

const chartConfig = {
  online: {
    label: "Online",
    color: "hsl(var(--chart-1))",
  },
  inStore: {
    label: "In-Store",
    color: "hsl(var(--chart-2))",
  },
 
};

export default function BarChartCard() {
  return (
    <Card className="lg:max-w-md">
      <CardHeader>
        <CardTitle className="text-lg">Sales by Channel</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} >
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="online" fill="var(--color-online)" radius={4} />
            <Bar dataKey="inStore" fill="var(--color-inStore)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className=" text-muted-foreground text-xs leading-normal">
          Showing total sales by channel for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
