import React from 'react';

export function PoliticaPrivacidade() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 font-sans text-[#4A4A4A] bg-[#fcf8f1]">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#2C1A12] font-bold mb-6">
          Política de Privacidade
        </h1>
        
        <p className="text-sm text-[#85746D] mb-8">
          Última atualização: 08 de Dezembro de 2025
        </p>

        {/* --- INTRODUÇÃO --- */}
        <section className="mb-10">
          <p className="text-lg leading-relaxed text-[#666666]">
            A Bolos & Cia se compromete a proteger a sua privacidade. Esta política explica como coletamos, usamos, divulgamos e protegemos as suas informações pessoais quando você utiliza nossos serviços ou visita nosso website.
          </p>
        </section>

        {/* --- 1. COLETA DE INFORMAÇÕES --- */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold text-[#4A2C1D] mb-4 border-b pb-2">
            1. Informações Coletadas
          </h2>
          <p className="mb-4">Coletamos informações para oferecer e melhorar nossos serviços, incluindo:</p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-sm text-[#666666]">
            <li>Dados de Identificação: Nome, endereço de e-mail e telefone (fornecidos através do formulário de contato ou newsletter).</li>
            <li>Dados de Pedido: Detalhes de produtos comprados (tipo de bolo, preço, quantidade).</li>
            <li>Dados de Navegação: Endereço IP, tipo de navegador e páginas visitadas (coletados via cookies para análise).</li>
          </ul>
        </section>

        {/* --- 2. USO DAS INFORMAÇÕES --- */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold text-[#4A2C1D] mb-4 border-b pb-2">
            2. Como Usamos Seus Dados
          </h2>
          <p className="mb-4">Suas informações são usadas para:</p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-sm text-[#666666]">
            <li>Processar e gerenciar seus pedidos e pagamentos.</li>
            <li>Responder às suas perguntas e solicitações enviadas pelo formulário de contato.</li>
            <li>Enviar informações promocionais e ofertas (somente se você se inscrever na newsletter).</li>
            <li>Personalizar sua experiência no website.</li>
          </ul>
        </section>

        {/* --- 3. COMPARTILHAMENTO --- */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold text-[#4A2C1D] mb-4 border-b pb-2">
            3. Compartilhamento
          </h2>
          <p className="text-sm leading-relaxed text-[#666666]">
            Não vendemos, trocamos ou transferimos suas informações de identificação pessoal a terceiros. Exceto quando necessário para processar o pedido (como serviços de entrega) ou conforme exigido por lei.
          </p>
        </section>
        
        {/* --- 4. CONSENTIMENTO --- */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-[#4A2C1D] mb-4 border-b pb-2">
            4. Seu Consentimento
          </h2>
          <p className="text-sm leading-relaxed text-[#666666]">
            Ao utilizar nosso site, você concorda com os termos desta Política de Privacidade.
            Se tiver dúvidas sobre esta política, entre em contato conosco através do nosso formulário ou e-mail.
          </p>
        </section>

      </div>
    </div>
  );
}