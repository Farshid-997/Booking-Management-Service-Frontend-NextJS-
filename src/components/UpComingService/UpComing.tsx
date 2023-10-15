"use client";

import { Card } from "antd";
import Image from "next/image";
import { Col, Divider, Row } from "antd";
const { Meta } = Card;
export default function UpComingService() {
  const contentStyle: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    marginTop: "4rem",
    fontSize: "50px",
  };

  const rowStyle = {
    marginTop: "4rem",
    paddingLeft: "15rem",
    paddingRight: "5rem",
    marginBottom: "4rem",
  };
  return (
    <div>
      <h2 style={contentStyle}>UP Coming Service</h2>

      <Row style={rowStyle}>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            {" "}
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

        <Col span={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

        <Col span={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
