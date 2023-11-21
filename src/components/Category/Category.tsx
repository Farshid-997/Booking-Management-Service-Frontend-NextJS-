"use client";

import { Avatar, Card, Col, Row } from "antd";
import img1 from "../../assets/8.jpg";
import img2 from "../../assets/3.jpg";
import img3 from "../../assets/4.jpg";
import img4 from "../../assets/img-3.jpg";
import img5 from "../../assets/img-4.jpg";
import styles from "./styles.module.css";
import Image from "next/image";
const { Meta } = Card;
export default function Category() {
  return (
    <>
      <h2 className={styles.categoryHeader}>Our Categories</h2>
      <div className={styles.headerImages}>
        <Image src={img5} alt="" className={styles.catImage}></Image>
      </div>

      <Row className={styles.categoryRowStyle}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            className={styles.catcard}
            cover={<Image alt="example" src={img1} width={200} height={200} />}
          >
            <p className={styles.catPara}>Wedding Cake</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            className={styles.catcard}
            cover={<Image alt="example" src={img4} width={200} height={200} />}
          >
            <p className={styles.catPara}>Wedding Dress</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            className={styles.catcard}
            cover={<Image alt="example" src={img2} width={162} height={200} />}
          >
            <p className={styles.catPara}>Wedding Earrings</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            className={styles.catcard}
            cover={<Image alt="example" src={img3} width={162} height={200} />}
          >
            <p className={styles.catPara}>Wedding Shoes</p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
