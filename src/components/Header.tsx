import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-[#fcf8f1] sticky top-0 z-50 shadow-sm font-serif">
      <div className="container mx-auto px-8 py-5 flex justify-between items-center">
        
        {/* LADO ESQUERDO: Logo + Links de Navegação */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-[#4A2C1D] tracking-wide">
            Bolos<span className="text-amber-600 italic">&</span>Cia
          </Link>

          <nav className="hidden md:flex gap-8 text-[#000] text-lg">
            <Link to="/Catalogo" className="hover:text-amber-700 transition">Catálogo</Link>
            <Link to="/Sobre" className="hover:text-amber-700 transition">Sobre</Link>
            <Link to="/Contato" className="hover:text-amber-700 transition">Contato</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          
          <Link to="/Carrinho" className="text-[#4A2C1D] hover:text-amber-700 transition relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>

          <Link 
            to="/catalogo" 
            className="bg-[#4A2C1D] text-[#FFFBF2] px-6 py-2 rounded-lg text-lg font-medium hover:bg-[#362015] transition shadow-sm"
          >
            Encomendar
          </Link>
        </div>

      </div>
    </header>
  );
}