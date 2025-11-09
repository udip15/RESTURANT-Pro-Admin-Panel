import React from 'react';
import { Dish } from '../types';

interface MenuItemCardProps {
  dish: Dish;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ dish }) => {
  return (
    <div className="rounded-lg border border-dark-card bg-dark-card p-4 flex flex-col h-full shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-1 transition-all duration-300">
      <img src={dish.imageUrl} alt={dish.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-bold text-white">{dish.name}</h4>
          <span className="text-lg font-semibold text-brand-secondary">${dish.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-brand-primary font-medium mb-2 uppercase tracking-wider">{dish.category}</p>
        <p className="text-sm text-dark-text-secondary mb-4 flex-grow">{dish.description}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-dark-bg flex items-center gap-2">
        <button className="w-full bg-brand-primary/20 text-brand-primary border border-brand-primary/50 py-2 rounded-md text-sm font-semibold hover:bg-brand-primary hover:text-white transition-colors">
          Edit
        </button>
        <button className="w-full bg-red-500/20 text-red-400 border border-red-500/50 py-2 rounded-md text-sm font-semibold hover:bg-red-500 hover:text-white transition-colors">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;