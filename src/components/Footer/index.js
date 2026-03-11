import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-torreBlue text-white text-center py-12">
            <img src="/imagens/footer.svg" alt="Logo Rodapé" className="w-36 mx-auto mb-4" />
            <p>{t('footer.endereco')}</p>
            <p>{t('footer.fone')}: +55 81 3421-3713</p>
            <p className="mt-4 text-xs opacity-70">{t('footer.direitos')}</p>
        </footer>
    );
}

export default Footer;