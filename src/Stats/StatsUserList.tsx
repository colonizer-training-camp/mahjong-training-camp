import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  height: 64vh;
  width: 100%;
  top: 24vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.div`
  position: relative;
  width: 640px;
  height: 100%;
  max-width: 90vw;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItemContainer = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  flex: 0 0 80px;
  min-height: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background-color: #121020ba;
  border-radius: 8px;

  &:hover {
    background-color: #000000c0;
  }
`;

const ListItemImage = styled.img`
  position: absolute;
  left: 16px;
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 999999px;
  background-color: white;
`;

const ListItemHandle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "TAEBAEKmilkyway";
  color: white;
  font-size: 20px;
  word-break: keep-all;
`;

export interface UserInfo {
  profileImgUrl: string;
  handle: string;
}

interface StatUserListProps {
  users: UserInfo[];
}

const StatsUserList = (props: StatUserListProps) => {
  const { users } = props;

  return (
    <>
      <Container>
        <ListContainer>
          {users.map((user) => (
            <Link
              to={`/stats/${user.handle}`}
              style={{ textDecoration: "none" }}
            >
              <ListItemContainer>
                <ListItemImage src={user.profileImgUrl}></ListItemImage>
                <ListItemHandle>{user.handle}</ListItemHandle>
              </ListItemContainer>
            </Link>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};

export default StatsUserList;
