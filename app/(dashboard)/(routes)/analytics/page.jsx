"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A multiple line chart"

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

export default function AnalyticsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="online"
              type="monotone"
              stroke="var(--color-online)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="inStore"
              type="monotone"
              stroke="var(--color-inStore)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
