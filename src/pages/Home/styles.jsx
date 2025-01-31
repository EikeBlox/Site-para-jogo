import styled from "styled-components";

// Container Principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('https://png.pngtree.com/thumb_back/fw800/background/20240719/pngtree-neon-wonderland-gaming-setup-room-4k-computer-wallpaper-image_16018603.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

// Cabeçalho
export const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 3rem;
    color: #fff;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    font-weight: bold;
  }
`;

// Barra de Navegação
export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

// Botão
export const Button = styled.button`
  background: rgba(221,160,221, 0.3);
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  background: rgba(221,160,221, 0.3);
  display: flex;
  justify-content: center;  // Centraliza o botão horizontalmente
  width: 100%;  // Garante que o botão ocupe toda a largura disponível
  margin-top: 15px;  // Distância superior se necessário
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Se você quiser que o botão ocupe a altura total da tela */
  width: 100%;
`;

// Container do Jogo
export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
  width: 300px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  color: #ffffff;

  &:hover {
    transform: scale(1.05);
  }
`;

// Imagem do Jogo
export const GameImage = styled.img`
  width: 100%;
  height: 100%; /* Ajuste a altura conforme necessário */
  object-fit: cover; /* Garante que a imagem cubra a área sem distorcer */
  border-radius: 10px;
  margin-bottom: 15px;
`;

// Descrição do Jogo
export const GameDescription = styled.p`
  font-size: 1rem;
  text-align: left;
  color: #ffffff;
  margin-bottom: 20px;
`;

// Responsividade para dispositivos menores
export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
