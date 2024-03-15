import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

const TotalStatContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px;
`;

const LogoContainer = styled.img`
  position: relative;
  min-height: 80px;
  max-width: 70vw;
  object-fit: contain;
  pointer-events: all;
`;

const TotalStatWrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const TotalStatCard = styled.div`
  position: relative;
  width: 120px;
  height: 160px;
  background-color: #221e4baf;
  border-radius: 4px;
  color: white;
  font-family: "TAEBAEKmilkyway", serif;
  padding: 16px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TotalStatTitle = styled.div`
  width: 100%;
`;

const TotalStatDetail = styled.div`
  font-size: 36px;
`;

interface TotalStatProps {
  useTotalStats?: boolean;
}

const TitleLogo = (props: TotalStatProps) => {
  const { useTotalStats } = props;

  return (
    <TotalStatContainer>
      <Link to="/">
        <LogoContainer src={logo} />
      </Link>
      {useTotalStats && (
        <TotalStatWrapper>
          <TotalStatCard>
            <TotalStatTitle>대국 수</TotalStatTitle>
            <TotalStatDetail>37</TotalStatDetail>
          </TotalStatCard>
          <TotalStatCard>
            <TotalStatTitle>작사 수</TotalStatTitle>
            <TotalStatDetail>9</TotalStatDetail>
          </TotalStatCard>
        </TotalStatWrapper>
      )}
    </TotalStatContainer>
  );
};

export default TitleLogo;
