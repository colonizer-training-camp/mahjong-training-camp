import styled from "@emotion/styled";
import { useState } from "react";
import { Card } from "../../components/Card";
import GameTypeSelect from "../../components/form/GameTypeSelect";
import GameRecordInput from "../../components/form/gameRecord/GameRecordInput";
import { GameRecordInputValues } from "../../components/form/gameRecord/types";
import { GameTypeResponse } from "../../types/GameTypeResponse";
import { resolveWind } from "../../utils/wind";

const GameTypeInputContainer = styled.div`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
`;

const GameTypeSelectContainer = styled.div`
  position: fixed;
  z-index: 210;
  left: 160px;
  right: 0;
  top: 46px;
  color: white;

  @media screen and (max-width: 720px) {
    left: unset;
    top: 22px;
    right: 0px;
  }
`;

const CreateLoggedIn = () => {
  const [selectedGameType, setSelectedGameType] =
    useState<GameTypeResponse | null>(null);
  const [gameRecord, setGameRecord] = useState<GameRecordInputValues[]>([]);

  const handleSelectGameType = (v: GameTypeResponse) => {
    const { players } = v;
    setSelectedGameType(v);
    setGameRecord((prev) => {
      if (players < prev.length) {
        return prev.slice(0, players);
      }
      if (players > prev.length) {
        const ret = prev.concat(
          Array(players - prev.length)
            .fill(null)
            .map(() => ({
              jyanshi: null,
              score: 0,
              isFirstOya: false,
              wind: null,
            }))
        );
        const resolvedFirstOya = ret.findIndex((v) => v.isFirstOya);
        if (resolvedFirstOya !== -1) {
          return ret.map((v, i) => ({
            ...v,
            wind: resolveWind(i, resolvedFirstOya, players),
          }));
        }
        return ret.map((v) => ({
          ...v,
          wind: null,
        }));
      }
      return prev;
    });
  };

  return (
    <>
      <GameTypeSelectContainer>
        <GameTypeSelect
          value={selectedGameType}
          onChange={handleSelectGameType}
          setToDefault
        />
      </GameTypeSelectContainer>
      <Card>
        <GameTypeInputContainer>
          {selectedGameType && (
            <GameRecordInput
              gameType={selectedGameType}
              value={gameRecord}
              onChange={setGameRecord}
            />
          )}
        </GameTypeInputContainer>
      </Card>
    </>
  );
};

export default CreateLoggedIn;
