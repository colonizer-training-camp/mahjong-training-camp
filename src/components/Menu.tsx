import styled from "@emotion/styled";
import {
  IconChartBar,
  IconChartLine,
  IconHistory,
  IconLogin,
  IconLogout,
  IconPlus,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { color } from "../styles/colors";
import { lighten } from "polished";

const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 100;

  @media screen and (max-width: 720px) {
    top: unset;
    bottom: 0;
    height: 72px;
    width: 100%;
  }
`;

const Icons = styled.div`
  height: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 32px;
  gap: 16px;
  pointer-events: all;

  @media screen and (max-width: 720px) {
    padding: 0;
    gap: 0;
    flex-direction: row;
  }
`;

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
      ${color.darkGray},
      ${lighten(0.1, color.darkGray)}
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

interface MenuItem {
  icon: React.ReactNode;
  link: string;
  authState?: "logged-in" | "logged-out";
}

const MENU_ITEMS: MenuItem[] = [
  {
    icon: <IconLogin />,
    link: "/login",
    authState: "logged-out",
  },
  {
    icon: <IconPlus />,
    link: "https://docs.google.com/spreadsheets/d/1chMD7-jIt8_4KSgcOZDkC_585h-DJU_VY4Z7b2vvvbk/edit#gid=822958200",
    authState: "logged-in",
  },
  {
    icon: <IconChartBar />,
    link: "/stats",
  },
  {
    icon: <IconChartLine />,
    link: "https://docs.google.com/spreadsheets/d/1chMD7-jIt8_4KSgcOZDkC_585h-DJU_VY4Z7b2vvvbk/edit#gid=782332631",
  },
  {
    icon: <IconHistory />,
    link: "/history",
  },
  {
    icon: <IconLogout />,
    link: "/logout",
    authState: "logged-in",
  },
];

const Menu = () => {
  const { user } = useAuth();

  return (
    <MenuContainer>
      <Icons>
        {MENU_ITEMS.filter(({ authState }) => {
          if (authState === "logged-in") {
            return !!user;
          }
          if (authState === "logged-out") {
            return !user;
          }
          return true;
        }).map((item, index) =>
          /https?:\/\//.test(item.link) ? (
            <IconLinkExternal href={item.link} target="_blank" key={index}>
              <IconContainer>{item.icon}</IconContainer>
            </IconLinkExternal>
          ) : (
            <IconLink to={item.link} key={index}>
              <IconContainer>{item.icon}</IconContainer>
            </IconLink>
          )
        )}
      </Icons>
    </MenuContainer>
  );
};

export default Menu;
