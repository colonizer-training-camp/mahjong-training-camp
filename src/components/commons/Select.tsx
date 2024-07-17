import styled from "@emotion/styled";
import {
  CssTransition,
  Select as MuiSelect,
  PopupContext,
  SelectListboxSlotProps,
  SelectRootSlotProps,
  SelectType,
} from "@mui/base";
import { forwardRef, useContext } from "react";
import { color } from "../../styles/colors";
import { IconChevronDown } from "@tabler/icons-react";

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

const ListBox = styled.ul`
  background-color: ${color.silkBlue};
  color: white;
  padding: 16px;
  margin: 12px 0;
  width: 320px;
  max-width: calc(100vw - 64px);
  border-radius: 4px;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }

  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out,
      transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
`;

const AnimatedListBox = forwardRef(
  <Value extends object, Multiple extends boolean>(
    props: SelectListboxSlotProps<Value, Multiple>,
    ref: React.ForwardedRef<HTMLUListElement>
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { ownerState, ...other } = props;
    const popupContext = useContext(PopupContext);

    if (popupContext == null) {
      throw new Error(
        "The `AnimatedListbox` component cannot be rendered outside a `Popup` component"
      );
    }

    const verticalPlacement = popupContext.placement.split("-")[0];

    return (
      <CssTransition
        className={`placement-${verticalPlacement}`}
        enterClassName="open"
        exitClassName="closed"
      >
        <ListBox {...other} ref={ref} />
      </CssTransition>
    );
  }
);

const Select: SelectType = ({ slots, ...rest }) => {
  return (
    <MuiSelect
      slots={{
        root: SelectButton,
        listbox: AnimatedListBox,
        ...slots,
      }}
      {...rest}
    />
  );
};

export default Select;
