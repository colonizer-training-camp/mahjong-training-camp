import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { useAuth } from "../../contexts/AuthContext";

const LogoutPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [logoutFired, setLogoutFired] = useState<boolean>(false);

  const onDismiss = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleTryLogout = useCallback(async () => {
    try {
      await auth.logout();
    } catch (e) {
      alert("로그아웃에 실패했습니다.");
    }
    onDismiss();
  }, [auth, onDismiss]);

  useEffect(() => {
    if (logoutFired) return;
    setLogoutFired(true);
    handleTryLogout();
  }, [handleTryLogout, logoutFired]);

  return <DefaultLayout />;
};

export default LogoutPage;
