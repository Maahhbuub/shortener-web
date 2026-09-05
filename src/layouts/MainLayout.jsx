import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <div className="main-shell">
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;