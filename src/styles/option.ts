import { css } from "@emotion/react";
import { color } from "./colors";

const base = css`
  list-style: none;
  padding: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }
`;

const selected = css`
  background-image: linear-gradient(
    to right,
    ${color.goldLight},
    ${color.silkBlue}
  );
  color: ${color.silkBlue};
`;

const highlighted = css`
  background-color: ${color.silkBlueLight};
  outline: 1px solid ${color.goldLight};
  color: white;
`;

const focusVisible = css`
  outline: 1px solid ${color.goldLight};
`;

const highlightedSelected = css`
  background-image: linear-gradient(
    to right,
    ${color.goldLight},
    ${color.silkBlueLight}
  );
  color: ${color.silkBlue};
`;

const disabled = css`
  color: ${color.silkBlueSecondaryText};
`;

const hover = css`
  background-color: ${color.silkBlueLight};
`;

export const option = {
  base,
  selected,
  highlighted,
  focusVisible,
  highlightedSelected,
  disabled,
  hover,
};
