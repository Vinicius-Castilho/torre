import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

const EasyMall = () => {
  useEffect(() => {
    // Configuração do ScrollReveal idêntica ao 
    ScrollReveal().destroy();
    const sr = ScrollReveal({
      distance: '30px',
      duration: 1000,
      delay: 200,
      reset: false 
    });

    sr.reveal('.reveal-span', { origin: 'bottom', delay: 300 });
    sr.reveal('.reveal-h1', { origin: 'bottom', delay: 500, distance: '40px' });
    sr.reveal('.reveal-p-hero', { origin: 'left', delay: 800, distance: '20px' });

    sr.reveal('.reveal-text p', { 
      origin: 'bottom', 
      interval: 250, 
      distance: '20px' 
    });

    sr.reveal('.reveal-image', { 
      origin: 'bottom', 
      delay: 500, 
      distance: '40px',
      scale: 0.95 
    });

    sr.reveal('.reveal-footer-btn', { 
      origin: 'bottom', 
      delay: 600,
      distance: '10px'
    });
  }, []);

  return (
    <div className="bg-white">
      {/* HEADER */}
      <main>
        {/* SEÇÃO HERO */}
        <section className="relative h-[85vh] min-h-[580px] flex items-center overflow-hidden bg-[#002D7A] text-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/imagens/EasyMall/bg-easy.jpg" 
              alt="Easy Mall Background" 
              className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_30%] opacity-40 grayscale brightness-[0.4] contrast-[1.1] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-torreBlue/20 to-torreBlue/60"></div>
          </div>

          <div 
            className="absolute inset-0 opacity-10 z-10 mix-blend-overlay pointer-events-none" 
            style={{ backgroundImage: "url('/imagens/bg-pattern.svg')", backgroundRepeat: 'repeat' }}
          ></div>

          <div className="max-w-5xl mx-auto px-6 relative z-30 pt-20">
            <h1 className="reveal-h1 text-5xl md:text-8xl font-bold text-white mb-10 leading-none mx-auto max-w-4xl tracking-tighter">
              Easy <span className="text-torreCyan">Mall</span>
            </h1>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-center reveal-p-hero text-blue-50 text-xl md:text-2xl leading-relaxed font-light border-l-4 border-torreCyan pl-8 italic opacity-95 text-left">
                Praticidade que melhora a rotina do bairro.
              </p>
            </div>
          </div>

          <a href="#conteudo" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 animate-bounce opacity-50 hidden md:block">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-20 z-20"></div>
        </section>

        {/* SEÇÃO CONTEÚDO */}
        <section id="conteudo" className="py-24 px-6 bg-white text-justify scroll-mt-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              {/* Coluna de Texto com ajuste de peso da fonte para melhor leitura */}
              <div className="space-y-10 text-slate-700 text-lg md:text-xl leading-loose font-light"> {/* Alterado para font-normal */}
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-torreBlue first-letter:mr-3 first-letter:float-left">
                  O Easy Mall é um empreendimento da Torre Participações pensado para apoiar o dia a dia de quem vive e circula no bairro da Torre, em Recife, PE.
                </p>
                <p>
                  Com um conceito próximo, simples e funcional, o Easy Mall nasce para oferecer uma experiência mais fluida: menos deslocamento, mais conveniência e mais tempo para o que importa.
                </p>
                <p>
                  A proposta é ser um ponto de referência do bairro — um lugar que se integra ao ritmo local, facilita a rotina e contribui para uma dinâmica urbana mais prática e leve.
                </p>
                
                {/* Bloco de citação/destaque visual */}
                <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-torreCyan shadow-sm">
                  <p className="text-base text-torreBlue font-medium italic">
                    O Easy Mall reforça o compromisso da Torre Participações em reunir proximidade, conveniência e eficiência em um único endereço.
                  </p>
                </div>

                {/* Parágrafo de Contato com links destacados */}
                <p className="text-slate-700 text-lg leading-relaxed font-normal border-t border-slate-100 pt-6">
                  Caso tenha interesse em realizar a locação de um espaço para seu negócio, entre em contato com a LMS Empreendimentos através do <span className='text-torreBlue font-bold'>+55 81 9 9726 1111</span> ou 
                  <a 
                    href="https://wa.me/5581997261111?text=Olá,%20tenho%20interesse%20na%20locação%20de%20um%20espaço%20no%20Easy%20Mall." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-torreBlue font-bold hover:text-torreCyan transition-all duration-300 ml-1 underline decoration-torreCyan/30 underline-offset-4"
                  >
                    clique aqui.
                  </a>
                </p>
              </div>

                            {/* Coluna de Imagem */}
              <div className="reveal-image relative group">
                <div className="absolute -inset-4 bg-torreCyan/10 rounded-3xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/imagens/EasyMall/página Easy Mall.jpg" 
                    alt="Empreendimento Easy Mall Torre"
                    className="w-full h-auto md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* BOTÃO VOLTAR */}
        <section className="py-20 bg-white">
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
                {/* 3. Seta alterada: trocamos o 'd' do path para apontar para cima 
                */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:text-slate-400 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <span className="font-bold uppercase text-[11px] tracking-[0.3em]">Voltar ao Topo</span>
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
};

export default EasyMall;