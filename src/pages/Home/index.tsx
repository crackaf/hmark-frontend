import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import React from "react";
import styled from "styled-components";
import SVG_File from "../../components/SVG_Component";

const BodyDiv = styled.div<{ height?: string }>`
  background-color: "#ecf3fc";
  width: 100%;
  height: fit-content;
  text-align: center;
  padding: 5% 10% 10% 10%;
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
  height?: string;
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
        <div className="d-flex justify-content-evenly">
          <DivContent>
            <div
              style={{
                height: "200px",
                width: "200px",
              }}
              className="mb-3"
            >
              <SVG_File filename="import" />
            </div>
            <DivContent width="250px">
              <P fontWeight="700">1. Import Files</P>
              <P>
                Import photos and videos from your local device into our
                website.
              </P>
            </DivContent>
          </DivContent>
          <DivContent>
            <div
              style={{
                height: "200px",
                width: "200px",
              }}
              className="mb-3"
            >
              <SVG_File filename="time" />
            </div>
            <DivContent width="250px">
              <P fontWeight="700">2. System Processing</P>
              <P>Wait for our server to process and completed your request.</P>
            </DivContent>
          </DivContent>
          <DivContent>
            <div
              style={{
                height: "214px",
                width: "200px",
              }}
            >
              <SVG_File filename="export" />
            </div>
            <DivContent width="280px">
              <P fontWeight="700">3. Export Files</P>
              <P>
                Once our system has finished processing. You can download your
                watermarked files on your device.
              </P>
            </DivContent>
          </DivContent>
        </div>
      </BodyDiv>
      <BodyDiv>
        <Title>Watermark Files Anywhere, Anytime</Title>
        <P>Our watermarking system is accessible from any device</P>
        <div className="d-flex justify-content-evenly me-5">
          <DivContent>
            <div
              style={{
                height: "200px",
                width: "200px",
              }}
              className="mb-3"
            >
              <SVG_File filename="watermark" />
            </div>
            <DivContent width="280px">
              <P fontWeight="700">Watermark videos</P>
              <P>
                Watermark videos directly on our server. Videos upto 50MB in
                size.
              </P>
            </DivContent>
          </DivContent>
          <DivContent>
            <div
              style={{
                height: "200px",
                width: "200px",
              }}
              className="mb-3"
            >
              <SVG_File filename="accessible" />
            </div>
            <div style={{ marginLeft: "80px" }}>
              <DivContent width="320px">
                <P fontWeight="700">2. System Processing</P>
                <P>
                  Upload your files on the go through your mobile device. No
                  download necessary.
                </P>
              </DivContent>
            </div>
          </DivContent>
        </div>
      </BodyDiv>
    </>
  );
}

export default Home;
