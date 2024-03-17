import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import Menu from "../Menu";
import TitleLogo from "../TitleLogo";
import bom from "/bom.png";
import mahjongBackground from "/mahjong-background.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  object-fit: cover;
  z-index: -100;
  user-select: none;
`;

const CardFlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;

const HandleContainer = styled.div`
  position: relative;
  height: 16vh;
  width: 720px;
  max-width: 90vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Handle = styled.div`
  position: absolute;
  font-size: 2rem;
  bottom: 32px;
  left: 16px;
  font-family: "kdg_Medium", sans-serif;
  color: #debc80;
`;

const HandleBackground = styled.div`
  position: absolute;
  bottom: 16px;
  background-image: linear-gradient(
    to right,
    rgba(33, 36, 67, 1),
    rgba(33, 36, 67, 0)
  );
  height: 64px;
  width: 60%;
  border-top: 2px solid #debc80;
  border-bottom: 2px solid #debc80;
`;

const CardContainer = styled.div`
  position: relative;
  width: 720px;
  max-width: 90vw;
  height: 480px;
  background-color: #212443d7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const BomImage = styled.img`
  height: 600px;
  position: absolute;
  bottom: 0;
  right: -30%;
  user-select: none;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const StatsContainer = styled.div`
  flex-grow: 1;
  width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RightPadding = styled.div`
  width: 20%;
  height: 100%;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const GeneralStatsContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  gap: 8px;
`;

const RankingStatsContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

const DividerContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HorizontalDivider = styled.div`
  height: 1px;
  width: 90%;
  background-color: #debc80;
`;

const PlayCountContainer = styled.div`
  height: 90%;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const UmaContainer = styled.div`
  height: 90%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ScoreContainer = styled.div`
  height: 90%;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AverageRankContainer = styled.div`
  height: 90%;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GeneralStatsTitle = styled.div`
  font-family: "kdg_Medium", serif;
  color: #debc80;
  font-size: 1.2rem;
`;

const GeneralStatsSubTitleContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

const GeneralStatsSubTitleTextContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GeneralStatsSubTitle = styled.div`
  font-family: "TAEBAEKmilkyway", serif;
  color: #debc80;
  font-size: 0.8rem;
  word-break: keep-all;
`;

const GeneralStatsNumberContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const GeneralStatsNumberTextContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GeneralStatsNumber = styled.div`
  font-family: "kdg_Medium", serif;
  color: #debc80;
  font-size: 1.4rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const VerticalDivider = styled.div`
  width: 1px;
  height: 80%;
  background-color: #debc805e;
`;

const RankingStatsDetailContainer = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RankingStatsDetailRankText = styled.div`
  font-family: "kdg_Medium", serif;
  color: #debc80;
  font-size: 1.6rem;
`;

const RankingStatsDetailNumberText = styled.div`
  font-family: "kdg_Medium", serif;
  color: #debc80;
  font-size: 1.2rem;
`;

const DashedDivider = styled.div`
  width: 0;
  flex-grow: 0.8;
  height: 1px;
  border-bottom: 1px dashed #debc80;
`;

const UserStats = () => {
  const { handle } = useParams();

  return (
    <>
      <Container>
        <BackgroundImage src={mahjongBackground} />
        <CardFlexBox>
          <HandleContainer>
            <HandleBackground />
            <Handle>{handle}</Handle>
          </HandleContainer>
          <CardContainer>
            <StatsContainer>
              <GeneralStatsContainer>
                <PlayCountContainer>
                  <GeneralStatsTitle>#</GeneralStatsTitle>
                  <GeneralStatsSubTitleContainer>
                    <GeneralStatsSubTitleTextContainer>
                      <GeneralStatsSubTitle>총</GeneralStatsSubTitle>
                    </GeneralStatsSubTitleTextContainer>
                  </GeneralStatsSubTitleContainer>
                  <GeneralStatsNumberContainer>
                    <GeneralStatsNumberTextContainer>
                      <GeneralStatsNumber>63</GeneralStatsNumber>
                    </GeneralStatsNumberTextContainer>
                  </GeneralStatsNumberContainer>
                </PlayCountContainer>
                <VerticalDivider />
                <UmaContainer>
                  <GeneralStatsTitle>우마</GeneralStatsTitle>
                  <GeneralStatsSubTitleContainer>
                    <GeneralStatsSubTitleTextContainer>
                      <GeneralStatsSubTitle>합</GeneralStatsSubTitle>
                    </GeneralStatsSubTitleTextContainer>
                    <GeneralStatsSubTitleTextContainer>
                      <GeneralStatsSubTitle>평균</GeneralStatsSubTitle>
                    </GeneralStatsSubTitleTextContainer>
                  </GeneralStatsSubTitleContainer>
                  <GeneralStatsNumberContainer>
                    <GeneralStatsNumberTextContainer>
                      <GeneralStatsNumber>91.8</GeneralStatsNumber>
                    </GeneralStatsNumberTextContainer>
                    <GeneralStatsNumberTextContainer>
                      <GeneralStatsNumber>1.6</GeneralStatsNumber>
                    </GeneralStatsNumberTextContainer>
                  </GeneralStatsNumberContainer>
                </UmaContainer>
                <VerticalDivider />
                <ScoreContainer>
                  <GeneralStatsTitle>점수</GeneralStatsTitle>
                  <GeneralStatsSubTitleContainer>
                    <GeneralStatsSubTitleTextContainer>
                      <GeneralStatsSubTitle>합</GeneralStatsSubTitle>
                    </GeneralStatsSubTitleTextContainer>
                    <GeneralStatsSubTitleTextContainer>
                      <GeneralStatsSubTitle>최대</GeneralStatsSubTitle>
                    </GeneralStatsSubTitleTextContainer>
                    <GeneralStatsSubTitleTextContainer>
                      <GeneralStatsSubTitle>평균</GeneralStatsSubTitle>
                    </GeneralStatsSubTitleTextContainer>
                  </GeneralStatsSubTitleContainer>
                  <GeneralStatsNumberContainer>
                    <GeneralStatsNumberTextContainer>
                      <GeneralStatsNumber>1556.8</GeneralStatsNumber>
                    </GeneralStatsNumberTextContainer>
                    <GeneralStatsNumberTextContainer>
                      <GeneralStatsNumber>84.1</GeneralStatsNumber>
                    </GeneralStatsNumberTextContainer>
                    <GeneralStatsNumberTextContainer>
                      <GeneralStatsNumber>26.4</GeneralStatsNumber>
                    </GeneralStatsNumberTextContainer>
                  </GeneralStatsNumberContainer>
                </ScoreContainer>
                <VerticalDivider />
                <AverageRankContainer>
                  <GeneralStatsTitle>순위</GeneralStatsTitle>
                  <GeneralStatsSubTitleContainer>
                    <GeneralStatsSubTitleTextContainer>
                      <GeneralStatsSubTitle>평균</GeneralStatsSubTitle>
                    </GeneralStatsSubTitleTextContainer>
                  </GeneralStatsSubTitleContainer>
                  <GeneralStatsNumberContainer>
                    <GeneralStatsNumberTextContainer>
                      <GeneralStatsNumber>2.47</GeneralStatsNumber>
                    </GeneralStatsNumberTextContainer>
                  </GeneralStatsNumberContainer>
                </AverageRankContainer>
              </GeneralStatsContainer>
              <DividerContainer>
                <HorizontalDivider />
              </DividerContainer>
              <RankingStatsContainer>
                <RankingStatsDetailContainer>
                  <RankingStatsDetailRankText>1등</RankingStatsDetailRankText>
                  <DashedDivider />
                  <RankingStatsDetailNumberText>
                    15 회 / 23.8%
                  </RankingStatsDetailNumberText>
                </RankingStatsDetailContainer>
                <RankingStatsDetailContainer>
                  <RankingStatsDetailRankText>2등</RankingStatsDetailRankText>
                  <DashedDivider />
                  <RankingStatsDetailNumberText>
                    16 회 / 25.4%
                  </RankingStatsDetailNumberText>
                </RankingStatsDetailContainer>
                <RankingStatsDetailContainer>
                  <RankingStatsDetailRankText>3등</RankingStatsDetailRankText>
                  <DashedDivider />
                  <RankingStatsDetailNumberText>
                    13 회 / 20.6%
                  </RankingStatsDetailNumberText>
                </RankingStatsDetailContainer>
                <RankingStatsDetailContainer>
                  <RankingStatsDetailRankText>4등</RankingStatsDetailRankText>
                  <DashedDivider />
                  <RankingStatsDetailNumberText>
                    19 회 / 30.2%
                  </RankingStatsDetailNumberText>
                </RankingStatsDetailContainer>
              </RankingStatsContainer>
            </StatsContainer>
            <RightPadding />
            <BomImage src={bom} />
          </CardContainer>
        </CardFlexBox>
      </Container>
      <Menu />
      <TitleLogo />
    </>
  );
};

export default UserStats;
