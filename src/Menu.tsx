import styled from "@emotion/styled";
import {
  IconChartBar,
  IconChartLine,
  IconHistory,
  IconHome,
  IconPlus,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 100;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  width: 120px;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  right: 0;
  padding-top: 32px;
  gap: 32px;
  pointer-events: all;
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  background: #d7ada9;
  color: #ddb86d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999999px;
  border: 4px solid #ddb86d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  background-image: url("/wood_texture.png");
  background-blend-mode: multiply;
  background-size: cover;
  transition: 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <IconWrapper>
        <Link to="/">
          <IconContainer>
            <IconHome size={32} />
          </IconContainer>
        </Link>
        <a
          href={
            "https://docs.google.com/spreadsheets/d/1chMD7-jIt8_4KSgcOZDkC_585h-DJU_VY4Z7b2vvvbk/edit#gid=822958200"
          }
          target="_blank"
        >
          <IconContainer>
            <IconPlus size={32} />
          </IconContainer>
        </a>
        <Link to="/stats">
          <IconContainer>
            <IconChartBar size={32} />
          </IconContainer>
        </Link>
        <a
          href={
            "https://docs.google.com/spreadsheets/d/1chMD7-jIt8_4KSgcOZDkC_585h-DJU_VY4Z7b2vvvbk/edit#gid=782332631"
          }
          target="_blank"
        >
          <IconContainer>
            <IconChartLine size={32} />
          </IconContainer>
        </a>
        <Link to="/history">
          <IconContainer>
            <IconHistory size={32} />
          </IconContainer>
        </Link>
      </IconWrapper>
    </MenuContainer>
  );
};

export default Menu;
