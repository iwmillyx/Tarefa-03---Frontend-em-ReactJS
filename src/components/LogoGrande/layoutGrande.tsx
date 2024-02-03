import { GrandeLogoImage, LogoGrandeContainer } from "./styleGrande";
import LogoGrande from "../../assets/logo.png";

export default function LayoutLogoGrande() {
    return (
        <LogoGrandeContainer>
            <GrandeLogoImage src={LogoGrande} />
        </LogoGrandeContainer>
    );
}