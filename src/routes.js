import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Trajetoria from './pages/Trajetoria';
import AtivosFinanceiros from './pages/AtivosFinanceiros';
import DesenvolvimentoImobiliario from './pages/DesenvolvimentoImobiliario';
import EasyMall from './pages/EasyMall';
import GestaoDeCreditos from './pages/GestaoDeCreditos';
import AtuacaoSociocultural from './pages/AtuacaoSociocultural';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Whats from './components/Whats';
import Footer from './components/Footer';
import Erro from './pages/Erro';

function RoutesApp() {
    return (
        <BrowserRouter>
            {/* O ScrollToTop monitora a troca de rotas dentro do BrowserRouter */}
            <ScrollToTop />    
            <Header />
            <Whats />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/trajetoria' element={<Trajetoria />} />
                <Route path='/ativos-financeiros' element={<AtivosFinanceiros />} />
                <Route path='/desenvolvimento-imobiliario' element={<DesenvolvimentoImobiliario />} />
                <Route path='/easy-mall' element={<EasyMall />} />
                <Route path='/gestao-de-creditos' element={<GestaoDeCreditos />} />
                <Route path='/atuacao-sociocultural' element={<AtuacaoSociocultural />} />

                <Route path='*' element={<Erro />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesApp;