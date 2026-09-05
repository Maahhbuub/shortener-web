import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return (
        <div className="auth-shell">
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AuthLayout;