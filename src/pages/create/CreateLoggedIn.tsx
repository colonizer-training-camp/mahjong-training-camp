import styled from "@emotion/styled";
import { useState } from "react";
import { Card } from "../../components/Card";
import { Space } from "../../components/Space";
import GameTypeSelect from "../../components/form/GameTypeSelect";
import GameRecordInput from "../../components/form/gameRecord/GameRecordInput";
import { GameRecordInputValues } from "../../components/form/gameRecord/types";
import { GameTypeResponse } from "../../types/GameTypeResponse";
import { resolveWind } from "../../utils/wind";

const InputRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const InputCaption = styled.div`
  flex: 0 0 120px;
  min-width: 0;

  @media screen and (max-width: 720px) {
    flex: 0 0 auto;
  }
`;

const InputDetails = styled.div`
  flex: 1;
  min-width: 0;

  @media screen and (max-width: 720px) {
    flex: 0 0 auto;
  }
`;

const GameTypeInputContainer = styled.div`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
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
      <Card>
        <InputRow>
          <InputCaption>대국 유형</InputCaption>
          <InputDetails>
            <GameTypeSelect
              value={selectedGameType}
              onChange={handleSelectGameType}
              setToDefault
            />
          </InputDetails>
        </InputRow>
        <Space h={16} />
        <InputRow>
          <InputCaption>작사</InputCaption>
          <InputDetails />
        </InputRow>
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
