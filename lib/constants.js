
import {Home,LineChart,StickyNote,Activity,Users,CreditCard,DollarSign,ClipboardList } from "lucide-react"

  export const sidebarRoutes = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
 
    { href: "/tasks", icon: ClipboardList, label: "Tasks" },

    { href: "/analytics", icon: LineChart, label: "Analytics" },
  ];
  export const usersData = [
    {
      id: 1,
      name: 'Candice Schiner',
      company: 'Dell',
      role: 'Frontend Developer',
      verified: false,
      status: 'Active'
    },
    {
      id: 2,
      name: 'John Doe',
      company: 'TechCorp',
      role: 'Backend Developer',
      verified: true,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Alice Johnson',
      company: 'WebTech',
      role: 'UI Designer',
      verified: true,
      status: 'Active'
    },
    {
      id: 4,
      name: 'David Smith',
      company: 'Innovate Inc.',
      role: 'Fullstack Developer',
      verified: false,
      status: 'Inactive'
    },
    {
      id: 5,
      name: 'Emma Wilson',
      company: 'TechGuru',
      role: 'Product Manager',
      verified: true,
      status: 'Active'
    },
    {
      id: 6,
      name: 'James Brown',
      company: 'CodeGenius',
      role: 'QA Engineer',
      verified: false,
      status: 'Active'
    },
    {
      id: 7,
      name: 'Laura White',
      company: 'SoftWorks',
      role: 'UX Designer',
      verified: true,
      status: 'Active'
    },
    {
      id: 8,
      name: 'Michael Lee',
      company: 'DevCraft',
      role: 'DevOps Engineer',
      verified: false,
      status: 'Active'
    },
    {
      id: 9,
      name: 'Olivia Green',
      company: 'WebSolutions',
      role: 'Frontend Developer',
      verified: true,
      status: 'Active'
    },
    {
      id: 10,
      name: 'Robert Taylor',
      company: 'DataTech',
      role: 'Data Analyst',
      verified: false,
      status: 'Active'
    }
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