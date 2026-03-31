import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function PoliticaPrivacidade() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 pt-32"> {/* pt-32 para compensar o Header fixo */}
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-200">
        
        <header className="mb-12 border-b border-slate-100 pb-8 text-center">
          <h1 className="text-4xl font-extrabold text-[#003366] mb-4">
            {t('privacy.title')}
          </h1>
          <p className="text-slate-500 text-lg">
            {t('privacy.intro')}
          </p>
        </header>

        <section className="space-y-12">
          {/* Seção: Coleta de Dados */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h2 className="text-xl font-bold text-[#003366] uppercase tracking-wider">
                {t('privacy.data_collection_title')}
              </h2>
            </div>
            <div className="md:w-2/3 text-slate-600 leading-relaxed">
              {t('privacy.data_collection_text')}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Seção: Cookies */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h2 className="text-xl font-bold text-[#003366] uppercase tracking-wider">
                {t('privacy.cookies_title')}
              </h2>
            </div>
            <div className="md:w-2/3 text-slate-600 leading-relaxed">
              {t('privacy.cookies_text')}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Seção: Direitos */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h2 className="text-xl font-bold text-[#003366] uppercase tracking-wider">
                {t('privacy.rights_title')}
              </h2>
            </div>
            <div className="md:w-2/3 text-slate-600 leading-relaxed">
              {t('privacy.rights_text')}
            </div>
          </div>
        </section>

        <div className="reveal-back-btn mt-24 pt-12 border-t border-slate-100 flex justify-center">
            <Link 
                to="/"
                className="text-torreBlue group flex items-center gap-4 md:text-slate-400 hover:text-torreBlue transition-all duration-300"
            >
                <div className="w-12 h-12 rounded-full border md:bg-white bg-torreBlue border-torreBlue md:border-slate-200 flex items-center justify-center group-hover:border-torreBlue group-hover:bg-torreBlue group-hover:text-white transition-all">
                {/* Seta para a esquerda (Voltar) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:text-slate-400 text-white group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                </div>
                {/* Chave de tradução atualizada para manter o padrão i18n */}
                <span className="font-bold uppercase text-[11px] tracking-[0.3em]">{t('privacy.back_to_home')}</span>
            </Link>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
          <p>{t('footer.direitos')}</p>
        </footer>
      </div>
    </main>
  );
}

export default PoliticaPrivacidade;