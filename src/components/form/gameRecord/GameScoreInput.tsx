import styled from "@emotion/styled";
import { Button, Input } from "@mui/base";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { color } from "../../../styles/colors";
import { fontFamilies } from "../../../styles/fonts";
import { Space } from "../../Space";

const ScoreBackground = styled.div`
  position: relative;
  ${fontFamilies.oxanium}
  font-weight: 500;
  background-color: black;
  color: white;
  font-size: 1.6em;
  border: 1px solid ${color.silkBlueLight};

  &:hover {
    border: 1px solid ${color.goldLight};
  }

  @media (max-width: 720px) {
    font-size: 1.2em;
  }
`;

const InputRoot = styled.div`
  flex: 1 0 0;
  font-size: 1.2em;
  min-width: 0;
`;

const InputField = styled.input`
  width: 100%;
  background: none;
  padding: 0;
  border: none;
  color: inherit;
  text-align: right;
  padding: 8px 1.7ch 8px 8px;
`;

const InputAdornment = styled.span`
  position: absolute;
  user-select: none;
  right: 0;
  bottom: 24%;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 8px;
`;

const PlusminusButton = styled.button`
  flex: 1;
  min-width: 0;
`;

const strip = (value: string) => {
  const replaced = value.replace(/[^0-9-]/g, "");
  if (!replaced.length) return "";
  if (/^0+$/.test(replaced)) return "0";
  return replaced.replace(/^0+/, "").replace(/^-0+/, "-");
};

interface Props {
  value: number;
  onChange?: (value: number) => void;
}

const GameScoreInput = ({ value, onChange }: Props) => {
  const [internalValue, setInternalValue] = useState<string>("");

  useEffect(() => {
    if (!value) {
      if (internalValue === "-") return;
    }
    if (value !== +internalValue * 100) {
      setInternalValue(Math.floor(value / 100).toString());
    }
  }, [internalValue, value]);

  const handleChange = (newValue: string) => {
    const stripped = strip(newValue).slice(0, 5);
    setInternalValue(stripped);
    if (onChange) {
      const int = +stripped;
      if (isNaN(int)) {
        onChange(0);
        return;
      }
      onChange(int * 100);
    }
  };

  const handleFocus = () => {
    if (internalValue === "0") {
      setInternalValue("");
    }
  };

  const handleBlur = () => {
    setInternalValue(Math.floor(value / 100).toString());
  };

  return (
    <>
      <ScoreBackground>
        <Input
          slots={{ root: InputRoot, input: InputField }}
          value={internalValue}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputAdornment>00</InputAdornment>
      </ScoreBackground>
      <Space h={8} />
      <ButtonsRow>
        <Button
          slots={{ root: PlusminusButton }}
          onClick={() => onChange?.(value - 10000)}
        >
          <IconMinus />
        </Button>
        <Button
          slots={{ root: PlusminusButton }}
          onClick={() => onChange?.(value + 10000)}
        >
          <IconPlus />
        </Button>
      </ButtonsRow>
    </>
  );
};

export default GameScoreInput;
