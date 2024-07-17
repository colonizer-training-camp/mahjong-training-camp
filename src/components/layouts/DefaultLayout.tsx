import { PropsWithChildren } from "react";
import Menu from "../menu/Menu";
import TitleLogo from "../TitleLogo";
import { Global, css } from "@emotion/react";
import mahjongBackground from "/mahjong-background.jpg";
import bomHelloBackground from "/bom_hello.jpg";
import styled from "@emotion/styled";

const FullScreenContainer = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  overflow: hidden;
  position: relative;
`;

const BACKGROUND_IMAGES = {
  mahjong: mahjongBackground,
  bomHello: bomHelloBackground,
};

interface Props {
  title?: string;
  useTotalStats?: boolean;
  fullScreen?: boolean;
  backgroundImage?: keyof typeof BACKGROUND_IMAGES;
  hideActions?: string[];
}

export const DefaultLayout = ({
  title,
  children,
  useTotalStats,
  fullScreen,
  backgroundImage = "mahjong",
  hideActions,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Global
        styles={css`
          html {
            background-image: url(${BACKGROUND_IMAGES[backgroundImage]});
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
          }
        `}
      />
      {!fullScreen && (
        <Global
          styles={css`
            body {
              @media screen and (max-width: 720px) {
                padding-bottom: 72px;
              }
            }
          `}
        />
      )}
      {fullScreen ? (
        <FullScreenContainer>{children}</FullScreenContainer>
      ) : (
        children
      )}
      <Menu hideActions={hideActions} />
      <TitleLogo title={title} useTotalStats={useTotalStats} />
    </>
  );
};

export default DefaultLayout;
