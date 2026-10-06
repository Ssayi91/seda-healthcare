"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type CartItem = { name: string; category: string; qty: number };

interface CartContextType {
  items: CartItem[];
  addToCart: (name: string, category: string) => void;
  removeFromCart: (name: string) => void;
  updateQty: (name: string, delta: number) => void;
  clearCart: () => void;
  generateWhatsAppLink: () => string;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('seda_cart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
        console.log("Loaded cart from storage:", JSON.parse(saved));
      } catch (error) {
        console.error("Failed to parse cart", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('seda_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (name: string, category: string) => {
    console.log("🛒 ADD TO CART CLICKED:", name, category); // <-- THIS PROVES IT WORKS
    
    setItems(prev => {
      const exists = prev.find(i => i.name === name);
      if (exists) {
        const updated = prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i);
        console.log("✅ Updated quantity for existing item");
        return updated;
      }
      console.log("✅ Added brand new item to cart");
      return [...prev, { name, category, qty: 1 }];
    });
    
    console.log("📂 Opening cart drawer...");
    setIsCartOpen(true);
  };

  const removeFromCart = (name: string) => {
    setItems(prev => prev.filter(i => i.name !== name));
  };

  const updateQty = (name: string, delta: number) => {
    setItems(prev => prev.map(i => {
      if (i.name === name) {
        const newQty = i.qty + delta;
        return newQty > 0 ? { ...i, qty: newQty } : i;
      }
      return i;
    }));
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('seda_cart');
  };

  const generateWhatsAppLink = () => {
    if (items.length === 0) return '#';
    const text = items.map((i, idx) => `${idx + 1}. *${i.name}* (${i.category}) - Qty: ${i.qty}`).join('\n');
    const msg = `Hello Seda Healthcare, I would like to request a formal quotation for the following items:\n\n${text}\n\nPlease provide pricing, specifications, and delivery timelines.`;
    return `https://wa.me/254792415615?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CartContext.Provider value={{ 
      items, addToCart, removeFromCart, updateQty, clearCart, generateWhatsAppLink, isCartOpen, setIsCartOpen 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};