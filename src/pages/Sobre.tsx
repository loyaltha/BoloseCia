import React from 'react';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-sans">
      
      {/* Título Principal */}
      <section className="pt-12 pb-12 text-center px-4">
        <h1 className="text-5xl font-serif text-[#2C1A12] mb-4 font-bold">
          Nossa História
        </h1>
        <p className="text-lg text-[#6B6B6B] font-light">
          Criando momentos doces e inesquecíveis desde o primeiro dia
        </p>
      </section>

      {/* Seção História */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#F7F3EF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Imagem */}
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/img/confeitaria.png" 
              alt="Chef confeiteiro" 
              className="object-cover w-full h-full"
            />
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-[#2C1A12] font-bold mb-2">
              Bolos & Cia
            </h2>
            <p className="leading-relaxed text-[#5A5A5A]">
              Há mais de 10 anos, transformamos celebrações em momentos mágicos através dos nossos bolos artesanais. Tudo começou com uma paixão pela confeitaria e o desejo de criar algo especial para cada cliente.
            </p>
            <p className="leading-relaxed text-[#5A5A5A]">
              Cada bolo é feito com ingredientes selecionados, técnicas tradicionais e muito carinho. Nossa missão é proporcionar não apenas sabor, mas memórias que durarão para sempre.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Valores */}
      <section className="py-24 px-6 md:px-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-[#2C1A12] font-bold text-center mb-16">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Card 1: Qualidade (Ícone Bolo) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#EFE5DB] rounded-full flex items-center justify-center mb-6 text-[#593518]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
                  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
                  <path d="M2 21h20"/>
                  <path d="M7 8v2"/>
                  <path d="M12 8v2"/>
                  <path d="M17 8v2"/>
                  <path d="M7 4h.01"/>
                  <path d="M12 4h.01"/>
                  <path d="M17 4h.01"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2C1A12] mb-3">Qualidade</h3>
              <p className="text-sm text-[#666]">Ingredientes premium e receitas testadas.</p>
            </div>

            {/* Card 2: Dedicação (Ícone Coração) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#FCECE8] rounded-full flex items-center justify-center mb-6 text-[#593518]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.28 3.6-2.34 3.6-5.38a6.07 6.07 0 0 0-9.37-4.78l-1.42 1.1-1.42-1.1A6.07 6.07 0 0 0 1.2 8.62c0 3 2.11 4.1 3.6 5.38L12 21l7-7Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2C1A12] mb-3">Dedicação</h3>
              <p className="text-sm text-[#666]">Feito com amor e atenção aos detalhes.</p>
            </div>

            {/* Card 3: Excelência (Ícone Medalha/Ribbon) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#EFE5DB] rounded-full flex items-center justify-center mb-6 text-[#593518]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2C1A12] mb-3">Excelência</h3>
              <p className="text-sm text-[#666]">Compromisso com a perfeição.</p>
            </div>

            {/* Card 4: Conexão (Ícone Pessoas) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#FCECE8] rounded-full flex items-center justify-center mb-6 text-[#593518]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2C1A12] mb-3">Conexão</h3>
              <p className="text-sm text-[#666]">Relacionamentos através de momentos doces.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Seção Estatísticas */}
      <section className="py-20 bg-[#593518] text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <span className="block text-5xl font-serif font-bold mb-2">10+</span>
            <span className="text-sm uppercase tracking-wide opacity-90">Anos de Experiência</span>
          </div>
          <div>
            <span className="block text-5xl font-serif font-bold mb-2">5000+</span>
            <span className="text-sm uppercase tracking-wide opacity-90">Bolos Criados</span>
          </div>
          <div>
            <span className="block text-5xl font-serif font-bold mb-2">2000+</span>
            <span className="text-sm uppercase tracking-wide opacity-90">Clientes Felizes</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;