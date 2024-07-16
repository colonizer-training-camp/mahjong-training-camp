import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";

const IconLink = styled(Link)`
  display: block;
`;

const IconLinkExternal = styled.a`
  display: block;
`;

const IconContainer = styled.div`
  width: 72px;
  height: 72px;
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
    width: 40px;
    height: 40px;
    filter: drop-shadow(2px 2px 2px rgba(230, 208, 183, 0.3));
  }

  &:hover {
    transform: scale(1.1);
  }
`;

interface Props {
  item: MenuItem;
}

const MenuIconMainAction = ({ item }: Props) => {
  const { link, icon } = item;
  if (/https?:\/\//.test(link)) {
    return (
      <IconLinkExternal href={link} target="_blank">
        <IconContainer>{icon}</IconContainer>
      </IconLinkExternal>
    );
  }
  return (
    <IconLink to={link}>
      <IconContainer>{icon}</IconContainer>
    </IconLink>
  );
};

export default MenuIconMainAction;
