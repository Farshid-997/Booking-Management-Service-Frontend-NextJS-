"use client";
import img1 from "../../assets/5.png";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/9.jpg";
import img4 from "../../assets/hand.jpg";
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
            style={{ width: 300 }}
            cover={
              <Image
                alt="example"
                src={img1}
                width={250}
                className={styles.cardImage}
              />
            }
          >
            {" "}
            <Meta description="Wedding Art" />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <Image
                alt="example"
                src={img2}
                width={320}
                className={styles.cardImage}
              />
            }
          >
            <Meta description="Wedding Accessories" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <Image
                alt="example"
                src={img3}
                width={320}
                className={styles.cardImage}
              />
            }
          >
            <Meta description="Wedding Design Cake" />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <Image
                alt="example"
                src={img4}
                width={230}
                className={styles.cardImage}
              />
            }
          >
            <Meta description="Wedding Ornaments" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
