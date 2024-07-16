import { css } from "@emotion/react";
import { transparentize } from "polished";
import { color } from "./colors";

const card = css`
  background-color: ${transparentize(0.3, color.darkGray)};
  border-radius: 8px;
`;

export const commons = {
  card,
};
