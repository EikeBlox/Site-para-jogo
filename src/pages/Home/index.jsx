import { useState } from "react";
import { v4 } from "uuid";
import {
  Container,
  Header,
  NavBar,
  GameContainer,
  GameImage,
  GameDescription,
  Button,
  ButtonWrapper,
} from "./styles";
import jogo1 from "../../img/jogo1.jpeg";
import jogo2 from "../../img/jogo2.jpg";
import jogo3 from "../../img/jogo3.jpeg";

function Home() {
  const [games, setGames] = useState([
    {
      id: v4(),
      name: "Lost Ark",
      description:
        "Mergulhe em um vasto mundo de fantasia repleto de ação, exploração e batalhas épicas. Em Lost Ark, você irá explorar diferentes reinos, enfrentar monstros gigantes e participar de aventuras emocionantes em uma narrativa envolvente.",
      image: jogo1,
      url: "https://store.steampowered.com/agecheck/app/1599340/",
    },
    {
      id: v4(),
      name: "Dragon Ball Sparking Zero",
      description:
        "Experimente o universo de Dragon Ball de uma forma inédita com Sparking Zero. Jogue como seus personagens favoritos e reviva as batalhas mais intensas da série em combates 3D cheios de energia e movimentos especiais.",
      image: jogo2,
      url: "https://store.steampowered.com/app/1790600/DRAGON_BALL_Sparking_ZERO/",
    },
    {
      id: v4(),
      name: "Roblox",
      description:
        "Roblox é uma plataforma onde você pode criar e jogar jogos criados por outros usuários. Com uma infinidade de jogos e experiências interativas, você pode se aventurar em mundos únicos e até mesmo criar o seu próprio com ferramentas intuitivas e criativas.",
      image: jogo3,
      url: "https://www.roblox.com",
    },
  ]);

  return (
    <Container>
      <Header>
        <h1>Bem-vindo ao Mundo dos Jogos</h1>
      </Header>

      <NavBar>
        <Button>Home</Button>
        <Button>Jogos</Button>
        <Button>Novidades</Button>
        <Button>Contate-nos</Button>
      </NavBar>

      <div className="games">
        {games.map((game) => (
          <GameContainer key={game.id}>
            <GameImage src={game.image} alt={game.name} />
            <div className="game-info">
              <h2>{game.name}</h2>
              <GameDescription>{game.description}</GameDescription>
              <div className="button-wrapper">
                <a
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <ButtonWrapper className="game-button">
                    Ver mais
                  </ButtonWrapper>
                </a>
              </div>
            </div>
          </GameContainer>
        ))}
      </div>
    </Container>
  );
}

export default Home;
