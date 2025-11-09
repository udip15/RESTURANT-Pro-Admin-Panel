
import React, { useState } from 'react';
import { Order, OrderStatus } from '../types';

const allOrders: Order[] = [
  { id: 'ORD-001', customerName: 'John Doe', dish: 'Spicy Ramen', total: 15.99, status: 'Completed', time: '5 mins ago' },
  { id: 'ORD-002', customerName: 'Jane Smith', dish: 'Classic Burger', total: 12.50, status: 'Preparing', time: '10 mins ago' },
  { id: 'ORD-003', customerName: 'Alice Johnson', dish: 'Margherita Pizza', total: 22.00, status: 'Pending', time: '12 mins ago' },
  { id: 'ORD-004', customerName: 'Bob Brown', dish: 'Sushi Platter', total: 35.75, status: 'Cancelled', time: '20 mins ago' },
  { id: 'ORD-005', customerName: 'Charlie Davis', dish: 'Caesar Salad', total: 9.50, status: 'Completed', time: '30 mins ago' },
  { id: 'ORD-006', customerName: 'Diana Prince', dish: 'Tiramisu', total: 7.50, status: 'Preparing', time: '32 mins ago' },
  { id: 'ORD-007', customerName: 'Bruce Wayne', dish: 'Iced Latte', total: 4.50, status: 'Completed', time: '45 mins ago' },
  { id: 'ORD-008', customerName: 'Clark Kent', dish: 'Classic Burger', total: 12.50, status: 'Cancelled', time: '1 hour ago' },
  { id: 'ORD-009', customerName: 'Peter Parker', dish: 'Spicy Ramen', total: 15.99, status: 'Pending', time: '2 hours ago' },
];

const StatusBadge: React.FC<{ status: OrderStatus }> = ({ status }) => {
    const statusClasses = {
      Completed: 'bg-green-500/20 text-green-400',
      Preparing: 'bg-yellow-500/20 text-yellow-400',
      Pending: 'bg-orange-500/20 text-orange-400',
      Cancelled: 'bg-red-500/20 text-red-400',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
        {status}
      </span>
    );
};
  
const OrdersPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<OrderStatus | 'All'>('All');
    
    const tabs: (OrderStatus | 'All')[] = ['All', 'Preparing', 'Pending', 'Completed', 'Cancelled'];

    const filteredOrders = activeTab === 'All'
        ? allOrders
        : allOrders.filter(order => order.status === activeTab);

    return (
        <div className="mx-auto max-w-screen-2xl">
            <div className="mb-6">
                <div className="border-b border-dark-card">
                    <nav className="-mb-px flex space-x-6">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                                ${activeTab === tab
                                    ? 'border-brand-primary text-brand-primary'
                                    : 'border-transparent text-dark-text-secondary hover:text-white hover:border-gray-500'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="rounded-lg border border-dark-card bg-dark-card shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-dark-bg">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Order ID</th>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Customer</th>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Dish</th>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Total</th>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Status</th>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map(order => (
                                <tr key={order.id} className="border-b border-dark-bg last:border-b-0 hover:bg-dark-bg/50">
                                    <td className="p-4 text-sm text-brand-secondary font-mono">{order.id}</td>
                                    <td className="p-4 text-sm text-white font-medium">{order.customerName}</td>
                                    <td className="p-4 text-sm text-dark-text-secondary">{order.dish}</td>
                                    <td className="p-4 text-sm text-dark-text-secondary font-medium">${order.total.toFixed(2)}</td>
                                    <td className="p-4 text-sm"><StatusBadge status={order.status} /></td>
                                    <td className="p-4 text-sm text-dark-text-secondary">{order.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
