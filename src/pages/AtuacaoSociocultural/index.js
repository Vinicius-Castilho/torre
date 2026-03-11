import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import SEO from '../../components/SEO';
import { useTranslation } from 'react-i18next';

const AtuacaoSociocultural = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  // ==========================================
  // 1. CONFIGURAÇÃO DE ANIMAÇÕES (ScrollReveal)
  // ==========================================
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 1000,
      delay: 200,
      reset: false,
      viewFactor: 0.1
    });

    sr.reveal('.reveal-hero', { origin: 'bottom', delay: 300 });
    sr.reveal('.reveal-text', { origin: 'left', delay: 400 });
    sr.reveal('.reveal-image', { origin: 'right', delay: 500 });
    sr.reveal('.reveal-footer-btn', { origin: 'bottom', delay: 600 });

    return () => sr.destroy();
  }, [pathname]);

  return (
    <>
      <SEO 
        key={pathname}
          title={t("atuacao_sociocultural.seo_title")} 
          description={t("atuacao_sociocultural.seo_desc")}
        path={pathname}
      />

      <main className="bg-white">
        {/* ==========================================
            SEÇÃO HERO
            ========================================== */}
        <section className="relative h-[85vh] min-h-[580px] flex items-center justify-center overflow-hidden bg-torreBlue text-center pt-32 pb-[120px] md:pt-40 md:pb-[140px]">
          
          <div className="absolute inset-0 z-0">
            <img 
              src="/imagens/Atuação/atuacao_sociocultural.jpg" 
              alt="Atuação Sociocultural Torre" 
              className="w-full h-full object-cover opacity-25 grayscale scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-torreBlue/40 to-torreBlue/20"></div>
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-30 reveal-hero">
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-10 leading-none tracking-tighter">
              {t("atuacao_sociocultural.hero_title_1")} <span className="text-torreCyan">{t("atuacao_sociocultural.hero_title_2")}</span>
            </h1>
            
            <div className="max-w-2xl mx-auto flex justify-center">
              <p className="text-blue-50 text-xl md:text-2xl leading-relaxed font-light border-l-4 border-torreCyan pl-8 italic opacity-95">
                {t("atuacao_sociocultural.hero_subtitle")}
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
            SEÇÃO CONTEÚDO (LAYOUT GRID 2 COLUNAS)
            ========================================== */}
        <section id="conteudo" className="py-24 px-6 bg-white text-justify scroll-mt-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              {/* COLUNA TEXTO (TEXTOS ORIGINAIS PRESERVADOS) */}
              <div className="space-y-10 text-slate-700 text-lg md:text-xl leading-loose font-light"> {/* Alterado para font-normal */}
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-torreBlue first-letter:mr-3 first-letter:float-left">
                  {t("atuacao_sociocultural.p1")}
                </p>
                
                <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-torreCyan shadow-sm">
                  <p className="text-torreBlue font-medium italic">
                    {t("atuacao_sociocultural.card_highlight")}
                  </p>
                </div>

                <p>
                  {t("atuacao_sociocultural.p2")}
                </p>
              </div>

              {/* COLUNA IMAGEM */}
              <div className="reveal-image relative group">
                <div className="absolute -inset-4 bg-torreCyan/10 rounded-3xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/imagens/instituto BS.jpg" 
                    alt="Instituto Baptista da Silva" 
                    className="w-full h-auto md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
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
                  <span className="font-bold uppercase text-[11px] tracking-[0.3em]">{t("atuacao_sociocultural.back_to_top")}</span>
                </Link>
              </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AtuacaoSociocultural;