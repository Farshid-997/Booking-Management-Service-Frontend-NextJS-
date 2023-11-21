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

      <Row className={styles.contentRowStyle}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            hoverable
            // style={{ width: 300 }}
            className={styles.upcard}
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
            <p className={styles.cardPara}> Wedding Art</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            // style={{ width: 300 }}
            className={styles.upcard}
            cover={
              <Image
                alt="example"
                src={img2}
                width={327}
                className={styles.cardImage}
              />
            }
          >
            <p className={styles.cardPara}> Wedding Accessories</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            // style={{ width: 300 }}
            className={styles.upcard}
            cover={
              <Image
                alt="example"
                src={img3}
                width={320}
                className={styles.cardImage}
              />
            }
          >
            <p className={styles.cardPara}> Wedding Design Cake</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            hoverable
            // style={{ width: 300 }}
            className={styles.upcard}
            cover={
              <Image
                alt="example"
                src={img4}
                width={238}
                className={styles.cardImage}
              />
            }
          >
            <p className={styles.cardPara}> Wedding Ornaments</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
