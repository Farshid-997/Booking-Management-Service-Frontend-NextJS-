"use client";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";
import img1 from "../../assets/arrangement9.png";
import img2 from "../../assets/img-1.jpg";
import img3 from "../../assets/dusk12.png";
import img4 from "../../assets/img-3.jpg";

import Image from "next/image";
const { Meta } = Card;
export default function Category() {
  const reviewStyle1: React.CSSProperties = {
    width: "100%",
    height: "400px",
    border: "1px solid #9AA497",
    backgroundColor: "#9AA497",
    borderRadius: "10px",
    marginBottom: "2rem",
  };
  const mainDiv1 = {
    paddingLeft: "5rem",
    paddingRight: "5rem",
  };

  const contentStyle1: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    marginTop: "4rem",
    fontSize: "50px",
    marginBottom: "4rem",
  };
  const rowStyle1 = {
    marginTop: "1rem",
    paddingLeft: "15rem",
    paddingRight: "5rem",
  };
  return (
    <>
      <h2 style={contentStyle1}>Our Categories</h2>
      <div style={mainDiv1}>
        <div style={reviewStyle1}>
          <Row style={rowStyle1}>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<Image alt="example" src={img1} />}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Service Cartegory"
                  description="This new edition of our service category"
                />
              </Card>
            </Col>

            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<Image alt="example" src={img4} width={170} />}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Service Cartegory"
                  description="Todays launching"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<Image alt="example" src={img2} width={170} />}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Service Cartegory"
                  description="Today's launching"
                />
              </Card>
            </Col>

            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<Image alt="example" src={img3} width={250} />}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Service Cartegory"
                  description="Best Seller"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
