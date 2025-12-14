import React from 'react';
import { ShoppingCart } from 'lucide-react';

// Tipagem dos dados do bolo
export interface Bolo {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
  categoria: string;
  sabores?: string[];
}

interface BoloCardProps {
  bolo: Bolo;
  // Agora o card espera receber a função que abre o modal
  onOpenModal?: (bolo: Bolo) => void;
}

export function BoloCard({ bolo, onOpenModal }: BoloCardProps) {

  // Função que lida com o clique no card
  const handleClick = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Se a página (Home ou Catalogo) mandou a função de abrir modal, execute-a
    if (onOpenModal) {
      onOpenModal(bolo);
    } else {
      console.log("Clique no card (função do modal não fornecida)");
    }
  };

  return (
    <div 
      className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-[#E6DCCF] flex flex-col h-full cursor-pointer relative"
      onClick={handleClick}
    >
      
      {/* 1. IMAGEM DO BOLO COM EFEITO HOVER */}
      <div className="overflow-hidden h-64 relative group">
        <img 
          src={bolo.imagem} 
          alt={bolo.nome} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Etiqueta de Categoria */}
        <span className="absolute top-4 right-4 bg-[#FFFBF2] text-[#4A2C1D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md z-10">
          {bolo.categoria}
        </span>

        {/* --- AQUI ESTÁ A MÁGICA DO HOVER --- */}
        {/* Camada escura com botão "Ver Detalhes" que aparece ao passar o mouse */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-0">
            <span className="bg-white/90 text-[#4A2C1D] px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm transform scale-95 group-hover:scale-100 transition-transform">
                Ver Detalhes
            </span>
        </div>
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
              {bolo.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div> 

          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A2C1D] text-[#FFFBF2] font-medium rounded-lg hover:bg-[#594A42] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <ShoppingCart size={20} />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}