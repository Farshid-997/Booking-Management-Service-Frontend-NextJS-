"use client";
import { Col, Row, Card } from "antd";
import Image from "next/image";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";
import { useState } from "react";
import styles from "./styles.module.css";
const { Meta } = Card;
export default function News() {
  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    transition: "filter 0.3s",
    filter: isHovered ? "grayscale(100%)" : "grayscale(0%)",
  };

  return (
    <div>
      <h1 className={styles.newsHeader}>Our Latest Wedding News</h1>

      <Row className={styles.rowNewsStyle}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            hoverable
            // style={{ width: 250 }}
            className={styles.reviewCard}
            cover={<Image alt="example" src={img1} width={200} height={200} />}
          >
            {" "}
            <p className={styles.newsPara}>By Aliana de 21 Sep 2023</p>
            <p className={styles.newsPara1}>
              Make sure your wedding gown is the best one.
            </p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            hoverable
            // style={{ width: 250 }}
            className={styles.reviewCard}
            cover={
              <Image
                alt="example"
                src={img2}
                style={imageStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                width={200}
                height={200}
              />
            }
          >
            <p className={styles.newsPara}>By David Luis 23 Sep 2023</p>
            <p className={styles.newsPara1}>
              You must need a great photographer.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            hoverable
            // style={{ width: 250 }}
            className={styles.reviewCard}
            cover={<Image alt="example" src={img3} width={200} height={200} />}
          >
            {" "}
            <p className={styles.newsPara}>By Robertson Doe 25 Sep 2023</p>
            <p className={styles.newsPara1}>
              Top 10 wedding bouquet arranging idea
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
