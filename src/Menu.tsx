import styled from "@emotion/styled";
import {
  IconChartBar,
  IconChartLine,
  IconHistory,
  IconPlus,
} from "@tabler/icons-react";

const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
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
        <IconContainer>
          <IconPlus size={32} />
        </IconContainer>
        <IconContainer>
          <IconChartBar size={32} />
        </IconContainer>
        <IconContainer>
          <IconChartLine size={32} />
        </IconContainer>
        <IconContainer>
          <IconHistory size={32} />
        </IconContainer>
      </IconWrapper>
    </MenuContainer>
  );
};

export default Menu;
