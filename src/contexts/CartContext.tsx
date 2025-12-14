import { createContext, ReactNode, useContext, useState, useMemo } from "react";

// Tipos base para o projeto
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  
  description_full?: string; 
  description_short?: string; 
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Cálculo de total e contagem (usa useMemo para otimizar)
  const { cartCount, cartTotal } = useMemo(() => {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return { cartTotal: total, cartCount: count };
  }, [cartItems]);

  // Implementação: Adicionar Item ao Carrinho
  const addToCart = (product: Product, quantity = 1) => {
    setCartItems((state) => {
      const itemInCart = state.find((item) => item.id === product.id);

      if (itemInCart) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...state, { ...product, quantity }];
      }
    });
  };

  // Implementação: Remover Item
  const removeFromCart = (productId: number) => {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  };

  // Implementação: Atualizar Quantidade
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      return removeFromCart(productId);
    }
    setCartItems((state) => {
        return state.map((item) =>
            item.id === productId
                ? { ...item, quantity: newQuantity }
                : item
        );
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, cartTotal, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}