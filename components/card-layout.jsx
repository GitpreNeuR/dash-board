"use client"
import React from 'react'
import { Card,CardContent,CardTitle,CardHeader } from '@/components/ui/card'

function CardLayout({title,activity,sales,icon:Icon}) {
  return (
    <>
    <Card x-chunk="dashboard-01-chunk-0" className="overflow-hidden  relative">
  <CardHeader className="flex flex-row items-center  justify-between space-y-0 pb-2">
    <CardTitle className="text-sm font-medium">
      {title}
    </CardTitle>
    <Icon className="absolute h-28 w-28 -right-8 top-3 z-0  text-muted-foreground opacity-30" />
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">{sales}</div>
    <p className="text-xs text-muted-foreground">
      {activity}
    </p>
  </CardContent>
</Card>
    </>
  )
}

export default CardLayout