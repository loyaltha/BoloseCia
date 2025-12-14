import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#FFFBF2] pt-16 pb-8 border-t border-amber-50">
      <div className="container mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="font-serif text-3xl font-bold text-[#4A2C1D] mb-4">
              Bolos<span className="text-amber-600 italic">&</span>Cia
            </h3>
            <p className="text-[#85746D] text-sm leading-relaxed mb-6">
              Transformando celebrações em momentos inesquecíveis desde 2020.
            </p>
            {/* Ícones de Redes Sociais */}
            <div className="flex gap-4">
              {/* Instagram Icon */}
              <a href="#" className="text-[#85746D] hover:text-[#4A2C1D] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Facebook Icon */}
              <a href="#" className="text-[#85746D] hover:text-[#4A2C1D] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* COLUNA 2: Produtos */}
          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-4">Produtos</h4>
            <ul className="space-y-3 text-[#85746D] text-sm">
              <li><Link to="/catalogo" className="hover:text-[#4A2C1D]">Bolos de Aniversário</Link></li>
              <li><Link to="/catalogo" className="hover:text-[#4A2C1D]">Bolos de Casamento</Link></li>
              <li><Link to="/catalogo" className="hover:text-[#4A2C1D]">Bolos Temáticos</Link></li>
              <li><Link to="/contato" className="hover:text-[#4A2C1D]">Encomendas Especiais</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: Empresa */}
          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-4">Empresa</h4>
            <ul className="space-y-3 text-[#85746D] text-sm">
              <li><Link to="/sobre" className="hover:text-[#4A2C1D]">Sobre Nós</Link></li>
              <li><Link to="#" className="hover:text-[#4A2C1D]">Política de Entrega</Link></li>
              <li><Link to="/politica-privacidade" className="hover:text-[#593518]">Política de Privacidade</Link></li>
              <li><Link to="#" className="hover:text-[#4A2C1D]">Termos e Condições</Link></li>
            </ul>
          </div>

          {/* COLUNA 4: Contato */}
          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-4">Contato</h4>
            <ul className="space-y-4 text-[#85746D] text-sm">
              <li className="flex items-center gap-3">
                {/* Ícone Telefone */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                (11) 98765-4321
              </li>
              <li className="flex items-center gap-3">
                {/* Ícone Email */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                contato@bolosecia.com.br
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#E6DCCF] pt-8 text-center">
          <p className="text-[#85746D] text-sm">
            &copy; 2025 Bolos&Cia. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}