import { Card } from "../../components/Card";
import { Space } from "../../components/Space";
import { Container } from "../../components/layouts/Container";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { TopBarPadding } from "../../components/layouts/TopBarPadding";
import { useAuth } from "../../contexts/AuthContext";
import CreateLoggedIn from "./CreateLoggedIn";

const CreatePage = () => {
  const { user } = useAuth();

  return (
    <DefaultLayout title="기록 작성" hideActions={["/create"]}>
      <TopBarPadding />
      {user ? (
        <Container>
          <Space h={16} />
          <CreateLoggedIn />
        </Container>
      ) : (
        <Container>
          <Space h={16} />
          <Card>로그인이 필요합니다.</Card>
        </Container>
      )}
    </DefaultLayout>
  );
};

export default CreatePage;
