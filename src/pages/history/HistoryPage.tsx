import styled from "@emotion/styled";
import DefaultLayout from "../../components/layouts/DefaultLayout";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const HistoryPage = () => {
  return (
    <DefaultLayout backgroundImage="bomHello">
      <Container></Container>
    </DefaultLayout>
  );
};

export default HistoryPage;
