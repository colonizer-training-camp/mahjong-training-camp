import styled from "@emotion/styled";
import { GameTypeResponse } from "../../../types/GameTypeResponse";
import { GameRecordInputValues } from "./types";
import { color } from "../../../styles/colors";
import JyanshiSelect from "../JyanshiSelect";
import { UserResponse } from "../../../types/UserResponse";
import { WIND_KANJI } from "../../../utils/wind";
import { fontFamilies } from "../../../styles/fonts";
import { Space } from "../../Space";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import GameScoreInput from "./GameScoreInput";

const InputCard = styled.div<{ oya: boolean }>`
  background-image: linear-gradient(
    to right,
    ${color.silkBlueDark},
    ${color.silkBlue},
    ${color.silkBlueDark}
  );
  border: 1px solid
    ${({ oya }) => (oya ? color.goldLight : color.silkBlueLight)};
  padding: 8px;
`;

const WindRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WindText = styled.span<{ oya: boolean }>`
  ${fontFamilies.zenAntique}
  display: block;
  font-size: 1.5rem;
  color: ${({ oya }) => (oya ? "white" : color.silkBlueSecondaryText)};
`;

const WindCheckbox = styled.span<{ oya: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${({ oya }) => (oya ? "white" : color.silkBlueSecondaryText)};
  user-select: none;
  cursor: pointer;
`;

interface Props {
  index: number;
  gridColumn: number;
  gameType: GameTypeResponse;
  value: GameRecordInputValues;
  onChange?: (value: GameRecordInputValues) => void;
}

const GameRecordSingleUserInput = ({
  index,
  gridColumn,
  gameType,
  value,
  onChange,
}: Props) => {
  const { scoreType } = gameType;
  const { wind, isFirstOya } = value;

  const onChangeFirstOya = () => {
    onChange?.({
      ...value,
      isFirstOya: true,
    });
  };

  const onChangeJyanshi = (jyanshi: UserResponse | null) => {
    onChange?.({
      ...value,
      jyanshi,
    });
  };

  const onChangeScore = (score: number) => {
    onChange?.({
      ...value,
      score,
    });
  };

  return (
    <InputCard
      oya={wind === "EAST"}
      style={{
        gridColumn: `${gridColumn + 1} / span 2`,
      }}
    >
      <WindRow>
        <WindText oya={wind === "EAST"}>
          {wind === null ? "?" : WIND_KANJI[wind]}
        </WindText>
        <WindCheckbox
          onClick={onChangeFirstOya}
          oya={wind === "EAST"}
          role="checkbox"
          aria-checked={isFirstOya}
          tabIndex={0}
        >
          첫 오야
          {isFirstOya ? <IconCheckbox /> : <IconSquare />}
        </WindCheckbox>
      </WindRow>
      <Space h={8} />
      <JyanshiSelect
        value={value.jyanshi}
        onChange={onChangeJyanshi}
        setToMyself={index === 0}
        fullWidth
      />
      {scoreType === "score" && (
        <GameScoreInput value={value.score} onChange={onChangeScore} />
      )}
    </InputCard>
  );
};

export default GameRecordSingleUserInput;
