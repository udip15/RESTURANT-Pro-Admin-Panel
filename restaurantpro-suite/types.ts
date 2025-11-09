
export interface Dish {
  id: string;
  name: string;
  imageUrl: string;
  orders: number;
  price: number;
  category: string;
  description: string;
}

export type OrderStatus = 'Preparing' | 'Pending' | 'Completed' | 'Cancelled';

export interface Order {
  id: string;
  customerName: string;
  dish: string;
  total: number;
  status: OrderStatus;
  time: string;
}

export interface Customer {
    id: string;
    name: string;
    email: string;
    totalSpent: number;
    lastOrder: string;
}

export interface Notification {
  id: string;
  message: string;
  type: OrderStatus | 'New';
  time: string;
}
