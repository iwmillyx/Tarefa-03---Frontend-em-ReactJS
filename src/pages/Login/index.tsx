import { ImagePatas, LoginDiv, InputContainer, Label, Input, SubmitButton,IconeGatinho, IconeCadeado, ForgotPassword, ForgotPasswordContainer, SubmitButton2 } from "./style";
import Layout from "../../components/BarraStatus/layout";
import patasimage from "../../assets/Mask group.png"
import inputeIconeGatinho from "../../assets/icone gatinho.png"
import inputeIconeCadeado from "../../assets/icone cadeado.png"
import { useNavigate } from "react-router-dom";
import LayoutLogoMedia from "../../components/LogoMedia/layoutMedia";

export default function Login() {
    const navigate = useNavigate();

    const NavegaçãoCadastro = () => {
        navigate('/CadastroComprador')
    }
    return(
        <LoginDiv>
            <Layout />
            <LayoutLogoMedia />
            <ImagePatas src={patasimage} />

            <InputContainer>
                <Label>Login
                    <IconeGatinho src={inputeIconeGatinho} alt="Ícone do login" />
                </Label>
                <Input type="text" placeholder="Digite seu ..." />
            </InputContainer>
            
            <InputContainer>
                <Label>Senha
                    <IconeCadeado src={inputeIconeCadeado} alt="Ícone da senha" />
                </Label>
                <Input type="password" placeholder="Digite seu ..." />
            </InputContainer>

            <ForgotPasswordContainer>
                <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
            </ForgotPasswordContainer>
            
            <SubmitButton>Entrar</SubmitButton>
            <SubmitButton2 onClick={NavegaçãoCadastro}>Cadastrar</SubmitButton2>
        </LoginDiv>
    );
}