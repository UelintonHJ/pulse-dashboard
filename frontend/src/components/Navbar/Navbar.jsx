import { useState } from  "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full backdrop-blur-md bg-white/10 border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-cyan-400">
                    Pulse
                </h1>

                <div className="hidden md:flex gap-6">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/login">Login</Link>
                </div>

                <div className="flex items-center gap-3">

                    <button className="border px-3 py-1 rounded-lg">
                        🌙
                    </button>

                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                </div>

            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col p-4 gap-4 bg-slate-900">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/login">Login</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;