"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
  } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";

import Link from 'next/link'
import { usePathname } from "next/navigation";


const SidebarItem = ({ href, icon: Icon, label }) => {
  const pathname=usePathname();
  const isActive=(pathname === "/dashboard" && href==="/dashboard") || pathname === href || pathname?.startsWith(`${href}/`);

  return(

  
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(`flex h-full w-full items-center justify-center rounded-md text-muted-foreground transition-colors  md:h-8 md:w-8 `,isActive && 'bg-slate-100 text-slate-800')}
        >
          
          <Icon className="h-5 w-5" />
          
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
    </TooltipProvider>
    )
};

  export default SidebarItem