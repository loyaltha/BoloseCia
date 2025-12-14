import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, Product } from '../contexts/CartContext'; 

interface Bolo {
  id: number; 
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
  categoria: string;
}

interface BoloCardProps {
  bolo: Bolo;
}

export function BoloCard({ bolo }: BoloCardProps) {
  const { addToCart } = useCart(); 

  // Mapeia o tipo Bolo para o tipo Product que o Contexto espera
  const productData: Product = {
    id: bolo.id,
    name: bolo.nome,
    price: bolo.preco,
    image: bolo.imagem,
  };

  const handleAdicionarAoCarrinho = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    addToCart(productData); 
    
    // Feedback visual
    console.log(`${bolo.nome} adicionado ao carrinho!`);
    alert(`${bolo.nome} adicionado ao carrinho!`); 
  };

  return (
    <Link 
      to={`/produto/${bolo.id}`} 
      className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-[#E6DCCF] flex flex-col h-full"
    >
      
      {/* 1. IMAGEM DO BOLO */}
      <div className="overflow-hidden h-64 relative">
        <img 
          src={bolo.imagem} 
          alt={bolo.nome} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <span className="absolute top-4 right-4 bg-[#FFFBF2] text-[#4A2C1D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          {bolo.categoria}
        </span>
      </div>
      
      {/* 2. CONTEÚDO (Nome, Descrição e Preço) */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-[#4A2C1D] mb-2 line-clamp-2">
          {bolo.nome}
        </h3>
        
        <p className="text-[#85746D] text-sm mb-4 line-clamp-3 flex-grow">
          {bolo.descricao}
        </p>
        
        {/* Rodapé do Card: Preço e Botão */}
        <div className="mt-auto pt-4 border-t border-[#E6DCCF] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-[#85746D] uppercase">A partir de</span>
            <span className="text-xl font-bold text-[#4A2C1D]">
              R$ {bolo.preco.toFixed(2).replace('.', ',')}
            </span>
          </div> 

          <button
            onClick={handleAdicionarAoCarrinho}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A2C1D] text-[#FFFBF2] font-medium rounded-lg hover:bg-[#594A42] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Adicionar
          </button>
        </div>
      </div>

    </Link>
  );
}