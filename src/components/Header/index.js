import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Array de rotas que possuem imagem de fundo (Hero) no topo
  // Se a rota não estiver aqui (ex: 404), o Header ficará sólido/branco por padrão
  const transparentPages = [
    '/', 
    '/trajetoria', 
    '/ativos-financeiros', 
    '/desenvolvimento-imobiliario', 
    '/atuacao-sociocultural', 
    '/gestao-de-creditos',
    '/easy-mall'
  ];

  const isTransparentRoute = transparentPages.includes(location.pathname);

  // 2. Lógica de Estilo: Sólido se a rota não for transparente OU se o usuário scrollou
  const useSolidStyle = !isTransparentRoute || isScrolled;

  // Função de navegação para âncoras na Home
  const handleNavClick = (e, targetId) => {
    setIsMenuOpen(false); 

    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        useSolidStyle ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO: Troca entre a colorida e a branca baseada no estilo do header */}
        <Link to="/" onClick={handleLogoClick}>
          <img 
            src={useSolidStyle ? "/imagens/LOGO.svg" : "/imagens/LOGO_BRANCA.svg"} 
            alt="Logo Torre" 
            className="w-40 transition-all"
          />
        </Link>

        {/* Desktop Nav: Troca a cor do texto para garantir contraste */}
        <nav className={`hidden md:flex gap-8 text-sm font-semibold uppercase ${
          useSolidStyle ? 'text-sky-900' : 'text-white'
        }`}>
          <Link to="/#historia" onClick={(e) => handleNavClick(e, 'historia')} className="relative group transition hover:text-sky-400">
            Quem Somos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/#atuacao" onClick={(e) => handleNavClick(e, 'atuacao')} className="relative group transition hover:text-sky-400">
            Atuação
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/#contato" onClick={(e) => handleNavClick(e, 'contato')} className="relative group transition hover:text-sky-400">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Botão Menu Mobile: Cor dinâmica para não sumir no fundo branco */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden focus:outline-none cursor-pointer z-[70] ${
            isMenuOpen || !useSolidStyle ? 'text-white' : 'text-sky-900'
          }`}
        >
          <svg className="w-9 h-9 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#002D7A]/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center gap-8">
          <Link to="/#historia" onClick={(e) => handleNavClick(e, 'historia')} className="text-3xl font-bold text-white hover:text-sky-400">Quem somos</Link>
          <Link to="/#atuacao" onClick={(e) => handleNavClick(e, 'atuacao')} className="text-3xl font-bold text-white hover:text-sky-400">Atuação</Link>
          <Link to="/#contato" onClick={(e) => handleNavClick(e, 'contato')} className="text-3xl font-bold text-white hover:text-sky-400">Contato</Link>
        </nav>
        <img src="/imagens/logo_hero.svg" className="w-24 opacity-20 mt-10" alt="Torre" />
      </div>
    </header>
  );
};

export default Header;