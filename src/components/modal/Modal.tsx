import styled from "@emotion/styled";
import { transparentize } from "polished";
import { PropsWithChildren, useEffect, useState } from "react";
import { color } from "../../styles/colors";
import { ModalPortal } from "./ModalPortal";
import { IconX } from "@tabler/icons-react";

interface ModalFaderProps {
  open: boolean;
  noBackground?: boolean;
}

const ModalFader = styled.div<ModalFaderProps>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  pointer-events: ${({ open }) => (open ? "all" : "none")};
  background-color: ${({ open, noBackground }) =>
    open && !noBackground
      ? transparentize(0.6, color.backdropGray)
      : "transparent"};
  z-index: 1000000;
  transition: background-color 0.3s ease;
`;

const ModalWrapper = styled.div<ModalFaderProps>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1000001;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.3s ease, transform 0.3s ease;
  ${({ open }) =>
    !open
      ? `
    transform: translateY(20px) scale(0.95);
  `
      : ""}
`;

const ModalContainer = styled.div<ModalFaderProps>`
  position: relative;
  overflow: auto;
  pointer-events: ${({ open }) => (open ? "all" : "none")};
  max-width: calc(100% - 64px);
  max-height: calc(100% - 64px);
  margin: 32px;
  box-shadow: ${({ noBackground }) =>
    !noBackground ? `0px 8px 16px ${transparentize(0.85, "black")}` : "none"};
  background: ${({ noBackground }) =>
    !noBackground
      ? `linear-gradient(to right, ${color.silkBlue}, ${color.silkBlueLight}, ${color.silkBlue})`
      : "transparent"};
  border: 1px solid ${color.goldLight};
  color: white;
`;

const CloseButtonContainer = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  opacity: 0.5;

  & > svg {
    width: 32px;
    height: 32px;
  }
`;

interface Props {
  open: boolean;
  desiredWidth?: number;
  disableCloseOnBackdropClick?: boolean;
  hideCloseButton?: boolean;
  noBackground?: boolean;
  zIndex?: number;
  onDismiss?: () => void;
}

const Modal = ({
  open,
  desiredWidth,
  disableCloseOnBackdropClick,
  hideCloseButton,
  noBackground,
  zIndex,
  children,
  onDismiss,
}: PropsWithChildren<Props>) => {
  const [stateOpen, setStateOpen] = useState<boolean>(open);
  const [drawChild, setDrawChild] = useState<boolean>(open);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
      const timeout = setTimeout(() => {
        setStateOpen(true);
      }, 50);
      setDrawChild(true);
      return () => {
        // Reset scroll state when unmounting
        document.body.style.overflowY = "unset";
        clearTimeout(timeout);
      };
    }
    document.body.style.overflowY = "unset";
    const timeout1 = setTimeout(() => {
      setDrawChild(false);
    }, 300);
    const timeout2 = setTimeout(() => {
      setStateOpen(false);
    }, 50);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [open]);

  const closeOnBackdropClick = !disableCloseOnBackdropClick;
  const showCloseButton = !hideCloseButton;

  return (
    <ModalPortal>
      <ModalFader
        open={open}
        onClick={closeOnBackdropClick ? onDismiss : undefined}
        noBackground={noBackground}
        style={{
          zIndex,
        }}
        suppressHydrationWarning
      />
      {drawChild ? (
        <ModalWrapper
          open={stateOpen}
          noBackground={noBackground}
          style={{
            zIndex: (zIndex || 1000000) + 1,
          }}
        >
          <ModalContainer
            open={open}
            noBackground={noBackground}
            style={{
              width: desiredWidth,
            }}
          >
            {children}
            {showCloseButton && (
              <CloseButtonContainer onClick={onDismiss}>
                <IconX />
              </CloseButtonContainer>
            )}
          </ModalContainer>
        </ModalWrapper>
      ) : null}
    </ModalPortal>
  );
};

export default Modal;
