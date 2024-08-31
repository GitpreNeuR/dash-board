import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
const DashboardLayout = ({
  children
}) => {
  return ( 
    <div className="h-full">
      <div className="h-40 md:pl-16 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-16 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-16 mt-20 h-full">
        <div className="px-10">
        {children}
        </div>
      </main>
    </div>
   );
}
 
export default DashboardLayout;