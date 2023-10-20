"use client";
import { Col, Divider, Row, Card } from "antd";
import Image from "next/image";
import img1 from "../../assets/dusk12.png";
import img2 from "../../assets/shape.png";
const { Meta } = Card;
export default function Review() {
  const reviewStyle: React.CSSProperties = {
    width: "100%",
    height: "400px",
    border: "1px solid gray",
    backgroundColor: "gray",
    borderRadius: "10px",
    marginBottom: "2rem",
  };
  const mainDiv = {
    paddingLeft: "5rem",
    paddingRight: "5rem",
  };

  const contentStyle: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "50px",
    marginBottom: "4rem",
  };
  const rowStyle = {
    marginTop: "1rem",
    paddingLeft: "15rem",
    paddingRight: "5rem",
  };
  return (
    <div style={mainDiv}>
      <Image
        src={img1}
        alt=""
        style={{ marginLeft: "48rem", marginTop: "3rem" }}
      ></Image>
      <h2 style={contentStyle}>User Review</h2>
      <div style={reviewStyle}>
        <Row style={rowStyle}>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              {" "}
              <Meta
                title="5 star rating of weeding planer service"
                description="good service"
              />
            </Card>
          </Col>

          <Col span={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              <Meta
                title="3.8 star rating of weeding planer service"
                description="bad service"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              <Meta
                title="4.0 star rating of weeding planer service"
                description="moderate service"
              />
            </Card>
          </Col>

          <Col span={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              <Meta
                title="4.5 star rating of weeding planer service"
                description="good service"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
