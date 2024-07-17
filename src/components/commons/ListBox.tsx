import styled from "@emotion/styled";
import { CssTransition, PopupContext } from "@mui/base";
import { forwardRef, useContext } from "react";
import { color } from "../../styles/colors";

export const ListBoxWrapper = styled.ul`
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

interface Props {
  ownerState?: unknown;
}

const ListBox = forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLUListElement>) => {
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
        <ListBoxWrapper {...other} ref={ref} />
      </CssTransition>
    );
  }
);

export default ListBox;
