import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import SEO from '../../components/SEO';
import { useTranslation } from 'react-i18next';


const Trajetoria = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 1000,
      delay: 200,
      reset: false
    });

    sr.reveal('.hero-content', { origin: 'bottom', delay: 300 });
    sr.reveal('article', { interval: 300, origin: 'bottom', distance: '50px' });
    sr.reveal('blockquote', { origin: 'left', delay: 400 });
    sr.reveal('.reveal-footer-btn', { origin: 'bottom', delay: 500 });

  }, []);

  

  return (
    <>

      <SEO
        title={t('trajetoria.seo_title')}
        description={t('trajetoria.seo_desc')}
      />
    
      <main className="bg-white">
          {/* ==========================================
              SEÇÃO HERO - TRAJETÓRIA (Corrigida)
              ========================================== */}
          <section id='#' className="relative h-[85vh] min-h-[580px] flex items-center justify-center overflow-hidden bg-torreBlue text-center pt-32 pb-[120px] md:pt-40 md:pb-[140px]">
          
          {/* Removida a div que causava o erro do bg-pattern.svg */}
          <div className="absolute inset-0 bg-black/20 z-10"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-20 hero-content">
              <span className="inline-block px-4 py-2 bg-torreCyan/20 text-torreCyan rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8 border border-torreCyan/30">
              {t('trajetoria.hero_badge')}
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight mx-auto max-w-4xl">
              {t('trajetoria.hero_title_1')} <span className="text-torreCyan">{t('trajetoria.hero_title_2')}</span> {t('trajetoria.hero_title_3')}
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-6 text-blue-50 text-lg md:text-xl leading-relaxed opacity-90">
              <p>
                  {t('trajetoria.hero_subtitle')}
              </p>
              </div>
          </div>

          {/* Seta de Scroll animada */}
          <a href="#time_line">
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 animate-bounce opacity-50">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent opacity-50"></div>
          </a>
        </section>

        {/* ==========================================
            SEÇÃO TIMELINE (História do Grupo)
            ========================================== */}
        <section id="time_line" className="py-24 px-6 bg-slate-50 scroll-mt-32">
          <div className="max-w-4xl mx-auto relative">
            {/* Linha Central da Timeline */}
            <div className="absolute left-4 md:left-1/2 top-0 h-[calc(100%-120px)] w-[1px] bg-slate-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-24">
              {/* EVENTO 1860 */}
              <article className="relative">
                <div className="flex absolute left-4 md:left-1/2 -top-10 transform md:-translate-x-1/2 flex-col items-center">
                  <time className="bg-white px-4 py-1 text-torreBlue font-black text-2xl border border-slate-200 rounded-full shadow-sm">1850</time>
                </div>
                
                <div className="space-y-12 pt-12 md:pt-0">
                  <div className="relative pl-12 md:pl-0 md:w-1/2 md:ml-auto md:pl-16 group text-left">
                    <div className="absolute left-[-5px] md:left-[-6px] top-2 w-3 h-3 bg-torreCyan rounded-full border-2 border-white ring-4 ring-slate-50 transition-all group-hover:scale-125"></div>
                    <h3 className="text-xl font-bold text-slate-800">{t('trajetoria.timeline.t1850.event1_title')}</h3>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">{t('trajetoria.timeline.t1850.event1_desc')}</p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-0 md:w-1/2 md:mr-auto md:pr-16 md:text-right group text-left md:text-right">
                    <div className="absolute left-[-5px] md:left-auto md:right-[-6px] top-2 w-3 h-3 bg-slate-300 rounded-full border-2 border-white ring-4 ring-slate-50 group-hover:bg-torreCyan transition-colors"></div>
                    <h3 className="text-xl font-bold text-slate-800">{t('trajetoria.timeline.t1850.event2_title')}</h3>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">{t('trajetoria.timeline.t1850.event2_desc')}</p>
                  </div>

                  <div className="relative pl-12 md:pl-0 md:w-1/2 md:ml-auto md:pl-16 group text-left">
                    <div className="absolute left-[-5px] md:left-[-6px] top-2 w-3 h-3 bg-slate-300 rounded-full border-2 border-white ring-4 ring-slate-50 group-hover:bg-torreCyan transition-colors"></div>
                    <h3 className="text-xl font-bold text-slate-800">{t('trajetoria.timeline.t1850.event3_title')}</h3>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">{t('trajetoria.timeline.t1850.event3_desc')}</p>
                  </div>
                </div>
              </article>

              {/* EVENTO 1942 */}
              <article className="relative pt-10">
                <div className="flex absolute left-4 md:left-1/2 -top-4 transform md:-translate-x-1/2 flex-col items-center">
                  <time className="bg-white px-4 py-1 text-torreBlue font-black text-2xl border border-slate-200 rounded-full shadow-sm">1942</time>
                </div>
                
                <div className="space-y-12 pt-16 md:pt-0">
                  <div className="relative pl-12 md:pl-0 md:w-1/2 md:mr-auto md:pr-16 md:text-right group text-left md:text-right">
                    <div className="absolute left-[-5px] md:left-auto md:right-[-6px] top-2 w-3 h-3 bg-torreCyan rounded-full border-2 border-white ring-4 ring-slate-50"></div>
                    <h3 className="text-xl font-bold text-slate-800">{t('trajetoria.timeline.t1942.event1_title')}</h3>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">{t('trajetoria.timeline.t1942.event1_desc')}</p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-0 md:w-1/2 md:ml-auto md:pl-16 group text-left">
                    <div className="absolute left-[-5px] md:left-[-6px] top-2 w-3 h-3 bg-slate-300 rounded-full border-2 border-white ring-4 ring-slate-50 group-hover:bg-torreCyan transition-colors"></div>
                    <h3 className="text-xl font-bold text-slate-800">{t('trajetoria.timeline.t1942.event2_title')}</h3>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">{t('trajetoria.timeline.t1942.event2_desc')}</p>
                  </div>
                  
                <div className="relative pl-12 md:pl-0 md:w-1/2 md:mr-auto md:pr-16 md:text-right group">
                      <div className="absolute left-[-5px] md:left-auto md:right-[-6px] top-2 w-3 h-3 bg-slate-300 rounded-full border-2 border-white ring-4 ring-slate-50 group-hover:bg-torreCyan transition-colors"></div>
                      <h3 className="text-xl font-bold text-slate-800">{t('trajetoria.timeline.t1942.event3_title')}</h3>
                      <p className="text-slate-500 mt-2 text-sm leading-relaxed">{t('trajetoria.timeline.t1942.event3_desc')}</p>
                  </div>
                          
                  <div className="relative pl-12 md:pl-0 md:w-1/2 md:ml-auto md:pl-16 group">
                      <div className="absolute left-[-5px] md:left-[-6px] top-2 w-3 h-3 bg-slate-300 rounded-full border-2 border-white ring-4 ring-slate-50 group-hover:bg-torreCyan transition-colors"></div>
                      <h3 className="text-xl font-bold text-slate-800">{t('trajetoria.timeline.t1942.event4_title')}</h3>
                      <p className="text-slate-500 mt-2 text-sm leading-relaxed">{t('trajetoria.timeline.t1942.event4_desc')}</p>
                  </div>
                  
                  
                </div>
              </article>

              <article className="relative pt-10">
                <div className="flex absolute left-4 md:left-1/2 -top-4 transform md:-translate-x-1/2 flex-col items-center">
                  <time className="bg-white px-4 py-1 text-torreBlue font-black text-2xl border border-slate-200 rounded-full shadow-sm">2022</time>
                </div>
                
                <div className="space-y-12 pt-16 md:pt-0">
                  <div className="relative pl-12 md:pl-0 md:w-1/2 md:mr-auto md:pr-16 md:text-right group text-left md:text-right">
                    <div className="absolute left-[-5px] md:left-auto md:right-[-6px] top-2 w-3 h-3 bg-torreCyan rounded-full border-2 border-white ring-4 ring-slate-50"></div>
                    <h3 className="text-xl font-bold text-slate-800">{t('trajetoria.timeline.t2022.event1_title')}</h3>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">{t('trajetoria.timeline.t2022.event1_desc')}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>


        <section className="py-20 bg-white border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-16 italic">
              {t('trajetoria.quote')}
            </blockquote>

            {/* Botão integrado com margem controlada */}
            <div className="reveal-footer-btn flex justify-center pt-8 border-t border-slate-50">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-torreBlue group flex items-center gap-4 md:text-slate-400 hover:text-torreBlue transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border md:bg-white bg-torreBlue border-torreBlue md:border-slate-200 flex items-center justify-center group-hover:border-torreBlue group-hover:bg-torreBlue group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:text-slate-400 text-white group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <span className="font-bold uppercase text-[11px] tracking-[0.3em]">
                  {t('desenvolvimento_imobiliario.back_to_top')}
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
    );
  };
export default Trajetoria;