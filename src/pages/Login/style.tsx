import styled from "styled-components";

export const LoginDiv = styled.div`
    background-color: #e6e8e9;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-left: -50px;
`;

export const ImagePatas = styled.img`
    width: 198px;
    height: 194px;
    top: 189.18px;
    left: 99px;
    margin-top: 100px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%; /* Alterado para ocupar 100% da largura disponível */
    max-width: 380px; /* Adicionado um valor máximo para evitar alargamento excessivo */
    margin-left: auto;
    margin-right: auto;
`;

export const Label = styled.label`
    font-weight: bold;
    position: relative;
    margin-bottom:-20px;
    border-bottom: 1px solid #154962;
    font-family: Verdana;
    font-size: 16px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    color: #154962;
    max-width: 53px;
    left: 30px;
`;

export const Input = styled.input`
    width: 63%;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #053D58CC;
    background-color: transparent;
    font-family: Verdana;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #06071366;
    margin-top: 25px;
    margin-left: 47px;
    padding-left: 35px;
`;

export const IconeGatinho = styled.img`
    position: absolute;
    left: 18px;
    top: 35px;
    width: 24px;
    height: 24px;
    margin-right: 10px;
`;

export const IconeCadeado = styled.img`
    position: absolute;
    left: 18px;
    top: 33px;
    width: 24px;
    height: 24px;
    margin-right: 10px;
`;

export const ForgotPassword = styled.div`
    font-size: 15px;
    color: #154962;
    font-family: Verdana;
    line-height: 20px;
    text-shadow: 0px 4px 4px #00000040;
    margin-left: 135px;
`;

export const ForgotPasswordContainer = styled.div`
    margin-top: 5px;
`;

export const SubmitButton = styled.button`
    width: 280px;
    height: 49px;
    margin-top: 70px;
    top: 667px;
    left: 50px;
    margin-left: -5px;
    padding: 10px, 40px, 10px, 40px;
    border-radius: 18px;
    border: none;
    gap: 40px;
    background-color: #E97B0C;
    color: #E6E8E9;
    cursor: pointer;
    font-family: Verdana;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    box-shadow: 0px 4px 4px 0px #00000040;
`;

export const SubmitButton2 = styled.button`
    width: 280px;
    height: 49px;
    margin-top: 20px;
    margin-left: -5px;
    top: 667px;
    left: 52px;
    padding: 10px, 40px, 10px, 40px;
    border-radius: 18px;
    border: none;
    gap: 40px;
    background-color: #E97B0C;
    color: #E6E8E9;
    cursor: pointer;
    font-family: Verdana;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    box-shadow: 0px 4px 4px 0px #00000040;
`;
