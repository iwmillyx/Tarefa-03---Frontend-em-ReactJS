import Layout from "../../components/BarraStatus/layout";
import LayoutLogoGrande from "../../components/LogoGrande/layoutGrande";
import { CadastroEmailDiv, ImageAstrounat, SubmitButton, LogoGrande } from "./style";
import GatoAstronauta from "../../assets/Cat astronaut.png"
import { useNavigate } from "react-router-dom";
import Logogrande from "../../assets/logo.png"

export default function CadastroEmail() {
    const navigate = useNavigate();

    const NavegaçãoEmailCadastrado = () => {
        navigate('/EmailCadastrado')
    }
    return(
        <CadastroEmailDiv>
            <Layout />

            <LogoGrande src={Logogrande} />


            <ImageAstrounat src={GatoAstronauta} />

            <SubmitButton onClick={NavegaçãoEmailCadastrado}>Confirme seu E-mail</SubmitButton>

        </CadastroEmailDiv>
    );
}