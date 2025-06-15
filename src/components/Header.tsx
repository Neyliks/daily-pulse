import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-gray-100 shadow px-4 py-3 flex gap-4">
            <h1 className="text-emerald-600 font-bold">Daily Pulse</h1>
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600'
                }
            >
            Home
            </NavLink>
            <NavLink
                to="/today"
                end
                className={({ isActive }) =>
                isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600'
                }
            >
            Today
            </NavLink>
            <NavLink
                to="/history"
                className={({ isActive }) =>
                isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600'
                }
            >
                History
            </NavLink>
    </header>
    );
}

export default Header;