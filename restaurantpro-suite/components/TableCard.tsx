
import React from 'react';

interface TableHeader {
  key: string;
  label: string;
}

interface TableCardProps {
  title: string;
  headers: TableHeader[];
  data: any[];
  renderRow: (item: any, index: number) => React.ReactNode;
}

const TableCard: React.FC<TableCardProps> = ({ title, headers, data, renderRow }) => {
  return (
    <div className="rounded-lg border border-dark-card bg-dark-card p-6 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <button className="text-sm text-brand-primary hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-dark-bg">
              {headers.map(header => (
                <th key={header.key} className="p-4 text-sm font-semibold text-dark-text-secondary uppercase">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => renderRow(item, index))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCard;
