"use client";
import { Col, Row, Card } from "antd";
import Image from "next/image";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";
import { useState } from "react";
const { Meta } = Card;
export default function News() {
  const contentStyle1: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    marginTop: "6rem",
    fontSize: "50px",
    marginBottom: "4rem",
  };
  const rowStyle = {
    marginTop: "1rem",
    paddingLeft: "25rem",
    paddingRight: "5rem",
  };

  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    transition: "filter 0.3s",
    filter: isHovered ? "grayscale(100%)" : "grayscale(0%)",
  };

  return (
    <div>
      <h1 style={contentStyle1}>Our Latest Wedding News!</h1>

      <Row style={rowStyle}>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<Image alt="example" src={img1} />}
          >
            {" "}
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <Image
                alt="example"
                src={img2}
                style={imageStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<Image alt="example" src={img3} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
