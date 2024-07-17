import styled from "@emotion/styled";
import {
    Select as MuiSelect,
    SelectRootSlotProps,
    SelectType,
} from "@mui/base";
import { IconChevronDown } from "@tabler/icons-react";
import { forwardRef } from "react";
import { color } from "../../styles/colors";
import ListBox from "./ListBox";

const SelectButtonContainer = styled.button`
  background-image: linear-gradient(
    to right,
    ${color.selectButtonDark},
    ${color.selectButton},
    ${color.selectButtonDark}
  );
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const IconContainer = styled.div`
  color: ${color.selectButtonLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectButton = forwardRef(
  <TValue extends object, Multiple extends boolean>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { ownerState, ...rest }: SelectRootSlotProps<TValue, Multiple>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <SelectButtonContainer {...rest} ref={ref}>
        <div>{rest.children}</div>
        <IconContainer>
          <IconChevronDown />
        </IconContainer>
      </SelectButtonContainer>
    );
  }
);

const Select: SelectType = ({ slots, ...rest }) => {
  return (
    <MuiSelect
      slots={{
        root: SelectButton,
        listbox: ListBox,
        ...slots,
      }}
      {...rest}
    />
  );
};

export default Select;
