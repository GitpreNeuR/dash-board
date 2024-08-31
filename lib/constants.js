
import {Home,LineChart,StickyNote,Activity,Users,CreditCard,DollarSign} from "lucide-react"

  export const sidebarRoutes = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/reports", icon: StickyNote, label: "Reports" },
  
    { href: "/analytics", icon: LineChart, label: "Analytics" },
  ];

export const dashboardCardData=[
 
    {
      "title": "Total Revenue",
      "activity": "+20.1% from last month",
      "sales": "Rs 105,240",
        icon:DollarSign,
      "id": "1"
    },
    {
      "title": "Subscriptions",
      "activity": "+20.1% from last month",
      "sales": "Rs 105,240",
      icon:CreditCard,
      "id": "2"
    },
    {
      "title": "Sales",
      "activity": "+20.1% from last month",
      "sales": "Rs 105,240",
      icon: Users,
      "id": "3"
    },
    {
      "title": "Active Now",
      "activity": "+20.1% from last hour",
      "sales": "Rs 105,240",
      icon: Activity,
      "id": "4"
    }
    
  
];