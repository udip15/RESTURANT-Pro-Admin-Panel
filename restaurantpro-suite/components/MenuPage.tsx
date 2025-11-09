import React, { useState, useEffect } from 'react';
import { Dish } from '../types';
import MenuItemCard from './MenuItemCard';

const fullMenu: Dish[] = [
  { id: '1', name: 'Spicy Ramen', imageUrl: 'https://picsum.photos/seed/ramen/400/300', orders: 210, price: 15.99, category: 'Main Course', description: 'A rich and spicy broth with noodles, pork, and a soft-boiled egg.' },
  { id: '2', name: 'Classic Burger', imageUrl: 'https://picsum.photos/seed/burger/400/300', orders: 198, price: 12.50, category: 'Main Course', description: 'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.' },
  { id: '3', name: 'Margherita Pizza', imageUrl: 'https://picsum.photos/seed/pizza/400/300', orders: 175, price: 22.00, category: 'Main Course', description: 'Classic pizza with fresh mozzarella, tomatoes, and basil on a thin crust.' },
  { id: '4', name: 'Sushi Platter', imageUrl: 'https://picsum.photos/seed/sushi/400/300', orders: 154, price: 35.75, category: 'Main Course', description: 'An assortment of fresh nigiri and maki rolls, served with wasabi and ginger.' },
  { id: '5', name: 'Caesar Salad', imageUrl: 'https://picsum.photos/seed/salad/400/300', orders: 121, price: 9.50, category: 'Appetizer', description: 'Crisp romaine lettuce with parmesan, croutons, and a creamy Caesar dressing.' },
  { id: '6', name: 'Bruschetta', imageUrl: 'https://picsum.photos/seed/bruschetta/400/300', orders: 98, price: 8.00, category: 'Appetizer', description: 'Toasted baguette topped with fresh tomatoes, garlic, basil, and olive oil.' },
  { id: '7', name: 'Tiramisu', imageUrl: 'https://picsum.photos/seed/tiramisu/400/300', orders: 85, price: 7.50, category: 'Dessert', description: 'A coffee-flavored Italian dessert with ladyfingers, mascarpone, and cocoa.' },
  { id: '8', name: 'Iced Latte', imageUrl: 'https://picsum.photos/seed/latte/400/300', orders: 150, price: 4.50, category: 'Beverage', description: 'Chilled espresso with milk, served over ice for a refreshing kick.' },
];

const MenuPage: React.FC = () => {
  const [menuItems, setMenuItems] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setLoading(true);
    const timer = setTimeout(() => {
      setMenuItems(fullMenu);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white">Full Menu</h2>
        <button className="bg-brand-primary text-white font-semibold py-2 px-5 rounded-lg hover:bg-brand-secondary transition-colors">
          Add New Dish
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuItems.map(dish => (
          <MenuItemCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;