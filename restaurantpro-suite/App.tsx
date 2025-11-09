
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MenuPage from './components/MenuPage';
import OrdersPage from './components/OrdersPage';
import CustomersPage from './components/CustomersPage';
import SettingsPage from './components/SettingsPage';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const renderContent = () => {
    switch (activeLink) {
      case 'Home':
        return <Dashboard />;
      case 'Menu':
        return <MenuPage />;
      case 'Orders':
        return <OrdersPage />;
      case 'Customers':
        return <CustomersPage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-dark-bg text-dark-text-primary min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen} 
            activeLink={activeLink}
          />
          <main>
            <div className="p-4 md:p-6 2xl:p-10">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
