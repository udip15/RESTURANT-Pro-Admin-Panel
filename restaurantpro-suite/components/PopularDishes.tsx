import React from 'react';
import { Dish } from '../types';

// FIX: Added missing properties to each dish to match the Dish type.
const popularDishes: Dish[] = [
  { id: '1', name: 'Spicy Ramen', imageUrl: 'https://picsum.photos/seed/ramen/100/100', orders: 210, price: 15.99, category: 'Main Course', description: 'A rich and spicy broth with noodles, pork, and a soft-boiled egg.' },
  { id: '2', name: 'Classic Burger', imageUrl: 'https://picsum.photos/seed/burger/100/100', orders: 198, price: 12.50, category: 'Main Course', description: 'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.' },
  { id: '3', name: 'Margherita Pizza', imageUrl: 'https://picsum.photos/seed/pizza/100/100', orders: 175, price: 22.00, category: 'Main Course', description: 'Classic pizza with fresh mozzarella, tomatoes, and basil on a thin crust.' },
  { id: '4', name: 'Sushi Platter', imageUrl: 'https://picsum.photos/seed/sushi/100/100', orders: 154, price: 35.75, category: 'Main Course', description: 'An assortment of fresh nigiri and maki rolls, served with wasabi and ginger.' },
  { id: '5', name: 'Caesar Salad', imageUrl: 'https://picsum.photos/seed/salad/100/100', orders: 121, price: 9.50, category: 'Appetizer', description: 'Crisp romaine lettuce with parmesan, croutons, and a creamy Caesar dressing.' },
];

const PopularDishes: React.FC = () => {
  return (
    <div className="rounded-lg border border-dark-card bg-dark-card p-6 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Popular Dishes</h3>
        <button className="text-sm text-brand-primary hover:underline">View All</button>
      </div>

      <div className="space-y-4">
        {popularDishes.map((dish) => (
          <div key={dish.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={dish.imageUrl} alt={dish.name} className="w-12 h-12 rounded-md object-cover" />
              <div>
                <p className="font-medium text-white">{dish.name}</p>
              </div>
            </div>
            <p className="text-dark-text-secondary font-medium">{dish.orders} orders</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
