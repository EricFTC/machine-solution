import { Outlet, Link, useLocation } from "react-router-dom";
import { Cog } from "lucide-react";
import { cn } from "../lib/utils";

export default function MainLayout() {
  const location = useLocation();

  const navLinks = [
    { name: "Cases", path: "/cases" },
  ];

  return (
    <div className="min-h-screen bg-base-bg text-base-text font-sans selection:bg-accent-orange selection:text-white flex flex-col">
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-gray-900 text-2xl tracking-tight">
            <Cog className="w-8 h-8 text-accent-orange" />
            Integrator<span className="text-accent-orange">.</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center font-medium text-sm text-gray-500">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={cn(
                  "transition-colors hover:text-gray-900",
                  location.pathname === link.path && "text-gray-900 font-semibold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/solution" 
              className="bg-accent-orange hover:bg-accent-orange-hover text-white font-bold py-2 px-6 rounded transition-colors !text-sm"
            >
              Get Solution
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white py-12 border-t border-gray-200 text-center text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-gray-900 text-xl tracking-tight">
            <Cog className="w-6 h-6 text-accent-orange" />
            Process Integrator
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/solution" className="hover:text-gray-900">Get Solution</Link>
            <Link to="/cases" className="hover:text-gray-900">Cases</Link>
          </div>
          <p className="text-sm md:border-l md:border-gray-300 md:pl-6">&copy; {new Date().getFullYear()} Industrial Solutions.</p>
        </div>
      </footer>
    </div>
  );
}
