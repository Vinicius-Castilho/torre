import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../../components/SEO';

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <>
      <SEO 
        key={pathname}
        title="Página não encontrada" 
        description="O conteúdo que você busca não está disponível ou o endereço foi digitado incorretamente."
        path={pathname}
      />
      
      {/* 1. pt-[160px]: Garante que o conteúdo comece abaixo do Header em qualquer tela.
          2. min-h-[calc(100vh-300px)]: Tenta manter o conteúdo centralizado no espaço útil entre Header e Footer.
          3. flex flex-col items-center justify-center: Centralização vertical e horizontal.
      */}
      <main className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center bg-white px-6 pt-[160px] pb-[100px]">
        
        <div className="max-w-2xl w-full text-center relative">
          
          {/* O "404" de fundo (mais sutil para não poluir telas pequenas) */}
          <h1 className="text-[8rem] md:text-[15rem] font-black text-slate-50 absolute inset-0 flex items-center justify-center -z-10 select-none opacity-60">
            404
          </h1>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-torreBlue mb-4 tracking-tight">
              Página não encontrada
            </h2>
            
            <p className="text-slate-500 text-lg md:text-xl font-normal mb-10 max-w-md mx-auto leading-relaxed">
              O conteúdo que você busca não está disponível ou o endereço foi digitado incorretamente.
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 bg-[#002D7A] text-white px-10 py-4 rounded-full font-bold hover:bg-blue-900 transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para o Início
            </Link>
          </div>

        </div>
      </main>
    </>
  );
};

export default NotFound;