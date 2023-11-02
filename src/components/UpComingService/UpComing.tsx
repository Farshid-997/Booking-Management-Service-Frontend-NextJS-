"use client";
import img1 from "../../assets/5.png";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/hero-20.jpg";
import img4 from "../../assets/4.jpg";
import { Card } from "antd";
import Image from "next/image";
import { Col, Divider, Row } from "antd";
import styles from "./styles.module.css";
const { Meta } = Card;
export default function UpComingService() {
  return (
    <div>
      <h2 className={styles.contentHeaderStyle}>UP Coming Service</h2>

      <Row className={styles.contentRowStyle} gutter={[8, 8]}>
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<Image alt="example" src={img1} width={150} />}
          >
            {" "}
            <Meta description="Wedding Art" />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<Image alt="example" src={img2} width={200} />}
          >
            <Meta description="Wedding Accessories" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<Image alt="example" src={img3} width={140} />}
          >
            <Meta description="Wedding Design Cake" />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<Image alt="example" src={img4} width={150} />}
          >
            <Meta description="Wedding Ornaments" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
