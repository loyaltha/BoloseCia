import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; 
import { getProductById } from '../data/produtos'; // Importa a função corrigida

// Função utilitária para formatar valores em Reais (R$)
const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export function Produto() {
  // Captura o ID da URL (ex: /produto/1)
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // Estado para controlar a quantidade

  // Busca o produto usando a função do arquivo produtos.ts
  const product = getProductById(Number(id)); 

  // Se o produto não for encontrado, exibe uma mensagem de erro
  if (!product) {
    return (
      <div className="text-center py-20 font-serif text-2xl text-[#2C1A12]">
        Produto não encontrado.
      </div>
    );
  }
  
  // Função para adicionar o produto e a quantidade ao contexto
  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${product.nome} (${quantity} un.) adicionado ao carrinho!`);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 bg-[#FDFBF7]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Imagem do Produto */}
        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
          <img 
            src={product.imagem || 'placeholder.jpg'}
            alt={product.nome}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detalhes e Ações */}
        <div className="p-4">
          <h1 className="text-5xl font-serif text-[#2C1A12] font-bold mb-4">{product.nome}</h1>
          <p className="text-3xl text-[#593518] font-semibold mb-6">
            {formatCurrency(product.preco)}
          </p>
          
          <p className="text-[#666666] leading-relaxed mb-8">
            {/* Descrição detalhada do produto */}
            {product.descricao || 'Descrição detalhada do bolo, ingredientes e dicas de conservação: Feito com ingredientes frescos e amor. Ideal para qualquer celebração.'}
          </p>
          
          {/* Controle de Quantidade e Botão */}
          <div className="flex items-center space-x-4 mb-8">
            {/* Controle de Quantidade */}
            <div className="flex border border-[#E6DCCF] rounded-lg">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-4 py-2 text-[#593518] text-xl font-bold hover:bg-[#E6DCCF] transition"
              >
                -
              </button>
              <input 
                type="number" 
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 text-center border-l border-r border-[#E6DCCF] py-2 text-[#2C1A12] font-medium bg-white"
              />
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-4 py-2 text-[#593518] text-xl font-bold hover:bg-[#E6DCCF] transition"
              >
                +
              </button>
            </div>
            
            {/* Botão Adicionar */}
            <button
              onClick={handleAddToCart}
              className="bg-[#593518] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#3E2410] transition duration-300 shadow-lg"
            >
              Adicionar ao Carrinho
            </button>
          </div>

          <p className="text-sm text-[#787165]">
             Disponibilidade: Imediata. Prazo de entrega varia conforme a região.
          </p>
        </div>
      </div>
    </div>
  );
}