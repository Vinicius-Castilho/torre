import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SEO({ title, description, image, url }) {
  const location = useLocation();

  const siteName = "Torre Participações";
  const defaultDescription =
    "Desenvolvimento imobiliário e gestão de ativos financeiros com visão estratégica.";
  const defaultImage = "https://torre.com.br/imagens/logo-seo.jpg";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : "Torre Participações | Holding com Atuação em Desenvolvimento Imobiliário e Gestão de Ativos";

  const fullDescription = description || defaultDescription;
  const fullUrl = url || `https://torre.com.br${location.pathname}`;
  const fullImage = image || defaultImage;

  useEffect(() => {
    document.title = fullTitle;

    updateMetaTag("description", fullDescription);
    updateMetaProperty("og:title", fullTitle);
    updateMetaProperty("og:description", fullDescription);
    updateMetaProperty("og:url", fullUrl);
    updateMetaProperty("og:image", fullImage);
  }, [location.pathname, title, description]);

  function updateMetaTag(name, content) {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("name", name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  }

  function updateMetaProperty(property, content) {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("property", property);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  }

  return null;
}

export default SEO;