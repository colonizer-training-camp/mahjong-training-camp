import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color } from "../../styles/colors";
import { MenuItem } from "./MenuItem";


const IconLink = styled(Link)`
  display: block;
  @media screen and (max-width: 720px) {
    width: unset;
    height: 100%;
    flex: 1 0 0;
    min-width: 0;
  }
`;

const IconLinkExternal = styled.a`
  display: block;
  @media screen and (max-width: 720px) {
    width: unset;
    height: 100%;
    flex: 1 0 0;
    min-width: 0;
  }
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

  @media screen and (max-width: 720px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background: linear-gradient(
      to bottom,
      ${color.silkBlue},
      ${color.silkBlueLight}
    );
    border-top: 4px solid #d4af86;
    box-shadow: none;

    &::before {
      display: none;
    }

    &:hover {
      transform: none;
    }
  }
`;

interface Props {
  item: MenuItem;
}

const MenuIcon = ({ item }: Props) => {
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

export default MenuIcon;
