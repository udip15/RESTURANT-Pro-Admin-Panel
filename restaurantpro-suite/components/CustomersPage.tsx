
import React from 'react';
import { Customer } from '../types';

const customers: Customer[] = [
    { id: 'CUST-001', name: 'John Doe', email: 'john.doe@example.com', totalSpent: 125.50, lastOrder: '2023-10-26' },
    { id: 'CUST-002', name: 'Jane Smith', email: 'jane.smith@example.com', totalSpent: 230.00, lastOrder: '2023-10-25' },
    { id: 'CUST-003', name: 'Alice Johnson', email: 'alice.j@example.com', totalSpent: 89.75, lastOrder: '2023-10-26' },
    { id: 'CUST-004', name: 'Bob Brown', email: 'b.brown@example.com', totalSpent: 450.20, lastOrder: '2023-10-24' },
    { id: 'CUST-005', name: 'Charlie Davis', email: 'charlie.d@example.com', totalSpent: 55.00, lastOrder: '2023-10-22' },
    { id: 'CUST-006', name: 'Diana Prince', email: 'diana.p@example.com', totalSpent: 180.40, lastOrder: '2023-10-20' },
    { id: 'CUST-007', name: 'Bruce Wayne', email: 'bruce.w@example.com', totalSpent: 980.00, lastOrder: '2023-10-19' },
];

const CustomersPage: React.FC = () => {
    return (
        <div className="mx-auto max-w-screen-2xl">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-white">Customers</h2>
                <button className="bg-brand-primary text-white font-semibold py-2 px-5 rounded-lg hover:bg-brand-secondary transition-colors">
                    Add New Customer
                </button>
            </div>
            <div className="rounded-lg border border-dark-card bg-dark-card shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-dark-bg">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Customer ID</th>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Name</th>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Email</th>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Total Spent</th>
                                <th className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">Last Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(customer => (
                                <tr key={customer.id} className="border-b border-dark-bg last:border-b-0 hover:bg-dark-bg/50">
                                    <td className="p-4 text-sm text-brand-secondary font-mono">{customer.id}</td>
                                    <td className="p-4 text-sm text-white font-medium">{customer.name}</td>
                                    <td className="p-4 text-sm text-dark-text-secondary">{customer.email}</td>
                                    <td className="p-4 text-sm text-dark-text-secondary font-medium">${customer.totalSpent.toFixed(2)}</td>
                                    <td className="p-4 text-sm text-dark-text-secondary">{customer.lastOrder}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomersPage;
