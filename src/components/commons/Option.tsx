import styled from "@emotion/styled";
import { Option as MuiOption, optionClasses } from "@mui/base";
import { option } from "../../styles/option";

const Option = styled(MuiOption)`
  ${option.base}

  &.${optionClasses.selected} {
    ${option.selected}
  }

  &.${optionClasses.highlighted} {
    ${option.highlighted}
  }

  &:focus-visible {
    ${option.focusVisible}
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    ${option.highlightedSelected}
  }

  &.${optionClasses.disabled} {
    ${option.disabled}
  }

  &:hover:not(.${optionClasses.disabled}) {
    ${option.hover}
  }
`;

export default Option;
