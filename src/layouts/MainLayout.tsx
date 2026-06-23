import { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { Cog, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.95.56 3.78 1.54 5.34L2.22 22l4.82-1.28c1.53.91 3.32 1.44 5.16 1.44 5.52 0 9.99-4.47 9.99-9.99S17.53 2.01 12.01 2.01zm5.34 14.17c-.24.67-1.39 1.25-1.93 1.32-.51.06-1.16.14-3.41-.79-2.7-1.12-4.44-3.88-4.57-4.06-.14-.17-1.09-1.45-1.09-2.77s.69-1.96.93-2.23c.24-.26.51-.33.68-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.2.49.68 1.66.75 1.79.06.13.11.28.01.48-.09.19-.13.31-.26.47-.13.16-.28.35-.4.48-.14.14-.28.29-.12.57.16.28.71 1.18 1.54 1.91 1.05.94 1.94 1.25 2.22 1.38.28.13.44.11.61-.08.17-.18.73-.85.93-1.14.19-.3.39-.25.64-.16.26.11 1.64.77 1.91.91.28.13.46.22.52.33.08.15.08.88-.16 1.55z" />
  </svg>
);

function NavDropdown({ label, items, isActive }: { label: string; items: { name: string; path: string }[]; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={cn(
        "transition-colors hover:text-gray-900 flex items-center gap-1 font-medium text-sm",
        isActive ? "text-gray-900 font-semibold" : "text-gray-500"
      )}>
        {label} <ChevronDown className={cn("w-3 h-3 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
          {items.map(item => (
            <Link key={item.path} to={item.path} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MainLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serviceItems = [
    { name: 'Process Consulting', path: '/services/process-consulting' },
    { name: 'Manufacturing Validation', path: '/services/manufacturing-validation' },
    { name: 'Equipment Solutions', path: '/services/equipment-solutions' },
    { name: '→ Deburring Service', path: '/services/deburring' },
    { name: '→ Polishing Service', path: '/services/polishing' },
    { name: '→ Brush & Grinding Service', path: '/services/brushing-grinding' },
    { name: '→ Contract Manufacturing', path: '/services/contract-manufacturing' },
  ];

  const industryItems = [
    { name: 'Automotive', path: '/industries/automotive' },
    { name: 'Aerospace', path: '/industries/aerospace' },
    { name: 'Construction', path: '/industries/construction' },
  ];

  const isServicesActive = location.pathname.startsWith('/services');
  const isIndustriesActive = location.pathname.startsWith('/industries');

  return (
    <div className="min-h-screen bg-base-bg text-base-text font-sans selection:bg-accent-orange selection:text-white flex flex-col relative">
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-gray-900 text-2xl tracking-tight">
            <Cog className="w-8 h-8 text-accent-orange" />
            Integrator<span className="text-accent-orange">.</span>
          </Link>
          
          {/* Desktop nav */}
          <div className="hidden lg:flex gap-8 items-center font-medium text-sm text-gray-500">
            <Link to="/solutions" className={cn("transition-colors hover:text-gray-900", location.pathname === '/solutions' && "text-gray-900 font-semibold")}>Solutions</Link>
            <NavDropdown label="Services" items={serviceItems} isActive={isServicesActive} />
            <NavDropdown label="Industries" items={industryItems} isActive={isIndustriesActive} />
            <Link to="/cases" className={cn("transition-colors hover:text-gray-900", location.pathname === '/cases' && "text-gray-900 font-semibold")}>Cases</Link>
            <Link to="/knowledge" className={cn("transition-colors hover:text-gray-900", location.pathname === '/knowledge' && "text-gray-900 font-semibold")}>Knowledge</Link>
            <Link to="/advanced-surface-technologies" className={cn("transition-colors hover:text-gray-900", location.pathname === '/advanced-surface-technologies' && "text-gray-900 font-semibold")}>R&D</Link>
            <Link to="/contact" className="bg-accent-orange hover:bg-accent-orange-hover text-white font-bold py-2 px-6 rounded transition-colors !text-sm">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-3">
            <Link to="/solutions" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
            <div className="pl-4 space-y-2 border-l-2 border-gray-200">
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 pt-2">Services</span>
              {serviceItems.map(i => <Link key={i.path} to={i.path} className="block py-1 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>{i.name}</Link>)}
            </div>
            <div className="pl-4 space-y-2 border-l-2 border-gray-200">
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 pt-2">Industries</span>
              {industryItems.map(i => <Link key={i.path} to={i.path} className="block py-1 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>{i.name}</Link>)}
            </div>
            <Link to="/cases" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Cases</Link>
            <Link to="/knowledge" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Knowledge</Link>
            <Link to="/contact" className="block py-2 text-accent-orange font-bold" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
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
          <div className="flex flex-wrap gap-6 text-sm justify-center">
            <Link to="/solutions" className="hover:text-gray-900">Solutions</Link>
            <Link to="/services/deburring" className="hover:text-gray-900">Deburring</Link>
            <Link to="/services/polishing" className="hover:text-gray-900">Polishing</Link>
            <Link to="/services/brushing-grinding" className="hover:text-gray-900">Grinding</Link>
            <Link to="/services/contract-manufacturing" className="hover:text-gray-900">Contract Mfg</Link>
            <Link to="/industries/automotive" className="hover:text-gray-900">Automotive</Link>
            <Link to="/industries/aerospace" className="hover:text-gray-900">Aerospace</Link>
            <Link to="/knowledge" className="hover:text-gray-900">Knowledge</Link>
            <Link to="/contact" className="hover:text-gray-900">Contact</Link>
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
