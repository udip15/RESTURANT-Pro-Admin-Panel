
import React from 'react';
import MetricCard from './MetricCard';
import PopularDishes from './PopularDishes';
import RecentOrders from './RecentOrders';
import { DollarSignIcon, ReceiptIcon, UsersIcon, UtensilsIcon } from './icons';

const Dashboard: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <MetricCard
          title="Total Revenue"
          value="$12,543"
          change="+12.5%"
          changeType="increase"
          icon={<DollarSignIcon className="text-brand-primary" />}
        />
        <MetricCard
          title="Total Orders"
          value="2,345"
          change="+8.2%"
          changeType="increase"
          icon={<ReceiptIcon className="text-brand-primary" />}
        />
        <MetricCard
          title="Total Customers"
          value="1,879"
          change="-2.1%"
          changeType="decrease"
          icon={<UsersIcon className="text-brand-primary" />}
        />
        <MetricCard
          title="Total Dishes"
          value="128"
          change="+5.0%"
          changeType="increase"
          icon={<UtensilsIcon className="text-brand-primary" />}
        />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <RecentOrders />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <PopularDishes />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
