
import React from 'react';
import { ArrowUpRightIcon, ArrowDownRightIcon } from './icons';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, changeType, icon }) => {
  const isIncrease = changeType === 'increase';
  
  return (
    <div className="rounded-lg border border-dark-card bg-dark-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-dark-bg p-3">
          {icon}
        </div>
        <div className="flex items-center gap-1 rounded-full px-2 py-1"
             style={{ backgroundColor: isIncrease ? 'rgba(52, 211, 153, 0.1)' : 'rgba(248, 113, 113, 0.1)' }}>
          <span className={`text-sm font-medium ${isIncrease ? 'text-green-400' : 'text-red-400'}`}>
            {change}
          </span>
          {isIncrease ? (
            <ArrowUpRightIcon className="w-4 h-4 text-green-400" />
          ) : (
            <ArrowDownRightIcon className="w-4 h-4 text-red-400" />
          )}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-3xl font-bold text-white">{value}</h3>
        <p className="text-sm text-dark-text-secondary">{title}</p>
      </div>
    </div>
  );
};

export default MetricCard;
