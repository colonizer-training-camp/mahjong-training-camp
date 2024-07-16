import { PropsWithChildren } from "react";
import Menu from "../Menu";
import TitleLogo from "../TitleLogo";
import { Global, css } from "@emotion/react";
import mahjongBackground from "/mahjong-background.jpg";
import bomHelloBackground from "/bom_hello.jpg";

const BACKGROUND_IMAGES = {
  mahjong: mahjongBackground,
  bomHello: bomHelloBackground,
};

interface Props {
  useTotalStats?: boolean;
  backgroundImage?: keyof typeof BACKGROUND_IMAGES;
}

export const DefaultLayout = ({
  children,
  useTotalStats,
  backgroundImage = "mahjong",
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
      {children}
      <Menu />
      <TitleLogo useTotalStats={useTotalStats} />
    </>
  );
};

export default DefaultLayout;
