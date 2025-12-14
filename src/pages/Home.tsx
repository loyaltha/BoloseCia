import { Link } from 'react-router-dom';
import { BoloCard } from '../components/BoloCard';
import bolosData from '../data/bolos.json';

export function Home() {
  const bolosDestaque = bolosData.slice(0, 3);

  return (
    <div className="font-sans text-[#4A4A4A]">
      
      {/* --- SEÇÃO 1: HERO --- */}
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
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&q=80"
              alt="Confeiteira decorando bolo"
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
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
              <BoloCard key={bolo.id} bolo={bolo} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/catalogo" 
              className="inline-flex items-center text-[#5b2c0d] font-bold hover:underline text-lg group gap-2"
            >
              Ver todos os bolos
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
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

      {/* --- SEÇÃO 4: NEWSLETTER (Card menor) --- */}
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

    </div>
  );
}