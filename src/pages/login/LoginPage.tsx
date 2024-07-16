import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Space } from "../../components/Space";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Modal from "../../components/modal/Modal";
import { ModalContents } from "../../components/modal/ModalContents";
import { useAuth } from "../../contexts/AuthContext";
import { color } from "../../styles/colors";
import { commons } from "../../styles/commons";

const LoginTextInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  height: 48px;
  padding: 0 8px;
  color: white;
  background-color: ${color.silkBlueDark};
  border: 1px solid ${color.silkBlueLight};
`;

const LoginDescription = styled.span`
  font-size: 80%;
  color: ${color.silkBlueSecondaryText};
`;

const LoginButton = styled.button`
  ${commons.primaryButton}
  display: block;
  margin: 0 auto;
  min-width: 144px;
`;

const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [idInput, setIdInput] = useState<string>("");
  const [pwInput, setPwInput] = useState<string>("");

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const onDismiss = () => {
    navigate(-1);
  };

  const handleTryLogin = async () => {
    try {
      await auth.login(idInput, pwInput);
      onDismiss();
    } catch (e) {
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <DefaultLayout>
      <Modal
        open={modalOpen}
        onDismiss={onDismiss}
        desiredWidth={400}
        disableCloseOnBackdropClick
      >
        <ModalContents>
          <LoginTextInput
            type="text"
            placeholder="아이디"
            value={idInput}
            onChange={(e) => setIdInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleTryLogin();
              }
            }}
          />
          <Space h={8} />
          <LoginTextInput
            type="password"
            placeholder="비밀번호"
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleTryLogin();
              }
            }}
          />
          <Space h={16} />
          <LoginDescription>
            호스트에게 요청하지 않은 경우 초기 비밀번호가 아직 설정되지 않아
            로그인이 불가능할 수 있습니다. 초기 비밀번호 설정을 위해서는
            호스트에게 문의해 주시기 바랍니다.
          </LoginDescription>
          <Space h={16} />
          <LoginButton onClick={handleTryLogin}>로그인</LoginButton>
        </ModalContents>
      </Modal>
    </DefaultLayout>
  );
};

export default LoginPage;
