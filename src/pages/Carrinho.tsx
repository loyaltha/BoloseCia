import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

// Função utilitária para formatar valores em Reais (R$)
const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export function Carrinho() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  // Verifica se o carrinho está vazio
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-serif text-[#2C1A12] font-bold mb-4">Seu Carrinho Está Vazio 😢</h1>
        <p className="text-lg text-[#666666] mb-8">Parece que você ainda não adicionou nenhuma delícia.</p>
        <Link 
          to="/catalogo" 
          className="inline-block bg-[#5b2c0d] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#3E2518] transition-colors"
        >
          Ir para o Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-serif text-[#2C1A12] font-bold mb-10 border-b pb-4">Seu Carrinho de Compras</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* COLUNA ESQUERDA: ITENS DO CARRINHO */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map(item => (
            <div 
              key={item.id} 
              className="flex items-center bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#fcf8f1]"
            >
              
              {/* Imagem */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded-lg mr-6 flex-shrink-0"
              />
              
              <div className="flex-grow">
                {/* Nome do Produto */}
                <Link to={`/produto/${item.id}`} className="text-xl font-semibold text-[#2C1A12] hover:text-[#5b2c0d] transition">
                  {item.name}
                </Link>
                
                {/* Preço Unitário */}
                <p className="text-sm text-[#787165]">Preço unitário: {formatCurrency(item.price)}</p>
                
                {/* Subtotal */}
                <p className="font-bold text-[#5b2c0d] mt-1">Subtotal: {formatCurrency(item.price * item.quantity)}</p>
              </div>

              {/* Controles de Quantidade */}
              <div className="flex items-center space-x-4 ml-auto flex-shrink-0">
                <div className="flex items-center border border-[#E6DCCF] rounded-lg">
                  {/* Botão Diminuir */}
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 text-[#593518] text-lg font-bold hover:bg-[#E6DCCF] rounded-l-lg transition"
                    aria-label="Diminuir quantidade"
                  >
                    -
                  </button>
                  {/* Quantidade Atual */}
                  <span className="w-8 text-center py-1 text-[#2C1A12] font-medium border-l border-r border-[#E6DCCF]">
                    {item.quantity}
                  </span>
                  {/* Botão Aumentar */}
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 text-[#593518] text-lg font-bold hover:bg-[#E6DCCF] rounded-r-lg transition"
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>
                
                {/* Botão Remover */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#D32F2F] hover:text-[#B71C1C] transition p-2"
                  aria-label="Remover item"
                >
                  {/* Ícone de Lixeira SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* COLUNA DIREITA: RESUMO DO PEDIDO */}
        <div className="lg:col-span-1">
          <div className="bg-[#FFF0E5] p-6 rounded-xl shadow-lg border border-[#fcf8f1] sticky top-8">
            <h2 className="text-2xl font-serif text-[#2C1A12] font-bold mb-6 border-b border-[#E6DCCF] pb-3">
              Resumo do Pedido
            </h2>
            
            <div className="space-y-3 text-lg">
              <div className="flex justify-between">
                <span>Total de Itens:</span>
                <span className="font-semibold">{cartItems.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal (Produtos):</span>
                <span className="font-semibold">{formatCurrency(cartTotal)}</span>
              </div>
              
              {/* Simulação de Frete e Desconto (pode ser expandido depois) */}
              <div className="flex justify-between text-[#388E3C]">
                <span>Frete:</span>
                <span className="font-semibold">Grátis*</span>
              </div>
              
              <div className="flex justify-between pt-4 border-t border-[#E6DCCF] mt-4">
                <span className="text-xl font-bold text-[#2C1A12]">Total a Pagar:</span>
                <span className="text-xl font-bold text-[#5b2c0d]">{formatCurrency(cartTotal)}</span>
              </div>
            </div>

            {/* Botão de Finalizar Compra */}
            <button 
              onClick={() => alert(`Simulação de Checkout! Total: ${formatCurrency(cartTotal)}`)}
              className="w-full bg-[#5b2c0d] text-white font-bold py-4 mt-6 rounded-lg hover:bg-[#3E2518] transition-colors shadow-md text-lg"
            >
              Finalizar Compra
            </button>
            
            <p className="text-xs text-[#787165] mt-4 text-center">*Frete grátis simulado para demonstração.</p>
          </div>
        </div>
      </div>
    </div>
  );
}