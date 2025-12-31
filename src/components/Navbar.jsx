import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Info, Users, Mail, Menu } from 'lucide-react';
import styles from './Navbar.module.css';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

import logo from '../assets/Logo-firqotul.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/about", label: "About", icon: <Info size={18} /> },
    { to: "/team", label: "Team", icon: <Users size={18} /> },
    { to: "/contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Logo Firqotul Mujahiddin" className={styles.logoImage} />
          <span>Firqotul Mujahiddin</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.desktopNav}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => isActive ? styles.active : ''}
              >
                {item.icon} {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation (Hamburger) */}
        <div className={styles.mobileNav}>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu size={24} />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary border-l-white/10 text-white w-[280px] sm:w-[350px]">
              <SheetHeader className="text-left mb-8 border-b border-white/10 pb-4">
                <SheetTitle className="text-white font-accent flex items-center gap-3">
                  <img src={logo} alt="Logo" className="w-8 h-8 rounded-full border border-white/20" />
                  Menu Utama
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${isActive
                        ? "bg-secondary text-primary font-bold shadow-lg"
                        : "hover:bg-white/10 text-white/80 hover:text-white"
                      }`
                    }
                  >
                    {item.icon}
                    <span className="text-lg">{item.label}</span>
                  </NavLink>
                ))}
              </nav>
              <div className="absolute bottom-8 left-6 right-6 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Majelis</p>
                <p className="text-sm font-accent text-secondary">Firqotul Mujahiddin</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
