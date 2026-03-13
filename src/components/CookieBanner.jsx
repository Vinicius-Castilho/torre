import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies anteriormente
    const consent = localStorage.getItem('torre-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('torre-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-5xl mx-auto bg-[#002D7A] text-white p-4 md:p-6 rounded-2xl shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-base font-light leading-relaxed opacity-90">
            {t('cookies.message')}
          </p>
          <a href="/politica-de-privacidade" className="text-xs text-torreCyan hover:underline">
            {t('cookies.privacy_policy')}
          </a>
        </div>

        <button
          onClick={handleAccept}
          className="whitespace-nowrap bg-white text-[#002D7A] px-8 py-3 rounded-full font-bold text-sm hover:bg-torreCyan hover:text-white transition-all duration-300 shadow-md active:scale-95"
        >
          {t('cookies.accept')}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;