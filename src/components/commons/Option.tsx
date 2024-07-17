import styled from "@emotion/styled";
import { Option as MuiOption, optionClasses } from "@mui/base";
import { color } from "../../styles/colors";

const Option = styled(MuiOption)`
  list-style: none;
  padding: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-image: linear-gradient(
      to right,
      ${color.goldLight},
      ${color.silkBlue}
    );
    color: ${color.silkBlue};
  }

  &.${optionClasses.highlighted} {
    background-color: ${color.silkBlueLight};
    outline: 1px solid ${color.goldLight};
    color: white;
  }

  &:focus-visible {
    outline: 1px solid ${color.goldLight};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-image: linear-gradient(
      to right,
      ${color.goldLight},
      ${color.silkBlueLight}
    );
    color: ${color.silkBlue};
  }

  &.${optionClasses.disabled} {
    color: ${color.silkBlueSecondaryText};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${color.silkBlueLight};
  }
`;

export default Option;
