import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div className="dashboard-shell">
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;