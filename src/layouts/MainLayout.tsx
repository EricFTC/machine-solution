import { Outlet, Link, useLocation } from "react-router-dom";
import { Cog } from "lucide-react";
import { cn } from "../lib/utils";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.95.56 3.78 1.54 5.34L2.22 22l4.82-1.28c1.53.91 3.32 1.44 5.16 1.44 5.52 0 9.99-4.47 9.99-9.99S17.53 2.01 12.01 2.01zm5.34 14.17c-.24.67-1.39 1.25-1.93 1.32-.51.06-1.16.14-3.41-.79-2.7-1.12-4.44-3.88-4.57-4.06-.14-.17-1.09-1.45-1.09-2.77s.69-1.96.93-2.23c.24-.26.51-.33.68-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.2.49.68 1.66.75 1.79.06.13.11.28.01.48-.09.19-.13.31-.26.47-.13.16-.28.35-.4.48-.14.14-.28.29-.12.57.16.28.71 1.18 1.54 1.91 1.05.94 1.94 1.25 2.22 1.38.28.13.44.11.61-.08.17-.18.73-.85.93-1.14.19-.3.39-.25.64-.16.26.11 1.64.77 1.91.91.28.13.46.22.52.33.08.15.08.88-.16 1.55z" />
  </svg>
);

export default function MainLayout() {
  const location = useLocation();

  const navLinks = [
    { name: "Cases", path: "/cases" },
  ];

  return (
    <div className="min-h-screen bg-base-bg text-base-text font-sans selection:bg-accent-orange selection:text-white flex flex-col relative">
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-[60]">
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

      <footer className="bg-white py-12 border-t border-gray-200 text-center text-gray-500 relative z-10">
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8615818314898?text=Hi,%20I%20want%20to%20discuss%20a%20metal%20finishing%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-2.5 bg-white border border-gray-200 hover:border-green-500 text-gray-900 px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <div className="bg-[#25D366] text-white p-1.5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <WhatsAppIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-sm pr-1 hidden sm:block">Talk About Your Part</span>
      </a>
    </div>
  );
}
