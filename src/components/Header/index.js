import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const transparentPages = [
    '/', '/trajetoria', '/ativos-financeiros', '/desenvolvimento-imobiliario', 
    '/atuacao-sociocultural', '/gestao-de-creditos', '/easy-mall'
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const isTransparentRoute = transparentPages.includes(location.pathname);
  const useSolidStyle = !isTransparentRoute || isScrolled;

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

  // Componente interno para as bandeiras para evitar repetição
  const LanguageSwitcher = ({ mobile = false }) => (
    <div className={`flex items-center gap-3 ${mobile ? 'mr-4' : 'border-l border-slate-200/20 pl-8'}`}>
      <button 
        onClick={() => changeLanguage('pt')}
        aria-label={t('header.aria_lang_pt')} 
        className={`transition-all duration-300 hover:scale-110 ${
          i18n.language.startsWith('pt') 
          ? 'ring-2 ring-torreCyan ring-offset-2 rounded-full scale-105 opacity-100' 
          : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
        }`}
      >
        <img 
          src="/imagens/flags/br.svg" 
          alt="PT" 
          className="w-7 h-7 rounded-full object-cover shadow-sm" 
        />
      </button>

      <button 
        onClick={() => changeLanguage('en')}
        aria-label={t('header.aria_lang_en')} 
        className={`transition-all duration-300 hover:scale-110 ${
          i18n.language.startsWith('en') 
          ? 'ring-2 ring-torreCyan ring-offset-2 rounded-full scale-105 opacity-100' 
          : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
        }`}
      >
        <img 
          src="/imagens/flags/us.svg" 
          alt="EN" 
          className="w-7 h-7 rounded-full object-cover shadow-sm" 
        />
      </button>
    </div>
  );

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${useSolidStyle ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" onClick={handleLogoClick}>
          <img 
            src={useSolidStyle ? "/imagens/LOGO.svg" : "/imagens/LOGO_BRANCA.svg"} 
            width="150" 
            height="50"
            alt="Logo Torre" 
            className="w-32 md:w-40 transition-all"
          />
        </Link>

        <div className="flex items-center">
          {/* Desktop Nav */}
          <nav className={`hidden md:flex gap-8 text-sm font-semibold uppercase mr-8 ${useSolidStyle ? 'text-sky-900' : 'text-white'}`}>
            <Link to="/#historia" onClick={(e) => handleNavClick(e, 'historia')} className="relative group transition hover:text-sky-400">
              {t('header.quem_somos')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/#atuacao" onClick={(e) => handleNavClick(e, 'atuacao')} className="relative group transition hover:text-sky-400">
              {t('header.atuacao')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/#contato" onClick={(e) => handleNavClick(e, 'contato')} className="relative group transition hover:text-sky-400">
              {t('header.contato')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Seletor Desktop */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Seletor Mobile (Visível fora do menu hambúrguer) */}
          <div className="md:hidden">
            <LanguageSwitcher mobile={true} />
          </div>

          {/* Botão Menu Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t('header.aria_menu')}
            className={`md:hidden focus:outline-none cursor-pointer z-[70] ${isMenuOpen || !useSolidStyle ? 'text-white' : 'text-sky-900'}`}
          >
            <svg className="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#002D7A]/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center gap-8">
          <Link to="/#historia" onClick={(e) => handleNavClick(e, 'historia')} className="text-3xl font-bold text-white hover:text-sky-400">
            {t('header.quem_somos')}
          </Link>
          <Link to="/#atuacao" onClick={(e) => handleNavClick(e, 'atuacao')} className="text-3xl font-bold text-white hover:text-sky-400">
            {t('header.atuacao')}
          </Link>
          <Link to="/#contato" onClick={(e) => handleNavClick(e, 'contato')} className="text-3xl font-bold text-white hover:text-sky-400">
            {t('header.contato')}
          </Link>
        </nav>

        <img src="/imagens/logo_hero.svg" className="w-24 opacity-20 mt-10" alt="Torre" />
      </div>
    </header>
  );
};

export default Header;