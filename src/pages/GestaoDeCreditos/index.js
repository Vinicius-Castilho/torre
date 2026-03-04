import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import SEO from '../../components/SEO';

const GestaoCreditos = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    ScrollReveal().destroy();
    const sr = ScrollReveal({
      distance: '30px',
      duration: 1000,
      delay: 200,
      reset: false
    });

    // Animações do Hero
    sr.reveal('.reveal-h1', { origin: 'bottom', delay: 300 });
    sr.reveal('.reveal-p-hero', { origin: 'left', delay: 500, distance: '20px' });

    // Animações do Conteúdo
    sr.reveal('.reveal-text p', { 
      origin: 'bottom', 
      interval: 200, 
      distance: '20px' 
    });

    sr.reveal('.reveal-box', { 
      origin: 'bottom', 
      delay: 400,
      scale: 0.95
    });

    sr.reveal('.reveal-back-btn', { 
      origin: 'bottom', 
      delay: 500
    });
  }, []);

  return (
    <>
      <SEO 
        key={pathname}
        title="Gestão de Créditos" 
        description="Acompanhamento contínuo dos ativos com visão de longo prazo."
        path={pathname}
      />
      <div className="bg-white">
        <main>
          {/* SEÇÃO HERO */}
          <section className="relative h-[85vh] min-h-[580px] flex items-center justify-center overflow-hidden bg-torreBlue text-center pt-44 pb-32 md:pt-52 md:pb-40">
            
            <div className="absolute inset-0 z-0">
              <img 
                src="/imagens/Atuação/gestao_creditos.jpg" 
                alt="Gestão de Créditos Torre" 
                className="w-full h-full object-cover opacity-25 grayscale scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-torreBlue/40 to-torreBlue/20"></div>
            </div>

            {/* BACKGROUND PATTERN - Fix para evitar erro de compilação */}
            <div 
              className="absolute inset-0 opacity-10 z-10 pointer-events-none" 
              style={{ backgroundImage: "url('/imagens/bg-pattern.svg')", backgroundRepeat: 'repeat' }}
            ></div>

            <div className="max-w-5xl mx-auto px-6 relative z-30">
              <h1 className="reveal-h1 text-5xl md:text-8xl font-bold text-white mb-10 leading-none mx-auto max-w-4xl tracking-tighter">
                Gestão de <span className="text-torreCyan">Créditos</span>
              </h1>
              
              <div className="max-w-2xl mx-auto flex justify-center">
                <p className="reveal-p-hero text-blue-50 text-xl md:text-2xl leading-relaxed font-light border-l-4 border-torreCyan pl-8 italic opacity-95 text-left">
                  Acompanhamento contínuo dos ativos  com visão de longo prazo.
                </p>
              </div>
            </div>

            <a href="#conteudo">
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 animate-bounce opacity-50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </a>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-torreCyan/40 to-transparent z-30"></div>
          </section>

          {/* SEÇÃO CONTEÚDO */}
          <section id="conteudo" className="py-28 px-6 bg-white selection:bg-torreCyan/30 scroll-mt-32">
            <div className="max-w-3xl mx-auto text-justify">
              <div className="space-y-10 text-slate-700 text-lg md:text-xl leading-loose font-light">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-torreBlue first-letter:mr-3 first-letter:float-left">
                  Na frente de Gestão de Crédito NPL (Non-Performing Loans), a Torre realiza a administração de carteira própria, atuando de forma ativa para estruturar estratégias e conduzir cada ativo com foco em recuperação, eficiência e retorno sustentável, sempre com visão de longo prazo e pragmatismo na execução.
                </p>
              </div>

              {/* BOTÃO VOLTAR */}
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
                  <span className="font-bold uppercase text-[11px] tracking-[0.3em]">Voltar ao Topo</span>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GestaoCreditos;