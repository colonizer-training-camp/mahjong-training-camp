import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { UserResponse } from "../types/UserResponse";
import { api } from "../utils/axios";

export interface AuthContextValues {
  user: UserResponse | null;
  refresh: () => Promise<void>;
  login: (loginId: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValues>({
  user: null,
  refresh: async () => {
    throw new Error("AuthContext: Refresh is not implemented");
  },
  login: async () => {
    throw new Error("AuthContext: Login is not implemented");
  },
  logout: async () => {
    throw new Error("AuthContext: Logout is not implemented");
  },
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserResponse | null>(null);

  const refresh = useCallback(async () => {
    try {
      const { data } = await api.get<UserResponse>("/auth/credentials");
      setUser(data);
    } catch (e) {
      setUser(null);
    }
  }, []);

  const login = useCallback(
    async (loginId: string, password: string) => {
      await api.post("/auth/login", { loginId, password });
      await refresh();
    },
    [refresh]
  );

  const logout = useCallback(async () => {
    await api.post("/auth/logout");
    await refresh();
  }, [refresh]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const values = useMemo(
    () => ({
      user,
      refresh,
      login,
      logout,
    }),
    [login, logout, refresh, user]
  ) satisfies AuthContextValues;

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
