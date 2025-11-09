
import React from 'react';
import { Order, OrderStatus } from '../types';
import TableCard from './TableCard';

const recentOrders: Order[] = [
  { id: 'ORD-001', customerName: 'John Doe', dish: 'Spicy Ramen', total: 15.99, status: 'Completed', time: '5 mins ago' },
  { id: 'ORD-002', customerName: 'Jane Smith', dish: 'Classic Burger', total: 12.50, status: 'Preparing', time: '10 mins ago' },
  { id: 'ORD-003', customerName: 'Alice Johnson', dish: 'Margherita Pizza', total: 22.00, status: 'Pending', time: '12 mins ago' },
  { id: 'ORD-004', customerName: 'Bob Brown', dish: 'Sushi Platter', total: 35.75, status: 'Cancelled', time: '20 mins ago' },
  { id: 'ORD-005', customerName: 'Charlie Davis', dish: 'Caesar Salad', total: 9.50, status: 'Completed', time: '30 mins ago' },
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

const RecentOrders: React.FC = () => {
  const headers = [
    { key: 'customer', label: 'Customer' },
    { key: 'dish', label: 'Dish' },
    { key: 'total', label: 'Total' },
    { key: 'status', label: 'Status' },
  ];

  const renderOrderRow = (order: Order) => (
    <tr key={order.id} className="border-b border-dark-bg last:border-b-0">
      <td className="p-4 text-sm text-white font-medium">{order.customerName}</td>
      <td className="p-4 text-sm text-dark-text-secondary">{order.dish}</td>
      <td className="p-4 text-sm text-dark-text-secondary font-medium">${order.total.toFixed(2)}</td>
      <td className="p-4 text-sm">
        <StatusBadge status={order.status} />
      </td>
    </tr>
  );

  return (
    <TableCard
      title="Recent Orders"
      headers={headers}
      data={recentOrders}
      renderRow={renderOrderRow}
    />
  );
};

export default RecentOrders;
