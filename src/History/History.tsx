import styled from "@emotion/styled";
import Menu from "../Menu";
import TitleLogo from "../TitleLogo";
import bomHello from "/bom_hello.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  object-fit: cover;
  z-index: -100;
  user-select: none;
`;

const History = () => {
  return (
    <>
      <Container>
        <BackgroundImage src={bomHello} />
      </Container>
      <Menu />
      <TitleLogo />
    </>
  );
};

export default History;
