import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import SEO from '../../components/SEO';
import { useTranslation } from 'react-i18next';

const AtivosFinanceiros = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  // ==========================================
  // 1. ANIMAÇÕES (ScrollReveal) - Revisado
  // ==========================================
  useEffect(() => {
      ScrollReveal().destroy();

    const sr = ScrollReveal({
      
      distance: '30px', // Reduzi um pouco a distância para ser mais fluido no mobile
      duration: 1000,
      delay: 200,
      reset: false // Importante: Mantém o conteúdo visível após a primeira animação
    });

    // Anima o Hero
    sr.reveal('.hero-content', { origin: 'bottom', delay: 300 });

    // Anima os parágrafos do conteúdo de forma sequencial (interval)
    sr.reveal('#conteudo-principal p', { 
      interval: 200, 
      origin: 'bottom' 
    });

    // Anima o Card de destaque vindo da esquerda (como no seu HTML original)
    sr.reveal('.destaque-card', { 
      origin: 'left', 
      delay: 400,
      distance: '50px'
    });

    // Anima o botão de voltar no final
    sr.reveal('.btn-voltar', { 
      origin: 'bottom', 
      delay: 500 
    });

    return () => sr.destroy();
  }, [pathname]);

  return (
    <>
      <SEO 
        key={pathname}
        title={t('ativos_financeiros.seo_title')}
        description={t('ativos_financeiros.seo_desc')}
        path={pathname}
      />

      <main className="bg-white">
        {/* ==========================================
            SEÇÃO HERO - ATIVOS FINANCEIROS
            ========================================== */}
        <section className="relative h-[85vh] min-h-[580px] flex items-center justify-center overflow-hidden bg-torreBlue text-center pt-32 pb-[120px] md:pt-40 md:pb-[140px]">
          
          {/* Background - Caminho public corrigido */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/imagens/Atuação/ativos_financeiros.jpg" 
              alt="Ativos Financeiros Torre" 
              className="w-full h-full object-cover opacity-25 grayscale scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-torreBlue/40 to-torreBlue/20"></div>
          </div>

          {/* Hero Content */}
          <div className="max-w-5xl mx-auto px-6 relative z-30 hero-content">
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-10 leading-none mx-auto max-w-4xl tracking-tighter">
              {t('ativos_financeiros.hero_title_1')} <span className="text-torreCyan">{t('ativos_financeiros.hero_title_2')}</span>
            </h1>
            
            <div className="max-w-2xl mx-auto flex justify-center">
              <p className=" text-blue-50 text-xl md:text-2xl leading-relaxed font-light border-l-4 border-torreCyan pl-8 italic opacity-95">
                {t('ativos_financeiros.seo_desc')}
              </p>
            </div>
          </div>

          {/* Botão para descer */}
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
            SEÇÃO CONTEÚDO
            ========================================== */}
        <section id="conteudo" className="py-20 px-6 bg-white scroll-mt-32">
          <div className="max-w-3xl mx-auto text-justify">
            <div id="conteudo-principal" className="space-y-10 text-slate-700 text-lg md:text-xl leading-loose font-light">
              
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-torreBlue first-letter:mr-3 first-letter:float-left">
                {t('ativos_financeiros.p1')}
              </p>
              
              {/* <p>
                A gestão parte de uma visão consolidada do portfólio para estabelecer critérios de alocação, liquidez e diversificação, conectando decisões táticas ao planejamento de longo prazo.
              </p> */}
              
              {/* Adicionada a classe destaque-card para o Reveal funcionar aqui */}
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-torreCyan shadow-sm">
                <p className="text-torreBlue font-medium italic">
                {t('ativos_financeiros.card_highlight')}
                </p>
              </div>

              <p>
                {t('ativos_financeiros.p2')}
              </p>
            </div>

            {/* Botão Voltar - Classe btn-voltar adicionada */}
            <div className="reveal-back-btn mt-24 pt-12 border-t border-slate-100 flex justify-center">
              <Link 
                to="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-torreBlue group flex items-center gap-4 md:text-slate-400 hover:text-torreBlue transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border md:bg-white bg-torreBlue border-torreBlue md:border-slate-200 flex items-center justify-center group-hover:border-torreBlue group-hover:bg-torreBlue group-hover:text-white transition-all">
                  {/* SVG Alterado para seta para cima */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:text-slate-400 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <span className="font-bold uppercase text-[11px] tracking-[0.3em]">{t('ativos_financeiros.back_to_top')}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AtivosFinanceiros;