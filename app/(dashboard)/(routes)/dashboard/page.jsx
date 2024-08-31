"use client"
import React from 'react'
import { dashboardCardData } from '@/lib/constants'
import CardLayout from '@/components/card-layout'
import AreaChartCard from '@/components/area-chart-card'
import BarChartCard from '@/components/bar-chart-card'
import PieChartCard from '@/components/pie-chart-card'
import PieLabelChart from '@/components/pie-label-chart'

function DashboardPage() {
  return (
    <section
   className="flex flex-1 flex-col gap-4 p-4 md:gap-8 ">
      <h1 className="text-4xl font-bold text-muted-foreground hidden md:block">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {dashboardCardData.map((card)=>(
            <CardLayout key={card.id} title={card.title} icon={card.icon} activity={card.activity} sales={card.sales}/>
          ))}
          </div>
         
          <AreaChartCard/>
          <div className=" md:grid-cols-2 grid gap-4  md:gap-6 lg:grid-cols-3 xl:gap-10  ">
          <BarChartCard/>
          <PieChartCard/>
          <PieLabelChart/>
          </div>
        </section
      >
  )
}

export default DashboardPage