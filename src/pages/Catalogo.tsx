import { useState } from 'react';
import bolosData from '../data/bolos.json';
import { BoloCard } from '../components/BoloCard';
import { useCart } from '../contexts/CartContext';
import { Search, X, Check, MessageSquare } from 'lucide-react';

interface ProdutoType {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  sabores?: string[];
  categoria: string;
}

export function Catalogo() {
  const { addToCart } = useCart();

  // --- ESTADOS ---
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  // --- ESTADOS DO MODAL ---
  const [produtoSelecionado, setProdutoSelecionado] = useState<ProdutoType | null>(null);
  const [saborEscolhido, setSaborEscolhido] = useState<string>('');
  const [observacao, setObservacao] = useState<string>(''); 
  const [erro, setErro] = useState('');

  const categorias = [
    'Todos', 'Caseiros', 'Naked Cake', 'Bento Cake', 
    'Aniversário', 'Casamento', 'Personalizados', 'Acessórios'
  ];

  // --- FILTRAGEM ---
  const bolosFiltrados = bolosData.filter((bolo) => {
    const bateCategoria = categoriaSelecionada === 'Todos' || bolo.categoria === categoriaSelecionada;
    const bateBusca = bolo.nome.toLowerCase().includes(busca.toLowerCase());
    return bateCategoria && bateBusca;
  });

  // --- LÓGICA DO MODAL ---
  const abrirModal = (produto: any) => {
    const prodTyped = produto as ProdutoType;
    setProdutoSelecionado(prodTyped);
    setSaborEscolhido(prodTyped.sabores?.[0] || ''); 
    setObservacao('');
    setErro('');
  };

  const fecharModal = () => setProdutoSelecionado(null);

  const confirmarAdicao = () => {
    if (!produtoSelecionado) return;

    if (produtoSelecionado.sabores && produtoSelecionado.sabores.length > 0 && !saborEscolhido) {
      setErro('Por favor, selecione uma opção acima.');
      return;
    }

    let nomeFinal = produtoSelecionado.nome;
    if (saborEscolhido) nomeFinal += ` - ${saborEscolhido}`;
    if (observacao) nomeFinal += ` (Obs: ${observacao})`;

    addToCart({
      ...produtoSelecionado,
      id: Number(`${produtoSelecionado.id}${Date.now()}`), 
      nome: nomeFinal,
      quantity: 1
    } as any);

    fecharModal();
    setTimeout(() => alert("Item adicionado à sacola com sucesso!"), 100);
  };

  return (
    // MUDANÇA AQUI: Trocamos 'container' por 'w-full max-w-[1600px]' para usar mais espaço da tela
    <div className="w-full max-w-[1600px] mx-auto px-6 py-12 min-h-screen mb-20">
      
      {/* CABEÇALHO */}
      <div className="text-center mb-12">
        <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-2 block">
          Nosso Menu
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A2C1D] mb-6">
          Escolha sua Doçura
        </h2>
        
        <div className="max-w-md mx-auto relative">
          <input 
            type="text" 
            placeholder="Buscar sabor (ex: Chocolate, Red Velvet)..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-[#E6DCCF] focus:border-[#4A2C1D] focus:outline-none bg-white text-[#4A2C1D] placeholder-amber-900/40 shadow-sm transition-colors"
          />
          <Search className="w-5 h-5 text-amber-900/40 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* FILTROS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 
              ${categoriaSelecionada === cat 
                ? 'bg-[#4A2C1D] text-[#FFFBF2] border-[#4A2C1D] shadow-md scale-105' 
                : 'bg-transparent text-[#4A2C1D] border-[#E6DCCF] hover:border-[#4A2C1D] hover:bg-white' 
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID DE PRODUTOS */}
      {/* AQUI ESTÁ A CHAVE: 'xl:grid-cols-4' garante as 4 colunas em telas grandes */}
      {bolosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bolosFiltrados.map((bolo) => (
            <BoloCard 
                key={bolo.id} 
                bolo={bolo} 
                onOpenModal={abrirModal} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#FFFBF2] rounded-3xl border-2 border-dashed border-[#E6DCCF]">
          <div className="text-6xl mb-4">🍰</div>
          <h3 className="text-2xl font-serif text-[#4A2C1D] font-bold">Nenhum bolo encontrado</h3>
          <p className="text-[#85746D]">Tente buscar por outro termo ou mude a categoria.</p>
          <button 
            onClick={() => {setBusca(''); setCategoriaSelecionada('Todos')}}
            className="mt-6 px-6 py-2 bg-white border border-[#4A2C1D] text-[#4A2C1D] rounded-full hover:bg-[#4A2C1D] hover:text-white transition-colors"
          >
            Limpar filtros
          </button>
        </div>
      )}

      {/* --- MODAL --- */}
      {produtoSelecionado && (
        <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden flex flex-col max-h-[90vh]">
            <button onClick={fecharModal} className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-500 hover:text-red-500 rounded-full p-2 shadow-sm transition-all">
                <X size={20} />
            </button>

            <div className="overflow-y-auto custom-scrollbar">
                <div className="h-48 w-full relative">
                    <img src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h2 className="text-2xl font-bold text-white shadow-sm leading-tight">{produtoSelecionado.nome}</h2>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="bg-[#FFFBF2] p-4 rounded-lg border border-[#E6DCCF]">
                         <p className="text-[#5c3a21] text-sm leading-relaxed">{produtoSelecionado.descricao}</p>
                    </div>
                    {produtoSelecionado.sabores && produtoSelecionado.sabores.length > 0 && (
                        <div>
                        <h3 className="font-bold text-[#4A2C1D] mb-3 text-sm uppercase tracking-wide flex items-center gap-2"><Check size={16} /> Escolha uma opção:</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {produtoSelecionado.sabores.map((opcao) => (
                            <label key={opcao} className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all text-center text-sm font-medium ${saborEscolhido === opcao ? 'border-[#4A2C1D] bg-[#4A2C1D] text-white shadow-md transform scale-[1.02]' : 'border-gray-200 hover:border-[#4A2C1D] hover:bg-[#FFFBF2] text-gray-700'}`}>
                                <input type="radio" name="opcao" value={opcao} checked={saborEscolhido === opcao} onChange={() => {setSaborEscolhido(opcao); setErro('');}} className="hidden" />
                                {opcao}
                            </label>
                            ))}
                        </div>
                        {erro && <p className="text-red-500 text-xs mt-2 font-bold animate-pulse">⚠️ {erro}</p>}
                        </div>
                    )}
                    <div>
                        <h3 className="font-bold text-[#4A2C1D] mb-2 text-sm uppercase tracking-wide flex items-center gap-2"><MessageSquare size={16} /> Observações:</h3>
                        <textarea value={observacao} onChange={(e) => setObservacao(e.target.value)} placeholder="Ex: Escrever 'Parabéns', tirar canela..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A2C1D] focus:border-transparent text-sm min-h-[80px]" />
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase font-bold">Total</span>
                    <span className="text-2xl font-bold text-[#4A2C1D]">{produtoSelecionado.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
                <button onClick={confirmarAdicao} className="bg-[#2e7d32] text-white px-6 py-3 rounded-lg hover:bg-[#1b5e20] transition-transform active:scale-95 font-bold shadow-lg flex items-center gap-2">
                    Confirmar
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}