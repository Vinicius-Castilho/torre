import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import SEO from '../../components/SEO';
import { useTranslation } from 'react-i18next';

const DesenvolvimentoImobiliario = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  // ==========================================
  // 1. CONFIGURAÇÃO DE ANIMAÇÕES (ScrollReveal)
  // ==========================================
  useEffect(() => {
    ScrollReveal().destroy();
    // Inicializamos o SR
    const sr = ScrollReveal({
      distance: '40px',
      duration: 1000,
      delay: 200,
      reset: false,
      viewFactor: 0.1,
      // Se der erro no script, o conteúdo aparece de qualquer jeito (fail-safe)
      beforeReveal: (el) => {
        el.style.opacity = '1';
      }
    });

    // Verificamos se os elementos existem antes de aplicar para evitar erros no console
    const selectors = [
      { class: '.reveal-hero', config: { origin: 'bottom', delay: 300 } },
      { class: '.reveal-content', config: { interval: 200, origin: 'bottom' } },
      { class: '.reveal-portfolio-title', config: { origin: 'left', delay: 300 } },
      { class: '.reveal-card', config: { origin: 'bottom', delay: 400, distance: '50px' } },
      { class: '.reveal-footer-btn', config: { origin: 'bottom', delay: 200 } }
    ];

    selectors.forEach(item => {
      if (document.querySelector(item.class)) {
        sr.reveal(item.class, item.config);
      }
    });

    return () => sr.destroy();
  }, [pathname]);

  return (
    <>
      <SEO 
        key={pathname}
        title={t('desenvolvimento_imobiliario.seo_title')} 
        description={t('desenvolvimento_imobiliario.seo_desc')}
        path={pathname}
      />
      
      <main id='desenvolvimento-imobiliario' className="bg-white">
        {/* ==========================================
            SEÇÃO HERO
            ========================================== */}
        <section className="relative h-[85vh] min-h-[580px] flex items-center justify-center overflow-hidden bg-torreBlue text-center pt-32 pb-[120px] md:pt-40 md:pb-[140px]">
          
          <div className="absolute inset-0 z-0">
            <img 
              src="/imagens/Atuação/desenvoltimento_imobiliario.jpg" 
              alt="Desenvolvimento Imobiliário Torre" 
              className="w-full h-full object-cover opacity-25 grayscale scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-torreBlue/40 to-torreBlue/20"></div>
          </div>

          {/* HERO - Removida a classe opacity-0 para teste de segurança */}
          <div className="max-w-5xl mx-auto px-6 relative z-30 reveal-hero">
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-10 leading-none mx-auto max-w-4xl tracking-tighter">
              {t('desenvolvimento_imobiliario.hero_title_1')} <span className="text-torreCyan">{t('desenvolvimento_imobiliario.hero_title_2')}</span>
            </h1>
            
            <div className="max-w-2xl mx-auto flex justify-center">
              <p className="text-blue-50 text-xl md:text-2xl leading-relaxed font-light border-l-4 border-torreCyan pl-8 italic opacity-95s">
                {t('desenvolvimento_imobiliario.hero_subtitle')}
              </p>
            </div>
          </div>

          <a href="#conteudo">
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 animate-bounce opacity-50">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>

          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-torreCyan/40 to-transparent z-30"></div>
        </section>

        {/* ==========================================
            SEÇÃO CONTEÚDO TEXTUAL
            ========================================== */}
        <section id="conteudo" className="py-20 md:py-24 px-6 bg-white selection:bg-torreCyan/30 scroll-mt-32">
          <div className="max-w-3xl mx-auto text-justify">
            <div className="space-y-10 text-slate-700 text-lg md:text-xl leading-loose font-light">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-torreBlue first-letter:mr-3 first-letter:float-left">
                {t('desenvolvimento_imobiliario.p1')}
              </p>
              <p>
                {t('desenvolvimento_imobiliario.p2')}
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================
            SEÇÃO PORTFÓLIO (EASY MALL)
            ========================================== */}
        <section className="pt-16 pb-24 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 reveal-portfolio-title text-left">
              <h2 className="text-torreBlue font-bold uppercase text-xs tracking-[0.4em] mb-4">{t('desenvolvimento_imobiliario.portfolio_tag')}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{t('desenvolvimento_imobiliario.portfolio_title')}</h3>
            </div>

            <Link 
              to="/easy-mall" 
              className="reveal-card group relative block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="w-full md:w-1/3 p-12 flex items-center justify-center bg-slate-50 group-hover:bg-white transition-colors duration-500 border-b md:border-b-0 md:border-r border-slate-100">
                  <img 
                    src="/imagens/Atuação/marca-easy-mall.svg" 
                    alt="Easy Mall Logo" 
                    className="w-40 transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                <div className="w-full md:w-2/3 p-10 md:p-16 text-left flex flex-col justify-center">
                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 font-normal">
                    {t('desenvolvimento_imobiliario.easy_mall_desc')}
                  </p>
                  
                  <div className="flex items-center gap-3 text-torreBlue font-bold uppercase text-xs tracking-widest group-hover:gap-5 transition-all duration-300">
                    <span>{t('desenvolvimento_imobiliario.easy_mall_btn')}</span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ==========================================
            BOTÃO DE RETORNO (VOLTAR AO TOPO)
            ========================================== */}
        <section className="py-16 bg-white">
          <div className="flex justify-center reveal-footer-btn">
            <Link 
              to="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-torreBlue group flex items-center gap-4 md:text-slate-400 hover:text-torreBlue transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border md:bg-white bg-torreBlue border-torreBlue md:border-slate-200 flex items-center justify-center group-hover:border-torreBlue group-hover:bg-torreBlue group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:text-slate-400 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <span className="font-bold uppercase text-[11px] tracking-[0.3em]">{t('desenvolvimento_imobiliario.back_to_top')}</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default DesenvolvimentoImobiliario;