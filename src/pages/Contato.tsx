const Contato = () => {
  return (
    <div className="min-h-screen font-sans text-[#4A4A4A]">
      
      {/* --- SEÇÃO 1: CABEÇALHO*/}
      <div className="bg-[#f8f3ec] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-serif text-[#2C1A12] font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-[#666666] text-lg font-light">
            Estamos aqui para tornar seu momento especial ainda mais doce
          </p>
        </div>
      </div>

      {/* --- SEÇÃO 2: CONTEÚDO PRINCIPAL*/}
      <div className="bg-[#fcf8f1] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* FORMULÁRIO --- */}
            <div>
              <h2 className="text-3xl font-serif text-[#2C1A12] font-bold mb-8">Envie uma Mensagem</h2>
              
              <form className="space-y-6">
                {/* Linha 1: Nome e Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2C1A12] mb-2">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] bg-[#FFFFFF] focus:outline-none focus:border-[#593518] focus:ring-1 focus:ring-[#593518] transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2C1A12] mb-2">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] bg-[#FFFFFF] focus:outline-none focus:border-[#593518] focus:ring-1 focus:ring-[#593518] transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Linha 2: Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2C1A12] mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] bg-[#FFFFFF] focus:outline-none focus:border-[#593518] focus:ring-1 focus:ring-[#593518] transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                {/* Linha 3: Assunto */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2C1A12] mb-2">Assunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] bg-[#FFFFFF] focus:outline-none focus:border-[#593518] focus:ring-1 focus:ring-[#593518] transition-colors"
                    placeholder="Sobre o que você gostaria de falar?"
                  />
                </div>

                {/* Linha 4: Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C1A12] mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] bg-[#FFFFFF] focus:outline-none focus:border-[#593518] focus:ring-1 focus:ring-[#593518] transition-colors resize-none"
                    placeholder="Conte-nos sobre seu pedido ou dúvida..."
                  ></textarea>
                </div>

                {/* Botão */}
                <button 
                  type="button" 
                  className="w-full bg-[#593518] text-white font-bold py-4 rounded-lg hover:bg-[#3E2410] transition duration-300 shadow-sm text-base"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* COLUNA DA DIREITA: CARDS */}
            <div>
              <h2 className="text-3xl font-serif text-[#2C1A12] font-bold mb-4">Informações de Contato</h2>
              <p className="text-[#6B6B6B] mb-10 leading-relaxed font-light">
                Estamos prontos para atender você! Entre em contato conosco através de qualquer um dos canais abaixo.
              </p>
              
              <div className="space-y-6">
                
                {/* Card 1: Endereço */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F0F0F0] flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#F5EFE9] rounded-full flex items-center justify-center flex-shrink-0 text-[#593518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C1A12] text-lg mb-1">Endereço</h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      Rua das Flores, 123<br />
                      Centro, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                {/* Card 2: Telefone */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F0F0F0] flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#F5EFE9] rounded-full flex items-center justify-center flex-shrink-0 text-[#593518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C1A12] text-lg mb-1">Telefone</h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      (11) 98765-4321<br />
                      (11) 3456-7890
                    </p>
                  </div>
                </div>

                {/* Card 3: E-mail */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F0F0F0] flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#F5EFE9] rounded-full flex items-center justify-center flex-shrink-0 text-[#593518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C1A12] text-lg mb-1">E-mail</h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      contato@bolosecia.com.br<br />
                      pedidos@bolosecia.com.br
                    </p>
                  </div>
                </div>

                {/* Card 4: Horário */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F0F0F0] flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#F5EFE9] rounded-full flex items-center justify-center flex-shrink-0 text-[#593518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C1A12] text-lg mb-1">Horário de Funcionamento</h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      Segunda a Sexta: 9h às 19h<br />
                      Sábado: 9h às 17h<br />
                      Domingo: 10h às 14h
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;