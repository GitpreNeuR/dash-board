"use client"
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import {Settings} from "lucide-react"
import SidebarItem from './sidebar-item'
import Link from 'next/link'
import {sidebarRoutes} from '@/lib/constants'




function Sidebar() {
  return (
    <>
    <div className="fixed  inset-y-0 left-0 z-10 hidden w-16 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {sidebarRoutes.map((navitem, index) => (
          <SidebarItem key={index} icon={navitem.icon} label={navitem.label} href={navitem.href}/>
         ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/settings"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-6 w-6" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
        </TooltipProvider>
      </nav>
    </div>
    
    </>
  )
}

export default Sidebar