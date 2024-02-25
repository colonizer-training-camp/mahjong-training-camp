import styled from "@emotion/styled";
import bom from "/bom.png";
import mahjongBackground from "/mahjong-background.jpg";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: -100;
`;

const BomImage = styled.img`
  height: 90vh;
  position: absolute;
  bottom: 0;
  right: 15vw;
`;

function App() {
  return (
    <Container>
      <BackgroundImage src={mahjongBackground} />
      <BomImage src={bom} />
    </Container>
  );
}

export default App;
