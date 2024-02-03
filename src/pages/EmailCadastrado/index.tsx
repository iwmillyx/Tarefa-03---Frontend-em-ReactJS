import Layout from "../../components/BarraStatus/layout";
import { EmailCadastradoDiv, LogoGrande, CachorroImagem, SubmitButton } from "./style";
import { useNavigate } from "react-router-dom";
import Logogrande from "../../assets/logo.png"
import ImageDog from "../../assets/Dog paw-cuate 2.png"

export default function EmailCadastrado() {
    const navigate = useNavigate();

    const EmailCadastrado = () => {
        navigate('/Home')
    }
    return(
        <EmailCadastradoDiv>
            <Layout />
            <LogoGrande src={Logogrande} />
            <CachorroImagem src={ImageDog} />

        <SubmitButton onClick={EmailCadastrado}>Confirme seu E-mail</SubmitButton>


        </EmailCadastradoDiv>
    );
}