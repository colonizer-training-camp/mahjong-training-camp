import { useEffect, useState } from "react";
import { UserResponse } from "../types/UserResponse";
import { api } from "../utils/axios";

const useJyanshis = () => {
  const [data, setData] = useState<UserResponse[] | null>(null);

  const load = async () => {
    try {
      const { data: response } = await api.get<UserResponse[]>(
        "/site/jyanshis"
      );
      setData(response);
    } catch (e) {
      setData(null);
      console.error(e);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return data;
};

export default useJyanshis;
