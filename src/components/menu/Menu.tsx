import styled from "@emotion/styled";
import { useAuth } from "../../contexts/AuthContext";
import MenuIcon from "./MenuIcon";
import MenuIconMainAction from "./MenuIconMainAction";
import { MENU_ITEMS } from "./MenuItem";

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 32px;
  pointer-events: none;
  z-index: 100;

  @media screen and (max-width: 720px) {
    top: unset;
    bottom: 0;
    height: 72px;
    padding: 0;
    width: 100%;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 16px;
  pointer-events: all;

  @media screen and (max-width: 720px) {
    padding: 0;
    gap: 0;
    height: 100%;
    flex-direction: row;
  }
`;

const MainIconsContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 32px;
  pointer-events: none;
  z-index: 100;

  @media screen and (max-width: 720px) {
    bottom: 72px;
    padding: 16px;
  }
`;

const Menu = () => {
  const { user } = useAuth();

  return (
    <>
      <MenuContainer>
        <Icons>
          {MENU_ITEMS.filter(({ authState, mainAction }) => {
            if (mainAction) return false;
            if (authState === "logged-in") {
              return !!user;
            }
            if (authState === "logged-out") {
              return !user;
            }
            return true;
          }).map((item, index) => (
            <MenuIcon item={item} key={index} />
          ))}
        </Icons>
      </MenuContainer>
      <MainIconsContainer>
        <Icons>
          {MENU_ITEMS.filter(({ authState, mainAction }) => {
            if (!mainAction) return false;
            if (authState === "logged-in") {
              return !!user;
            }
            if (authState === "logged-out") {
              return !user;
            }
            return true;
          }).map((item, index) => (
            <MenuIconMainAction item={item} key={index} />
          ))}
        </Icons>
      </MainIconsContainer>
    </>
  );
};

export default Menu;
