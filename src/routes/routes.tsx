import { BrowserRouter as Router, Route, Routes as AppRoutes } from 'react-router-dom';
import LoginInicio from '../pages/LoginINICIO';
import LayoutLogoGrande from '../components/LogoGrande/layoutGrande';
import Login from '../pages/Login';
import Layout from '../components/BarraStatus/layout';
import CadastroComprador from '../pages/CadastroComprador';
import CadastroEmail from '../pages/CadastrarEmail';
import EmailCadastrado from "../pages/EmailCadastrado";
import HomePage from '../pages/Home';

export default function Routes() {
    return (
        <Router>
            <AppRoutes>
                <Route path="/login" element={<Login />} />
                <Route path="/layout" element={<Layout />} />
                <Route path="/emailcadastrado" element={<EmailCadastrado />} />
                <Route path="/Home" element={<HomePage />} />
                <Route path="/cadastraremail" element={<CadastroEmail />} />
                <Route path="/cadastrocomprador" element={<CadastroComprador />} />
                <Route path="/layoutlogogrande" element={<LayoutLogoGrande />} />
                <Route path="/" element={<LoginInicio />} />
            </AppRoutes>
        </Router>
    );
}
