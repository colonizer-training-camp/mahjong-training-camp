import styled from "@emotion/styled";
import Menu from "../components/Menu";
import TitleLogo from "../components/TitleLogo";
import StatsUserList, { UserInfo } from "./StatsUserList";
import mahjongBackground from "/mahjong-background.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  object-fit: cover;
  z-index: -100;
  user-select: none;
`;

const USER_LIST: UserInfo[] = [
  {
    profileImgUrl:
      "https://static.solved.ac/uploads/profile/360x360/gs18115-picture-1662450824403.png",
    handle: "CCW",
  },
  {
    profileImgUrl:
      "https://static.solved.ac/uploads/profile/360x360/havana723-picture-1704710593762.png",
    handle: "HN",
  },
  { profileImgUrl: "/wood_texture.png", handle: "yune" },
  {
    profileImgUrl:
      "https://static.solved.ac/uploads/profile/360x360/shiftpsh-picture-1693244003120.png",
    handle: "shiftpsh",
  },
  {
    profileImgUrl:
      "https://static.solved.ac/uploads/profile/360x360/cologne-picture-1684326496524.png",
    handle: "cologne",
  },
];

const Stats = () => {
  return (
    <>
      <Container>
        <BackgroundImage src={mahjongBackground} />
        <StatsUserList users={USER_LIST} />
      </Container>
      <Menu />
      <TitleLogo />
    </>
  );
};

export default Stats;
