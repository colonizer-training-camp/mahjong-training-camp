import styled from "@emotion/styled";
import {
  IconMarquee,
  IconPokerChip,
  IconSquareRotated,
  IconTriangleInverted,
  TablerIconsProps,
} from "@tabler/icons-react";
import { useEffect } from "react";
import { useGlobals } from "../../contexts/GlobalsContext";
import { color } from "../../styles/colors";
import { GameTypeResponse } from "../../types/GameTypeResponse";
import Option from "../commons/Option";
import Select from "../commons/Select";

const GameOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface Props {
  value: GameTypeResponse | null;
  onChange?: (value: GameTypeResponse) => void;
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
  const { gameTypes } = useGlobals();

  useEffect(() => {
    if (!value && gameTypes?.length && onChange && setToDefault) {
      onChange(gameTypes[0]);
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
        return v ? (
          <GameOption>
            <Icon
              game={v.value}
              iconProps={{
                color: color.goldText,
              }}
            />
            {v.value.displayName.ko}
          </GameOption>
        ) : null;
      }}
      getOptionAsString={(v) => v.value.displayName.ko}
    >
      {gameTypes.map((gameType) => (
        <Option key={gameType.type} value={gameType}>
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
