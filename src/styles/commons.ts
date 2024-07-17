import { css } from "@emotion/react";
import { transparentize } from "polished";
import { color } from "./colors";
import { fontFamilies } from "./fonts";

const card = css`
  background-color: ${transparentize(0.3, color.silkBlue)};
  border-radius: 8px;
`;

const primaryButton = css`
  ${fontFamilies.kimDaegon}
  padding: 8px 16px;
  min-width: 96px;
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom, #fde77d, #efc865);
  color: #6c2e3a;
  border: 2px solid #ebb24a;
  border-radius: 4px;

  &:hover {
    background-image: linear-gradient(to bottom, #fef599, #f9e27c);
  }
`;

const textFieldBase = css`
  ${fontFamilies.milkyway}
  font-size: 1rem;
  color: white;
`;

const textField = css`
  ${textFieldBase}
  height: 48px;
  padding: 0 8px;
  background-color: ${color.silkBlueDark};
  border: 1px solid ${color.silkBlueLight};

  &:focus,
  &:hover {
    border: 1px solid ${color.goldLight};
  }
`;

export const commons = {
  card,
  primaryButton,
  textFieldBase,
  textField,
};
