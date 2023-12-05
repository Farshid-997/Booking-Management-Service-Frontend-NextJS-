"use client";
import { Col, Row } from "antd";
import img1 from "../../assets/planner-shop-dress-1.png";

import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const CarouselPage = () => (
  <Row>
    <Col xs={24} sm={12} md={6} xl={12}>
      {/* <p className={styles.para1}>Offeres are Coming!!</p> */}

      <p className={styles.para}>
        Making Your dream Long Lasting.We are Happy to see you here. We must
        want that your dreamy wedding will made with us!
      </p>

      <Link href="/user">
        <button className={styles.purchaseButton}>Purchase Now</button>
      </Link>
    </Col>

    <Col xs={24} sm={12} md={6} xl={12}>
      <Image src={img1} alt="" className={styles.heroImage}></Image>
    </Col>
  </Row>
);

export default CarouselPage;
