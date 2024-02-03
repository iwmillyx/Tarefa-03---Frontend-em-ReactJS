import Layout from "../../components/BarraStatus/layout";
import { HomeDiv, QuadradoAzul, Carrinho, LogoMenor } from "./style";
import Quadrado from "../../assets/Localização.png";
import PequenaLogo from "../../assets/logoPequena.png";
import CarrinhoCompras from "../../assets/Carrinho.png";

export default function HomePage() {
    return(
        <HomeDiv>
            <Layout />
            <QuadradoAzul src={Quadrado} />
            <LogoMenor src={PequenaLogo} />
            <Carrinho src={CarrinhoCompras} />

        </HomeDiv>
    );
}