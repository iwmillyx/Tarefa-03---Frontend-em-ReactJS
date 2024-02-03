import styled from "styled-components";

export const CompradorCadastroDiv = styled.div`
    background-color: #e6e8e9;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-left: -50px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: -115px;
    width: 100%; /* Alterado para ocupar 100% da largura disponível */
    max-width: 340px; /* Adicionado um valor máximo para evitar alargamento excessivo */
    margin-left: 35px;
    margin-right: auto;
    margin-top: 150px;
`;


export const Input = styled.input`
    width: 75%;
    padding: 10px;
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
    margin-top: -2px;
    margin-left: 60px;
    padding-left: 30px;
`;

export const IconePessoa = styled.img`
    position: absolute;
    left: 55px;
    top: 236px;
    width: 24px;
    height: 24px;
    margin-left: -10px;
`;

export const IconeArroba = styled.img`
    position: absolute;
    left: 55px;
    top: 310px;
    width: 24px;
    height: 24px;
    margin-left: -10px;
`;

export const IconeEmail = styled.img`
    position: absolute;
    left: 55px;
    top: 383px;
    width: 24px;
    height: 24px;
    margin-left: -10px;
`;

export const IconeCadeado = styled.img`
    position: absolute;
    left: 55px;
    top: 454px;
    width: 24px;
    height: 24px;
    margin-left: -10px;
`;

export const IconeCadeado2 = styled.img`
    position: absolute;
    left: 55px;
    top: 528px;
    width: 24px;
    height: 24px;
    margin-left: -10px;
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-left: -35px;
    margin-top: 155px;
    font-family: Verdana;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #154962;
    position: relative;
`;

export const Checkbox = styled.input`
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1.5px solid #154962;
    background: transparent;
    margin-right: 10px;
    cursor: pointer;
    top: 2px;
    left: 2px;
    padding: 5px, 3.33px, 5.83px, 3.33px;
`;

export const SubmitButton = styled.button`
    width: 280px;
    height: 49px;
    margin-top: 50px;
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
