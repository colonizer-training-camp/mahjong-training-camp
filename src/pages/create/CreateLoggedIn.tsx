import styled from "@emotion/styled";
import { useState } from "react";
import { Card } from "../../components/Card";
import GameTypeSelect from "../../components/form/GameTypeSelect";

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

const CreateLoggedIn = () => {
  const [selectedGameType, setSelectedGameType] = useState<string | null>(null);

  return (
    <>
      <Card>
        <InputRow>
          <InputCaption>대국 유형</InputCaption>
          <InputDetails>
            <GameTypeSelect
              value={selectedGameType}
              onChange={(v) => setSelectedGameType(v)}
              setToDefault
            />
          </InputDetails>
        </InputRow>
        (TODO)
      </Card>
    </>
  );
};

export default CreateLoggedIn;
