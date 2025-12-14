import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BoloCard } from '../components/BoloCard'; // Importamos o componente unificado
import bolosData from '../data/bolos.json';
import { useCart } from '../contexts/CartContext';
import { X, Check, MessageSquare, ArrowRight } from 'lucide-react';

// Interface para tipagem
interface ProdutoType {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  sabores?: string[];
  categoria: string;
}

export function Home() {
  const bolosDestaque = bolosData.slice(0, 3);
  const { addToCart } = useCart();

  // --- ESTADOS DO POP-UP (MODAL) ---
  const [produtoSelecionado, setProdutoSelecionado] = useState<ProdutoType | null>(null);
  const [saborEscolhido, setSaborEscolhido] = useState<string>('');
  const [observacao, setObservacao] = useState<string>(''); 
  const [erro, setErro] = useState('');

  // --- FUNÇÕES DO MODAL ---
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
      setErro('Por favor, selecione uma opção.');
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
    <div className="font-sans text-[#4A4A4A] relative">
      
      {/* --- SEÇÃO 1: HERO (BANNER PRINCIPAL) --- */}
      <section className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl text-[#272117]">
              Bolos artesanais que transformam
            </h1>
            <p className="text-lg text-[#787165] text-pretty md:text-xl leading-relaxed mt-4">
              Criados com ingredientes premium e amor em cada detalhe. 
              Descubra sabores únicos que tornam seus momentos especiais ainda mais memoráveis.
            </p>

            <div className="mt-8">
              <Link 
                to="/catalogo" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#5b2c0d] text-white font-medium rounded-lg hover:bg-[#3E2518] transition-colors shadow-sm"
              >
                Ver Catálogo
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="img/pagina-principal.jpg" 
              alt="Confeiteira decorando bolo"
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&q=80" }}
            />
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-4 border-[#E6DCCF] rounded-2xl hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: NOSSOS DESTAQUES --- */}
      <section className="py-24 px-6 md:px-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#2C1A12] font-bold mb-4">
              Nossos Destaques
            </h2>
            <p className="text-[#666666] text-lg font-light">
              As criações mais amadas pelos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {bolosDestaque.map((bolo) => (
              // USAMOS O COMPONENTE BOLOCARD AQUI
              // Ele já tem o visual correto e a lógica de hover configurada
              <BoloCard 
                key={bolo.id} 
                bolo={bolo} 
                onOpenModal={abrirModal} 
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/catalogo" 
              className="inline-flex items-center text-[#5b2c0d] font-bold hover:underline text-lg group gap-2"
            >
              Ver todos os bolos
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: DEPOIMENTOS --- */}
      <section className="py-24 px-6 md:px-12 bg-[#faf4eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#2C1A12] font-bold mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-[#666666] text-lg font-light">
              Histórias doces de quem já transformou suas celebrações conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EAEaea] flex flex-col h-full">
              <div className="flex mb-6 text-[#F4A261]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <p className="text-[#4A4A4A] text-base leading-relaxed italic mb-8 flex-grow">
                "O bolo de aniversário da minha filha foi simplesmente perfeito! Todos os convidados pediram o contato."
              </p>
              <p className="font-bold text-[#2C1A12]">Maria Silva</p>
            </div>
            {/* Outros depoimentos... */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EAEaea] flex flex-col h-full">
              <div className="flex mb-6 text-[#F4A261]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <p className="text-[#4A4A4A] text-base leading-relaxed italic mb-8 flex-grow">
                "Encomendamos o bolo de casamento e foi a estrela da festa. Lindo e delicioso!"
              </p>
              <p className="font-bold text-[#2C1A12]">João Santos</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EAEaea] flex flex-col h-full">
              <div className="flex mb-6 text-[#F4A261]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <p className="text-[#4A4A4A] text-base leading-relaxed italic mb-8 flex-grow">
                "Sabores únicos e apresentação impecável. Já virei cliente fiel!"
              </p>
              <p className="font-bold text-[#2C1A12]">Ana Costa</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 4: NEWSLETTER --- */}
      <section className="py-24 px-6 md:px-12 bg-[#fcf8f1]">
        <div className="max-w-4xl mx-auto bg-[#FFF0E5] rounded-[32px] p-8 md:p-14 text-center shadow-sm">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C1A12] mb-4">
            Receba Ofertas Exclusivas
          </h2>
          <p className="text-[#5A4A3A] text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Inscreva-se para receber 10% de desconto na primeira compra, novidades e receitas especiais
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="flex-1 px-6 py-3 rounded-lg border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-[#5b2c0d] text-[#4A4A4A] placeholder-gray-400 shadow-sm"
            />
            <button 
              type="submit" 
              className="px-8 py-3 bg-[#5b2c0d] text-white font-bold rounded-lg hover:bg-[#3E2518] transition-colors shadow-sm whitespace-nowrap"
            >
              Inscrever-se
            </button>
          </form>

          <p className="text-sm text-[#7A6A5A] flex items-center justify-center gap-2">
            Sem spam. Apenas delícias na sua caixa de entrada <span>🍰</span>
          </p>
        </div>
      </section>

      {/* --- O POP-UP (MODAL) --- */}
      {produtoSelecionado && (
        <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden flex flex-col max-h-[90vh]">
            
            <button onClick={fecharModal} className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:text-red-500 shadow-sm transition-colors">
                <X size={20} />
            </button>

            <div className="overflow-y-auto custom-scrollbar">
                <div className="h-52 relative">
                    <img src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                        <h2 className="text-2xl font-bold text-white leading-tight">{produtoSelecionado.nome}</h2>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="bg-[#FFFBF2] p-4 rounded-lg border border-[#E6DCCF]">
                         <p className="text-[#5c3a21] text-sm leading-relaxed">{produtoSelecionado.descricao}</p>
                    </div>
                    
                    {produtoSelecionado.sabores && produtoSelecionado.sabores.length > 0 && (
                        <div>
                        <h3 className="font-bold text-[#4A2C1D] mb-3 text-sm uppercase flex items-center gap-2"><Check size={16} /> Escolha uma opção:</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {produtoSelecionado.sabores.map((opcao) => (
                            <label key={opcao} className={`p-3 rounded-lg border cursor-pointer text-center text-sm transition-all ${saborEscolhido === opcao ? 'bg-[#5b2c0d] text-white border-[#5b2c0d] shadow-md' : 'border-gray-200 hover:border-[#5b2c0d] text-gray-700'}`}>
                                <input type="radio" name="opcao" value={opcao} checked={saborEscolhido === opcao} onChange={() => {setSaborEscolhido(opcao); setErro('');}} className="hidden" />
                                {opcao}
                            </label>
                            ))}
                        </div>
                        {erro && <p className="text-red-500 text-xs mt-2 font-bold animate-pulse">⚠️ {erro}</p>}
                        </div>
                    )}

                    <div>
                        <h3 className="font-bold text-[#4A2C1D] mb-2 text-sm uppercase flex items-center gap-2"><MessageSquare size={16} /> Observações:</h3>
                        <textarea value={observacao} onChange={(e) => setObservacao(e.target.value)} placeholder="Ex: Escrever 'Parabéns', tirar canela..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b2c0d] outline-none min-h-[80px] text-sm" />
                    </div>
                </div>
            </div>

            <div className="p-4 border-t bg-gray-50 flex items-center justify-between mt-auto">
                <div>
                    <span className="text-xs text-gray-500 font-bold uppercase">Total</span>
                    <div className="text-2xl font-bold text-[#5b2c0d]">{produtoSelecionado.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                </div>
                <button onClick={confirmarAdicao} className="bg-[#2e7d32] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-[#1b5e20] transition-colors active:scale-95">
                    Confirmar
                </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}