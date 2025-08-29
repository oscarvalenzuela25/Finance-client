"use client";
import Paginator from "@/components/Paginator";
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
      <Title variant="textPreset1Bold" color="grey900">
        Overview
      </Title>
      <CardMoneyContainer size={{ xs: 12 }}></CardMoneyContainer>
      <BodyContainer size={{ xs: 12 }}>
        <BodyLeftContainer size={{ xs: 12, md: 6 }}></BodyLeftContainer>
        <BodyRightContainer size={{ xs: 12, md: 6 }}></BodyRightContainer>
        <Paginator
          totalItems={300}
          itemsPerPage={10}
          onPageChange={(page) => console.log("Page changed to:", page)}
        ></Paginator>
      </BodyContainer>
    </RootContainer>
  );
};

export default Home;