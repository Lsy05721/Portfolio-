import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Subtle ambient grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl text-white hover:text-purple-200 transition-colors duration-300">
              Siyuan (Grace) Liu
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-purple-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-purple-500/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-200 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg mb-2 transition-all ${
                    location.pathname === link.path
                      ? "bg-purple-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-purple-500/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-purple-500/20 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/Lsy05721"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-300 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/siyuanliu0721"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-300 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:liusiyuan0506@gmail.com"
                className="text-slate-400 hover:text-purple-300 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-center text-slate-400 text-sm">
              © {new Date().getFullYear()} Siyuan (Grace) Liu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
