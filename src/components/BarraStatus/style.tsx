import styled from 'styled-components';

export const StatusBarImage = styled.img`
  width: 95%; /* Ocupa a largura total do contêiner */
  max-width: 430px; /* Limita a largura para dispositivos maiores */
  height: auto;
  margin-left: 9px;
`;

export const StatusBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px; /* Altura padrão para a barra de status */
  margin-top: 0;
`;