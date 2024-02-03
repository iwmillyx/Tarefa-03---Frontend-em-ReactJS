import Layout from "../../components/BarraStatus/layout";
import LayoutLogoMedia from "../../components/LogoMedia/layoutMedia";
import { CompradorCadastroDiv, InputContainer, Input, IconeCadeado, IconePessoa, IconeArroba, IconeEmail, IconeCadeado2, CheckboxLabel, Checkbox, SubmitButton } from "./style";
import inputeIconeCadeado from "../../assets/icone cadeado.png"
import inputePessoa from "../../assets/icone_pessoa.png"
import inputeCPF from "../../assets/icone_ativar.png"
import inputeEmail from "../../assets/icone_@.png"
import inputeIconeCadeado2 from "../../assets/icone cadeado.png"
import { useNavigate } from "react-router-dom";

export default function CadastroComprador() {
    const navigate = useNavigate();

    const NavegaçãoEmail = () => {
        navigate('/CadastrarEmail')
    }
    return(
            <CompradorCadastroDiv>
                <Layout />
                <LayoutLogoMedia />

                <InputContainer>
                    <IconePessoa src={inputePessoa} alt="Ícone do login" />
                <Input type="text" placeholder="Nome ..." />
            </InputContainer>

            <InputContainer>
                    <IconeArroba src={inputeCPF} alt="Ícone do CPF" />
                <Input type="text" placeholder="CPF ..." />
            </InputContainer>
            
            <InputContainer>
                    <IconeEmail src={inputeEmail} alt="Ícone do email" />
                <Input type="password" placeholder="E-mail..." />
            </InputContainer>
            
            <InputContainer>
                    <IconeCadeado src={inputeIconeCadeado} alt="Ícone da senha" />
                <Input type="password" placeholder="Senha ..." />
            </InputContainer>
            
            <InputContainer>
                    <IconeCadeado2 src={inputeIconeCadeado2} alt="Ícone da senha" />
                <Input type="password" placeholder="Confirmar senha ..." />
            </InputContainer>

            <CheckboxLabel>
                    <Checkbox type="checkbox" />
                    Concordo com os termos
                </CheckboxLabel>

                <SubmitButton onClick={NavegaçãoEmail}>Entrar</SubmitButton>

            </CompradorCadastroDiv>
    );
}