import { StatusBarImage, StatusBarContainer } from "./style";
import BarraStatus from "../../assets/Status Bar - Dark (1).png";

export default function Layout() {
    return (
        <StatusBarContainer>
            <StatusBarImage src={BarraStatus} />
        </StatusBarContainer>
    );
}
