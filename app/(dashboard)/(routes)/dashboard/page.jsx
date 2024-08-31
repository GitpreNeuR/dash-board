"use client"
import React from 'react'
import { dashboardCardData } from '@/lib/constants'
import CardLayout from '@/components/card-layout'
import AreaChartCard from '@/components/area-chart-card'

function DashboardPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="text-4xl font-bold text-muted-foreground hidden md:block">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {dashboardCardData.map((card)=>(
            <CardLayout key={card.id} title={card.title} icon={card.icon} activity={card.activity} sales={card.sales}/>
          ))}
          </div>
          <AreaChartCard/>
          </main>
  )
}

export default DashboardPage