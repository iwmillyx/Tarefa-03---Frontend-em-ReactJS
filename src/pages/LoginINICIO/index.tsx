import { Link } from 'react-router-dom';
import { LoginInicioDiv } from "./style";
import LayoutLogoGrande from '../../components/LogoGrande/layoutGrande';

export default function LoginInicio() {
    return(
        <Link to="/login">
            <LoginInicioDiv>
                <LayoutLogoGrande />
            </LoginInicioDiv>
        </Link>    
    );
}