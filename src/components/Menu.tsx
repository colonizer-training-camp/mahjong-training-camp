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
`;

const Icons = styled.div`
  height: 100%;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px;
  gap: 16px;
  pointer-events: all;
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  background-image: linear-gradient(to bottom, #9c6145, #b5835b, #c29569);
  color: #d4af86;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  background-size: cover;
  transition: 0.1s ease-in-out;

  &::before {
    border-radius: 100%;
    content: "";
    background: #5d3125;
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    box-shadow: inset 0 -2px 2px #3e1a16;
  }

  & > svg {
    width: 32px;
    height: 32px;
    filter: drop-shadow(2px 2px 2px rgba(230, 208, 183, 0.3));
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <Icons>
        <Link to="/">
          <IconContainer>
            <IconHome />
          </IconContainer>
        </Link>
        <a
          href={
            "https://docs.google.com/spreadsheets/d/1chMD7-jIt8_4KSgcOZDkC_585h-DJU_VY4Z7b2vvvbk/edit#gid=822958200"
          }
          target="_blank"
        >
          <IconContainer>
            <IconPlus />
          </IconContainer>
        </a>
        <Link to="/stats">
          <IconContainer>
            <IconChartBar />
          </IconContainer>
        </Link>
        <a
          href={
            "https://docs.google.com/spreadsheets/d/1chMD7-jIt8_4KSgcOZDkC_585h-DJU_VY4Z7b2vvvbk/edit#gid=782332631"
          }
          target="_blank"
        >
          <IconContainer>
            <IconChartLine />
          </IconContainer>
        </a>
        <Link to="/history">
          <IconContainer>
            <IconHistory />
          </IconContainer>
        </Link>
      </Icons>
    </MenuContainer>
  );
};

export default Menu;
