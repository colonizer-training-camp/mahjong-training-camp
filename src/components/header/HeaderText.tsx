import styled from "@emotion/styled";
import { color } from "../../styles/colors";
import { fontFamilies } from "../../styles/fonts";

export const HeaderText = styled.span`
  ${fontFamilies.kimDaegon}
  background-color: ${color.goldText};
  background-image: linear-gradient(
    to bottom,
    ${color.goldText},
    ${color.goldTextLight}
  );
  background-size: 80%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
