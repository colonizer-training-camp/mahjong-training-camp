import styled from "@emotion/styled";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import StatsUserList, { UserInfo } from "./StatsUserList";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
    <DefaultLayout>
      <Container>
        <StatsUserList users={USER_LIST} />
      </Container>
    </DefaultLayout>
  );
};

export default Stats;
