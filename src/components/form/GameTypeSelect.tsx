import styled from "@emotion/styled";
import {
  IconMarquee,
  IconPokerChip,
  IconSquareRotated,
  IconTriangleInverted,
  TablerIconsProps,
} from "@tabler/icons-react";
import useGameTypes from "../../api/useGameTypes";
import Option from "../commons/Option";
import Select from "../commons/Select";
import { useEffect } from "react";
import { GameTypeResponse } from "../../types/GameTypeResponse";
import { color } from "../../styles/colors";

const GameOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface Props {
  value: string | null;
  onChange?: (value: string) => void;
  setToDefault?: boolean;
}

const Icon = ({
  game,
  iconProps,
}: {
  game: GameTypeResponse;
  iconProps?: TablerIconsProps;
}) => {
  if (game.scoreType === "chips") return <IconPokerChip {...iconProps} />;
  if (game.players === 4) return <IconSquareRotated {...iconProps} />;
  if (game.players === 3) return <IconTriangleInverted {...iconProps} />;
  return <IconMarquee {...iconProps} />;
};

const GameTypeSelect = ({ value, onChange, setToDefault }: Props) => {
  const gameTypes = useGameTypes();

  useEffect(() => {
    if (!value && gameTypes && onChange && setToDefault) {
      onChange(gameTypes[0].type);
    }
  }, [gameTypes, onChange, setToDefault, value]);

  if (!gameTypes) {
    return null;
  }

  return (
    <Select
      value={value}
      onChange={(_, v) => {
        if (v) onChange?.(v);
      }}
      renderValue={(v) => {
        const gameType = gameTypes.find((gt) => gt.type === v?.value);
        return gameType ? (
          <GameOption>
            <Icon
              game={gameType}
              iconProps={{
                color: color.goldText,
              }}
            />
            {gameType.displayName.ko}
          </GameOption>
        ) : null;
      }}
      getOptionAsString={(v) => v.value}
    >
      {gameTypes.map((gameType) => (
        <Option key={gameType.type} value={gameType.type}>
          <GameOption>
            <Icon game={gameType} />
            {gameType.displayName.ko}
          </GameOption>
        </Option>
      ))}
    </Select>
  );
};

export default GameTypeSelect;
