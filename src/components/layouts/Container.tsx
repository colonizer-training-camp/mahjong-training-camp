import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;

  @media screen and (max-width: 720px) {
    padding: 0;
  }
`;
