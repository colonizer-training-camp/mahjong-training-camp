import styled from "@emotion/styled";
import { Input } from "@mui/base";
import { useEffect, useState } from "react";
import { color } from "../../../styles/colors";
import { fontFamilies } from "../../../styles/fonts";
import { IconPokerChip } from "@tabler/icons-react";

const ScoreBackground = styled.div`
  position: relative;
  ${fontFamilies.libreCaslon}
  font-weight: 500;
  background-color: #1a1a1b;
  color: #b89554;
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
  padding: 8px 8px 8px 1.7ch;
  text-align: center;
`;

const InputAdornment = styled.span`
  position: absolute;
  user-select: none;
  left: 8px;
  bottom: 16%;
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

const GameChipInput = ({ value, onChange }: Props) => {
  const [internalValue, setInternalValue] = useState<string>("");

  useEffect(() => {
    if (!value) {
      if (internalValue === "-") return;
    }
    if (value !== +internalValue) {
      setInternalValue(Math.floor(value).toString());
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
      onChange(int);
    }
  };

  const handleFocus = () => {
    if (internalValue === "0") {
      setInternalValue("");
    }
  };

  const handleBlur = () => {
    setInternalValue(Math.floor(value).toString());
  };

  return (
    <>
      <ScoreBackground>
        <Input
          inputMode="numeric"
          slots={{ root: InputRoot, input: InputField }}
          value={internalValue}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputAdornment>
          <IconPokerChip />
        </InputAdornment>
      </ScoreBackground>
    </>
  );
};

export default GameChipInput;
