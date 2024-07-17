import styled from "@emotion/styled";
import { Button } from "@mui/base/Button";
import { Popper } from "@mui/base/Popper";
import {
  useAutocomplete,
  UseAutocompleteProps,
} from "@mui/base/useAutocomplete";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import { IconChevronDown, IconX } from "@tabler/icons-react";
import * as React from "react";
import { forwardRef } from "react";
import { color } from "../../styles/colors";
import { commons } from "../../styles/commons";
import { option } from "../../styles/option";
import { ListBoxWrapper } from "./ListBox";

const StyledAutocompleteRoot = styled.div`
  ${commons.textField}
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const StyledInput = styled.input`
  ${commons.textFieldBase}
  flex: 1 0 0;
  min-width: 0;
  background-color: transparent;
  height: 100%;
  border: none;

  &:focus,
  &:hover {
    border: none;
    outline: none;
  }
`;

const AutocompleteOption = styled.li`
  ${option.base}

  &:hover {
    ${option.hover}
  }

  &[aria-selected="true"] {
    ${option.selected}
  }

  &.Mui-focused,
  &.Mui-focusVisible {
    ${option.highlighted}
  }

  &.Mui-focusVisible {
    ${option.focusVisible}
  }

  &[aria-selected="true"].Mui-focused,
  &[aria-selected="true"].Mui-focusVisible {
    ${option.highlightedSelected}
  }
`;

const StyledPopper = styled.div`
  position: relative;
  z-index: 1001;
  width: 320px;
`;

const IconContainer = styled(Button)`
  color: ${color.selectButtonLight};
  display: inline-flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const StyledNoOptions = styled.li`
  list-style: none;
  padding: 8px;
  cursor: default;
  color: ${color.silkBlueSecondaryText};
`;

interface Props<
  Value = string,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
> extends UseAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo> {
  slotProps?: {
    root?: React.HTMLAttributes<HTMLDivElement>;
  };
}

interface AutocompleteType {
  <
    Value = string,
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false
  >(
    props: Props<Value, Multiple, DisableClearable, FreeSolo>,
    ref: React.ForwardedRef<HTMLDivElement>
  ): JSX.Element | null;
  propTypes?: unknown;
  displayName?: string | undefined;
}

const Autocomplete = forwardRef(
  <
    Value = string,
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false
  >(
    props: Props<Value, Multiple, DisableClearable, FreeSolo>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const {
      disableClearable = false,
      disabled = false,
      readOnly = false,
      slotProps = {},
      ...other
    } = props;

    const {
      getRootProps,
      getInputProps,
      getPopupIndicatorProps,
      getClearProps,
      getListboxProps,
      getOptionProps,
      dirty,
      id,
      popupOpen,
      focused,
      anchorEl,
      setAnchorEl,
      groupedOptions,
    } = useAutocomplete({
      ...props,
      componentName: "BaseAutocomplete",
    });

    const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;

    const rootRef = useForkRef(ref, setAnchorEl);

    return (
      <React.Fragment>
        <StyledAutocompleteRoot
          {...getRootProps(other)}
          {...slotProps.root}
          ref={rootRef}
          className={focused ? "focused" : undefined}
        >
          <StyledInput
            id={id}
            disabled={disabled}
            readOnly={readOnly}
            {...getInputProps()}
          />
          {hasClearIcon && (
            <IconContainer {...getClearProps()}>
              <IconX size={18} />
            </IconContainer>
          )}
          <IconContainer
            {...getPopupIndicatorProps()}
            className={popupOpen ? "popupOpen" : undefined}
          >
            <IconChevronDown size={18} />
          </IconContainer>
        </StyledAutocompleteRoot>
        {anchorEl ? (
          <Popper
            open={popupOpen}
            anchorEl={anchorEl}
            slots={{
              root: StyledPopper,
            }}
            modifiers={[
              { name: "flip", enabled: false },
              { name: "preventOverflow", enabled: true },
            ]}
          >
            <ListBoxWrapper {...getListboxProps()}>
              {groupedOptions.map((option, index) => {
                const isGroup =
                  typeof option === "object" && option && "group" in option;
                if (!isGroup) {
                  const optionProps = getOptionProps({ option, index });

                  return (
                    <AutocompleteOption {...optionProps}>
                      {props.getOptionLabel?.(option)}
                    </AutocompleteOption>
                  );
                } else {
                  return <AutocompleteOption>Test</AutocompleteOption>;
                }
              })}

              {groupedOptions.length === 0 && (
                <StyledNoOptions>결과 없음</StyledNoOptions>
              )}
            </ListBoxWrapper>
          </Popper>
        ) : null}
      </React.Fragment>
    );
  }
) as AutocompleteType;

export default Autocomplete;
