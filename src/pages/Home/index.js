import { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import ScrollReveal from 'scrollreveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SEO from '../../components/SEO';

const Home = () => {
  const form = useRef();
  const { hash } = useLocation();

  // ==========================================
  // 1. LÓGICA DE SCROLL PARA LINKS EXTERNOS
  // ==========================================
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        // Delay de 300ms para garantir que o DOM e ScrollReveal carregaram
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [hash]);

  // ==========================================
  // 2. CONFIGURAÇÃO DE ANIMAÇÕES (ScrollReveal)
  // ==========================================
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 1000,
      delay: 200,
      reset: false
    });

    sr.reveal('#hero', { origin: 'bottom', delay: 400 });
    sr.reveal('#historia-texto', { origin: 'left', delay: 300 });
    sr.reveal('#historia-imagem', { origin: 'right', delay: 500 });
    sr.reveal('#cards > a', { interval: 200, origin: 'bottom', scale: 0.9, distance: '50px' });
    sr.reveal('#form-contato', { origin: 'bottom', delay: 400 });
  }, []);

  // ==========================================
  // 3. LÓGICA DE ENVIO DE E-MAIL (EmailJS)
  // ==========================================

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE,
      process.env.REACT_APP_EMAIL_TEMPLATE,
      form.current,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY
    )
    .then(() => {
        setLoading(false)
        toast.success('Mensagem enviada com sucesso!');
        e.target.reset();
    }, (error) => {
        setLoading(false)
        toast.error('Erro ao enviar: ' + error.text);
    });
  };

  return (
    <>
    
      <SEO
        description="Grupo empresarial com mais de 150 anos de história, atuando em desenvolvimento imobiliário, gestão de ativos financeiros, gestão de créditos e participações estratégicas no Brasil."
      />

      <div className="bg-white">
        {/* Container para notificações Toast */}
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
        {/* ==========================================
            SEÇÃO HERO
            ========================================== */}
        <section id="hero" className="relative h-[85vh] min-h-[580px] flex items-center overflow-hidden bg-[#002D7A]">   {/*min-h-[580px] = Deixar o BG maior*/}
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/imagens/BG.jpg" 
              alt="Vista aérea histórica da Torre em Recife" 
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#002D7A]/60 via-transparent to-[#002D7A]/60"></div>
          </div>

          {/* Hero Content */}
          <div className="max-w-[1440px] mx-auto px-[8%] w-full flex flex-col lg:flex-row items-center justify-between gap-16 z-10 mt-31">
            <div className="max-w-xl text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                Um Grupo com mais de 150 anos de realizações
              </h1>
              <p className="text-xl md:text-2xl text-torreCyan font-light">
                Uma ponte que conecta um legado ao futuro.
              </p>
            </div>
            {/* Scroll Down Arrow */}
            <a href="#historia">
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 animate-bounce opacity-50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </a>
          </div>
        </section>

        {/* ==========================================
            SEÇÃO HISTÓRIA
            ========================================== */}
        <section id="historia" className="py-20 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div id="historia-texto">
              <h2 className="text-3xl font-bold text-torreBlue mb-6">Sobre Nós</h2>
              
              <div className="relative max-h-52 overflow-hidden md:max-h-none md:overflow-visible transition-all duration-500">
                  <p className="text-slate-700 leading-relaxed">
                      A Torre Participações é uma holding de investimentos privada, com foco na criação de valor e na perpetuação do patrimônio.
                  </p>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                      Ao longo de quase dois séculos, o Grupo construiu uma trajetória marcada por investimentos em diferentes áreas, sempre se adaptando às transformações de cada momento e mantendo o olhar para o futuro.
                  </p>
                  {/* Gradiente mobile para texto longo */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent md:hidden pointer-events-none"></div>
              </div>

              <div className="flex justify-center md:justify-start">
                  <Link to="/trajetoria" className="inline-flex items-center mt-8 px-6 py-3 border-2 border-torreBlue rounded-lg font-bold transition-all duration-300 group bg-torreBlue text-white md:bg-transparent md:text-torreBlue hover:bg-torreBlue hover:text-white">
                      Saiba Mais
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12"></path>
                      </svg>
                  </Link>
              </div>
            </div>

            <div id="historia-imagem" className="hidden md:block rounded-xl h-72 shadow-xl overflow-hidden">
                <img src="/imagens/BG.jpg" 
                    alt="Cotonifício da Torre em 1860" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </section>

        {/* ==========================================
            SEÇÃO ATUAÇÃO
            ========================================== */}
        <section id="atuacao" className="py-20 bg-torreGray text-center scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-torreBlue mb-12">Áreas de Atuação</h2>

            <div id="cards" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              
              {/* Card: Ativos Financeiros */}
              <Link to="/ativos-financeiros" className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
                <div className="mb-8 p-5 bg-slate-50 rounded-2xl group-hover:bg-torreBlue/5 transition-colors duration-500">
                  <img src="/imagens/Ativos Financeiros.svg" alt="Ícone Ativos" className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-torreBlue mb-4 tracking-tight leading-snug text-center max-w-[12ch] mx-auto min-h-[3.5rem]">Ativos Financeiros</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">Gestão integrada de ativos do Grupo, com visão de longo prazo.</p>
                <div className="mt-auto inline-flex items-center px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 bg-torreBlue text-white md:bg-slate-100 md:text-torreBlue group-hover:bg-torreBlue group-hover:text-white">
                  Explorar área
                  <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M14 5l7 7-7 7M3 12h18"></path></svg>
                  </span>
                </div>
              </Link>

              {/* Card: Desenvolvimento Imobiliário */}
              <Link to="/desenvolvimento-imobiliario" className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
                <div className="mb-8 p-5 bg-slate-50 rounded-2xl group-hover:bg-torreBlue/5 transition-colors duration-500">
                  <img src="/imagens/Desenvolvimento Imobiliário.svg" alt="Ícone Imobiliário" className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-torreBlue mb-4 tracking-tight leading-snug text-center max-w-[12ch] mx-auto min-h-[3.5rem]">Desenvolvimento Imobiliário</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">Portfólio próprio de terrenos distribuído em diversos estados.</p>
                <div className="mt-auto inline-flex items-center px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 bg-torreBlue text-white md:bg-slate-100 md:text-torreBlue group-hover:bg-torreBlue group-hover:text-white">
                  Explorar área
                  <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M14 5l7 7-7 7M3 12h18"></path></svg>
                  </span>
                </div>
              </Link>

              {/* Card: Gestão de Créditos */}
              <Link to="/gestao-de-creditos" className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
                <div className="mb-8 p-5 bg-slate-50 rounded-2xl group-hover:bg-torreBlue/5 transition-colors duration-500">
                  <img src="/imagens/Gestão de Créditos.svg" alt="Ícone Créditos" className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-torreBlue mb-4 tracking-tight leading-snug text-center max-w-[12ch] mx-auto min-h-[3.5rem]">Gestão de Créditos</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">Carteira de crédito própria (NPL), com foco em recuperação de ativos.</p>
                <div className="mt-auto inline-flex items-center px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 bg-torreBlue text-white md:bg-slate-100 md:text-torreBlue group-hover:bg-torreBlue group-hover:text-white">
                  Explorar área
                  <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M14 5l7 7-7 7M3 12h18"></path></svg>
                  </span>
                </div>
              </Link>

              <Link to="/atuacao-sociocultural" className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
                <div className="mb-8 p-5 bg-slate-50 rounded-2xl group-hover:bg-torreBlue/5 transition-colors duration-500">
                  <img src="/imagens/atuacao-sociocultural.svg" alt="Ícone Créditos" className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-torreBlue mb-4 tracking-tight leading-snug text-center max-w-[12ch] mx-auto min-h-[3.5rem]">Atuação Sociocultural</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">Valorização da memória e fomento ao empreendedorismo via Instituto Baptista da Silva.</p>
                <div className="mt-auto inline-flex items-center px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 bg-torreBlue text-white md:bg-slate-100 md:text-torreBlue group-hover:bg-torreBlue group-hover:text-white">
                  Explorar área
                  <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M14 5l7 7-7 7M3 12h18"></path></svg>
                  </span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ==========================================
            SEÇÃO CONTATO
            ========================================== */}
        <section id="contato" className="py-20 scroll-mt-24 text-left">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="border-l-4 border-torreCyan pl-6 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-torreBlue mb-6">Fale Conosco</h3>
              <p className="mb-8 text-slate-700 leading-relaxed max-w-md">
                Estamos à disposição para esclarecer dúvidas e apresentar o Grupo Torre Participações.
              </p>

              <div className="space-y-6">
                {/* E-mail */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-all bg-torreBlue text-white md:bg-slate-50 md:text-torreBlue group-hover:bg-torreBlue group-hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">E-mail</p>
                    <a href="mailto:contato@torre.com.br" className="text-torreBlue font-semibold hover:text-torreCyan transition-colors">contato@torre.com.br</a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-all bg-[#25D366] text-white md:bg-slate-50 md:text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.632 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Whatsapp</p>
                    <a href="https://wa.me/5581988739689" target="_blank" rel="noreferrer" className="text-torreBlue font-semibold hover:text-torreCyan transition-colors">+55 81 9 8873-9689</a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="pt-6">
                  <a href="https://www.linkedin.com/company/torre-participações" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-all bg-torreBlue text-white md:bg-slate-50 md:text-torreBlue group-hover:bg-torreBlue group-hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">LinkedIn</p>
                      <span className="text-torreBlue font-semibold group-hover:text-torreCyan transition-colors">Torre Participações</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} id="form-contato" className="bg-white p-10 rounded-2xl shadow space-y-4 border border-slate-100">
              <div>
                <label className="block font-semibold text-sm text-torreBlue mb-1">Nome</label>
                <input name="name" placeholder="Ex: João Silva" required className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 outline-none focus:border-torreBlue focus:ring-4 focus:ring-torreBlue/20" />
              </div>
              <div>
                <label className="block font-semibold text-sm text-torreBlue mb-1">Email</label>
                <input type="email" name="email" placeholder="Ex: contato@empresa.com.br" required className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 outline-none focus:border-torreBlue focus:ring-4 focus:ring-torreBlue/20" />
              </div>
              <div>
                <label className="block font-semibold text-sm text-torreBlue mb-1">Mensagem</label>
                <textarea name="message" rows="4" placeholder="Como podemos ajudar?" required className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 outline-none focus:border-torreBlue focus:ring-4 focus:ring-torreBlue/20"></textarea>
              </div>

              <button type="submit" disabled={loading}
              className={`w-full py-3 rounded-lg font-bold transition shadow-md
                ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-torreBlue text-white hover:bg-blue-800"
                  }`}
                >
                {loading ? "Enviando..." : "Enviar"}
              </button>

            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;