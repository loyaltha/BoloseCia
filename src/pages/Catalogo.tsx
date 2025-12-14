import { useState } from 'react';
import bolosData from '../data/bolos.json';
import { BoloCard } from '../components/BoloCard';

export function Catalogo() {
  // Estado para a busca (o que o usuário digita)
  const [busca, setBusca] = useState('');
  
  // Estado para o filtro de categoria (começa mostrando 'Todos')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  // Lista das categorias para criar os botões
  const categorias = [
    'Todos',
    'Caseiros',
    'Naked Cake',
    'Bento Cake',
    'Aniversário',
    'Casamento',
    'Personalizados',
    'Acessórios'
  ];

  // Filtragem
  const bolosFiltrados = bolosData.filter((bolo) => {
    // 1. Verifica se bate com a categoria 
    const bateCategoria = categoriaSelecionada === 'Todos' || bolo.categoria === categoriaSelecionada;
    
    // 2. Verifica se o nome bate com a busca
    const bateBusca = bolo.nome.toLowerCase().includes(busca.toLowerCase());

    // Só mostra o bolo se passar nos DOIS testes
    return bateCategoria && bateBusca;
  });

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen">
      
      {/* CABEÇALHO DO CATÁLOGO */}
      <div className="text-center mb-12">
        <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-2 block">
          Nosso Menu
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A2C1D] mb-6">
          Escolha sua Doçura
        </h2>
        
        {/* BARRA DE BUSCA */}
        <div className="max-w-md mx-auto relative">
          <input 
            type="text" 
            placeholder="Buscar sabor (ex: Chocolate, Red Velvet)..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-[#E6DCCF] focus:border-[#4A2C1D] focus:outline-none bg-white text-[#4A2C1D] placeholder-amber-900/40 shadow-sm transition-colors"
          />
          {/* Ícone de Lupa dentro do input */}
          <svg className="w-5 h-5 text-amber-900/40 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>

      {/* BOTÕES DE FILTRO (Categorias) */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 
              ${categoriaSelecionada === cat 
                ? 'bg-[#4A2C1D] text-[#FFFBF2] border-[#4A2C1D] shadow-md scale-105' // Estilo Ativo
                : 'bg-transparent text-[#4A2C1D] border-[#E6DCCF] hover:border-[#4A2C1D] hover:bg-white' // Estilo Inativo
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID DE PRODUTOS */}
      {bolosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bolosFiltrados.map((bolo) => (
            <BoloCard key={bolo.id} bolo={bolo} />
          ))}
        </div>
      ) : (
        // MENSAGEM DE "NENHUM RESULTADO"
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🍰</div>
          <h3 className="text-2xl font-serif text-[#4A2C1D] font-bold">Nenhum bolo encontrado</h3>
          <p className="text-[#85746D]">Tente buscar por outro termo ou mude a categoria.</p>
          <button 
            onClick={() => {setBusca(''); setCategoriaSelecionada('Todos')}}
            className="mt-4 text-amber-700 underline hover:text-[#4A2C1D]"
          >
            Limpar filtros
          </button>
        </div>
      )}

    </div>
  );
}