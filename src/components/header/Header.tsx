import styled from "@emotion/styled";
import { HTMLAttributes, PropsWithChildren } from "react";
import { color } from "../../styles/colors";
import { HeaderText } from "./HeaderText";
import { transparentize } from "polished";

const HeaderBackground = styled.div`
  max-width: 100vw;
  background-image: linear-gradient(
    to right,
    ${color.silkBlueLight},
    ${transparentize(0.2, color.silkBlueLight)},
    ${transparentize(1, color.silkBlueLight)}
  );
  background-clip: padding-box;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
    to right,
    ${color.goldText},
    ${transparentize(0.2, color.goldTextLight)},
    ${transparentize(1, color.goldTextLight)}
  );
  border-image-slice: 1;
  min-height: 64px;
  padding: 8px 160px 8px 24px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 720px) {
    min-height: 48px;
    font-size: 1.5rem;
    padding: 8px 120px 8px 16px;
  }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Header = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <HeaderBackground {...rest}>
      <HeaderText>{children}</HeaderText>
    </HeaderBackground>
  );
};
