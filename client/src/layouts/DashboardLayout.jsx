import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return (
        <div className="flex h-screen overflow-hidden">
            <aside className="w-[260px] shrink-0 border-r border-gray-200 bg-white px-6 py-6">
                <Sidebar />
            </aside>

            <main className="flex-1 overflow-auto bg-gray-50">
                <Navbar />
                <div className="p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
export default DashboardLayout;