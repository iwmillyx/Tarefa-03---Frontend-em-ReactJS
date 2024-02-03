import { MediaLogoImage, LogoMediaContainer } from "./styleMedia";
import LogoMedia from "../../assets/logoMenor.png";

export default function LayoutLogoMedia() {
    return (
        <LogoMediaContainer>
            <MediaLogoImage src={LogoMedia} />
        </LogoMediaContainer>
    );
}
