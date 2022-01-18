import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import React from "react";
import styled from "styled-components";
import SVG_File from "../../components/SVG_Component";
import { normalize } from "path";

const BodyDiv = styled.div<{ height?: string }>`
  background-color: "#ecf3fc";
  width: 100%;
  height: fit-content;
  text-align: center;
  padding: 10%;
  padding-top: 5%;
  color: #4a5568;
  :nth-child(odd) {
    background-color: #00395170;
    color: #ecf3fc;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 34px;
`;

const P = styled.p<{ fontWeight?: string; fontSize?: string }>`
  font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
  font-size: ${({ fontWeight }) => fontWeight ?? "18px"}; ;
`;

const DivContent = styled.div<{
  width?: string;
  fontSize?: string;
  fontWeight: string;
}>`
  width: ${({ width }) => width ?? "fit-content"};
  height: fit-content;
  font-size: ${({ fontSize }) => fontSize ?? "20px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
`;

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <BodyDiv>
        <Title>How It Works...</Title>
        <P fontSize="24px">No download or installation needed.</P>
        <div className="d-flex">
          <DivContent>
            <div
              style={{
                height: "200px",
                width: "200px",
              }}
            >
              <SVG_File filename="import" />
            </div>
          </DivContent>
          <DivContent>
            <div
              style={{
                height: "200px",
                width: "200px",
              }}
            >
              <SVG_File filename="export" />
            </div>
          </DivContent>
          <DivContent>
            <div
              style={{
                height: "200px",
                width: "200px",
              }}
            >
              <SVG_File filename="time" />
            </div>
          </DivContent>
        </div>
      </BodyDiv>
      <BodyDiv />
      <BodyDiv />
    </>
  );
}

export default Home;
