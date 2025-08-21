"use client";
import {
  BodyContainer,
  BodyLeftContainer,
  BodyRightContainer,
  CardMoneyContainer,
  RootContainer,
  Title,
} from "./styles";

const Home = () => {
  return (
    <RootContainer>
      <Title>
      </Title>
      <CardMoneyContainer size={{ xs: 12 }}></CardMoneyContainer>
      <BodyContainer size={{ xs: 12 }}>
        <BodyLeftContainer size={{ xs: 12, md: 6 }}></BodyLeftContainer>
        <BodyRightContainer size={{ xs: 12, md: 6 }}></BodyRightContainer>
      </BodyContainer>
    </RootContainer>
  );
};

export default Home;
