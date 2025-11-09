import React, { useEffect, useRef } from 'react';
import { HomeIcon, ReceiptIcon, MenuIcon, UsersIcon, SettingsIcon, LogOutIcon } from './icons';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, activeLink, setActiveLink }) => {
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  const menuItems = [
    { name: 'Home', icon: HomeIcon },
    { name: 'Orders', icon: ReceiptIcon },
    { name: 'Menu', icon: MenuIcon },
    { name: 'Customers', icon: UsersIcon },
  ];
  
  const bottomItems = [
    { name: 'Settings', icon: SettingsIcon },
    { name: 'Logout', icon: LogOutIcon },
  ]

  interface NavLinkProps {
    item: { name: string, icon: React.FC<{ className?: string }> };
  }

  const NavLink: React.FC<NavLinkProps> = ({ item }) => (
    <li
      className={`px-6 py-3 my-1 rounded-lg cursor-pointer transition-all duration-300 ${
        activeLink === item.name ? 'bg-brand-primary text-white' : 'hover:bg-dark-card text-dark-text-secondary hover:text-white'
      }`}
      onClick={() => {
        setActiveLink(item.name)
        if(sidebarOpen) {
          setSidebarOpen(false);
        }
      }}
    >
      <div className="flex items-center">
        <item.icon className="w-5 h-5 mr-4" />
        <span className="font-medium">{item.name}</span>
      </div>
    </li>
  );

  return (
    <>
      <div
        ref={sidebar}
        className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-dark-bg border-r border-dark-card duration-300 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center gap-2 px-6 py-10">
           <h1 className="text-2xl font-bold text-white">RestaurantPro</h1>
        </div>
        
        <div className="flex flex-col justify-between flex-1 overflow-y-auto px-4">
          <nav>
            <ul className="flex flex-col gap-1.5">
              {menuItems.map(item => <NavLink key={item.name} item={item} />)}
            </ul>
          </nav>
          
          <nav className="pb-4">
             <ul>
              {bottomItems.map(item => <NavLink key={item.name} item={item} />)}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;