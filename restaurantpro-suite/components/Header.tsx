
import React, { useState, useRef, useEffect } from 'react';
import { SearchIcon, BellIcon, ReceiptIcon, CheckCircleIcon, ClockIcon, XCircleIcon, HelpCircleIcon, InfoIcon, LogOutIcon } from './icons';
import { Notification, OrderStatus } from '../types';
import Modal from './Modal';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  activeLink: string;
}

const mockNotifications: Notification[] = [
    { id: '1', message: 'New order #ORD-009 placed', type: 'New', time: '5m ago' },
    { id: '2', message: 'Order #ORD-003 is pending payment', type: 'Pending', time: '12m ago' },
    { id: '3', message: 'Order #ORD-001 has been completed', type: 'Completed', time: '1h ago' },
    { id: '4', message: 'Order #ORD-004 was cancelled', type: 'Cancelled', time: '3h ago' },
];

const mockSearchResults = [
  { type: 'Customer', value: 'John Doe', id: 'CUST-001' },
  { type: 'Customer', value: 'Jane Smith', id: 'CUST-002' },
  { type: 'Order', value: 'Spicy Ramen', id: 'ORD-001' },
  { type: 'Order', value: 'Classic Burger', id: 'ORD-002' },
];

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen, activeLink }) => {
  const trigger = useRef<HTMLButtonElement>(null);
  const notificationDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const searchDropdownRef = useRef<HTMLDivElement>(null);

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof mockSearchResults>([]);

  const pageTitle = activeLink === 'Home' ? 'Dashboard' : activeLink;

  // Close dropdowns on outside click
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!notificationDropdownRef.current?.contains(target as Node)) setNotificationOpen(false);
      if (!profileDropdownRef.current?.contains(target as Node)) setProfileOpen(false);
      if (!searchDropdownRef.current?.contains(target as Node)) setSearchQuery('');
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  useEffect(() => {
    if (searchQuery) {
        const filtered = mockSearchResults.filter(item => 
            item.value.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.id.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filtered);
    } else {
        setSearchResults([]);
    }
  }, [searchQuery]);

  const NotificationIcon: React.FC<{ type: Notification['type']}> = ({ type }) => {
    const iconMap: Record<Notification['type'], React.ReactNode> = {
        'New': <ReceiptIcon className="w-5 h-5 text-blue-400" />,
        'Pending': <ClockIcon className="w-5 h-5 text-orange-400" />,
        'Preparing': <ClockIcon className="w-5 h-5 text-yellow-400" />,
        'Completed': <CheckCircleIcon className="w-5 h-5 text-green-400" />,
        'Cancelled': <XCircleIcon className="w-5 h-5 text-red-400" />,
    };
    return iconMap[type];
  }

  return (
    <>
    <header className="sticky top-0 z-40 flex w-full bg-dark-bg drop-shadow-sm border-b border-dark-card">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            ref={trigger}
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-50 block rounded-lg border border-dark-card bg-dark-card p-1.5 lg:hidden"
          >
            <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5ZM3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10ZM4 15C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17H16C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15H4Z" fill="currentColor"></path>
            </svg>
          </button>
          <h1 className="text-xl font-bold text-white">{pageTitle}</h1>
        </div>
        <div className="hidden sm:block">
            <h1 className="text-xl font-semibold text-dark-text-secondary">{pageTitle}</h1>
            <p className="text-sm text-dark-text-secondary">Hello, ADMIN. Welcome back!</p>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <div ref={searchDropdownRef} className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search by ID or name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-card rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" 
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-text-secondary" />
            {searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-full rounded-lg bg-dark-card border border-dark-bg shadow-lg z-50 overflow-hidden">
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id} className="p-3 hover:bg-dark-bg cursor-pointer border-b border-dark-bg last:border-0">
                                <p className="font-medium text-white">{result.value}</p>
                                <p className="text-xs text-brand-primary">{result.type} - {result.id}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
          </div>

          <div ref={notificationDropdownRef} className="relative">
            <button onClick={() => setNotificationOpen(!notificationOpen)} className="relative">
                <BellIcon className="h-6 w-6 text-dark-text-secondary cursor-pointer" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-white">{mockNotifications.length}</span>
            </button>
            {notificationOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-lg bg-dark-card border border-dark-bg shadow-lg z-50">
                    <div className="p-3 border-b border-dark-bg">
                        <h5 className="text-sm font-semibold text-white">Notifications</h5>
                    </div>
                    <ul className="max-h-80 overflow-y-auto">
                        {mockNotifications.map(notif => (
                            <li key={notif.id} className="flex gap-3 p-3 hover:bg-dark-bg border-b border-dark-bg last:border-0">
                                <div className="flex-shrink-0 pt-1"><NotificationIcon type={notif.type} /></div>
                                <div>
                                    <p className="text-sm text-white mb-1">{notif.message}</p>
                                    <p className="text-xs text-dark-text-secondary">{notif.time}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
          </div>

          <div ref={profileDropdownRef} className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://picsum.photos/id/237/200/200" alt="User" />
                </span>
            </button>
            {profileOpen && (
                <div className="absolute right-0 mt-2 w-60 rounded-lg bg-dark-card border border-dark-bg shadow-lg z-50">
                    <div className="p-3 border-b border-dark-bg">
                        <h5 className="text-sm font-semibold text-white">Hello, ADMIN</h5>
                    </div>
                    <ul className="p-2">
                        <li onClick={() => { setHelpModalOpen(true); setProfileOpen(false); }} className="flex items-center gap-3 p-2 rounded-md hover:bg-dark-bg cursor-pointer text-dark-text-secondary hover:text-white">
                            <HelpCircleIcon className="w-5 h-5" /> Help
                        </li>
                        <li onClick={() => { setAboutModalOpen(true); setProfileOpen(false); }} className="flex items-center gap-3 p-2 rounded-md hover:bg-dark-bg cursor-pointer text-dark-text-secondary hover:text-white">
                            <InfoIcon className="w-5 h-5" /> About
                        </li>
                         <li className="flex items-center gap-3 p-2 rounded-md hover:bg-dark-bg cursor-pointer text-red-400 hover:text-red-300">
                            <LogOutIcon className="w-5 h-5" /> Logout
                        </li>
                    </ul>
                </div>
            )}
          </div>
        </div>
      </div>
    </header>

    <Modal title="Help Center" isOpen={helpModalOpen} onClose={() => setHelpModalOpen(false)}>
      <div className="text-dark-text-secondary space-y-4">
          <p>Welcome to the RestaurantPro Suite! This guide will help you navigate the dashboard.</p>
          <div>
            <h4 className="font-semibold text-white mb-1">Where to find things:</h4>
            <ul className="list-disc list-inside space-y-1">
                <li><b>Home/Dashboard:</b> Get a quick overview of revenue, orders, and popular dishes.</li>
                <li><b>Orders:</b> View and manage all incoming orders. You can filter them by status.</li>
                <li><b>Menu:</b> See your full restaurant menu, add new dishes, or edit existing ones.</li>
                <li><b>Customers:</b> Access your customer database and view their order history.</li>
                <li><b>Settings:</b> Manage your account security and preferences.</li>
            </ul>
          </div>
          <p>Use the search bar at the top to quickly find customers or orders by their ID or name.</p>
      </div>
    </Modal>

    <Modal title="About RestaurantPro" isOpen={aboutModalOpen} onClose={() => setAboutModalOpen(false)}>
        <div className="text-dark-text-secondary space-y-4">
            <p className="text-center font-bold text-brand-primary text-lg">Serving Excellence, One Dish at a Time.</p>
            <p>At RestaurantPro, we believe that great food starts with fresh ingredients and ends with an unforgettable experience. Our chefs are dedicated to crafting delicious, high-quality meals at a reasonable price.</p>
            <p>This software helps us streamline our operations to ensure every order is perfect, from our kitchen to your table. We're committed to providing the best service and the best food in town. Thank you for your patronage!</p>
        </div>
    </Modal>
    </>
  );
};

export default Header;
