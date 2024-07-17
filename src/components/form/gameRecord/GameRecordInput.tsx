import styled from "@emotion/styled";
import { GameTypeResponse } from "../../../types/GameTypeResponse";
import { resolveWind } from "../../../utils/wind";
import GameRecordSingleUserInput from "./GameRecordSingleUserInput";
import { GameRecordInputValues } from "./types";

const JyanshiInputRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

interface Props {
  gameType: GameTypeResponse;
  value: GameRecordInputValues[];
  onChange?: (value: GameRecordInputValues[]) => void;
}

const GameRecordInput = ({ gameType, value, onChange }: Props) => {
  const { players } = gameType;

  const handleChangeIndex = (
    index: number,
    newValue: GameRecordInputValues
  ) => {
    if (!onChange) {
      return;
    }
    const resolvedFirstOyaIndex = newValue.isFirstOya
      ? index
      : value.findIndex((v) => v.isFirstOya);
    onChange(
      value.map((v, i) => {
        const wind =
          resolvedFirstOyaIndex === -1
            ? null
            : resolveWind(i, resolvedFirstOyaIndex, players);
        if (i === index) return { ...newValue, wind };
        let { jyanshi, isFirstOya } = v;
        if (newValue.jyanshi?.loginId === jyanshi?.loginId) jyanshi = null;
        if (newValue.isFirstOya) isFirstOya = false;
        return { ...v, jyanshi, isFirstOya, wind };
      })
    );
  };

  const gameRecordInputProps = (index: number) => ({
    index,
    gameType,
    value: value[index],
    onChange: (v: GameRecordInputValues) => handleChangeIndex(index, v),
    key: index,
  });

  if (players === 4) {
    return (
      <>
        <JyanshiInputRow>
          <GameRecordSingleUserInput
            {...gameRecordInputProps(2)}
            gridColumn={1}
          />
          <GameRecordSingleUserInput
            {...gameRecordInputProps(3)}
            gridColumn={0}
          />
          <GameRecordSingleUserInput
            {...gameRecordInputProps(1)}
            gridColumn={2}
          />
          <GameRecordSingleUserInput
            {...gameRecordInputProps(0)}
            gridColumn={1}
          />
        </JyanshiInputRow>
      </>
    );
  }

  if (players === 3) {
    return (
      <>
        <JyanshiInputRow>
          <GameRecordSingleUserInput
            {...gameRecordInputProps(2)}
            gridColumn={0}
          />
          <GameRecordSingleUserInput
            {...gameRecordInputProps(1)}
            gridColumn={2}
          />
          <GameRecordSingleUserInput
            {...gameRecordInputProps(0)}
            gridColumn={1}
          />
        </JyanshiInputRow>
      </>
    );
  }

  return <></>;
};

export default GameRecordInput;
