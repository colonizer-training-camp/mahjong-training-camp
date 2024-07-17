import styled from "@emotion/styled";
import { Input, InputProps } from "@mui/base";
import { commons } from "../../styles/commons";

const TextFieldComponent = styled.input`
  ${commons.textField}
`;

const TextField = ({ slots, ...props }: InputProps) => {
  return <Input slots={{ ...slots, input: TextFieldComponent }} {...props} />;
};

export default TextField;
