import { useEffect, useState } from "react";
import { GameTypeResponse } from "../types/GameTypeResponse";
import { api } from "../utils/axios";

const useGameTypes = () => {
  const [data, setData] = useState<GameTypeResponse[] | null>(null);

  const load = async () => {
    try {
      const { data: response } = await api.get<GameTypeResponse[]>(
        "/site/game_types"
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

export default useGameTypes;
