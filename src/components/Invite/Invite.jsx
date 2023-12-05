"use client";
import { Col, Row } from "antd";
import styles from "./styles.module.css";

export default function Invite() {
  return (
    <>
      <h1 className={styles.comingHeader}>Our Coming Events</h1>
      <Row className={styles.rowComingStyles}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <div className={styles.inviteDiv}></div>

          <button className={styles.btnEvents}>The Reception</button>
          <p className={styles.eventsPara}>
            Monday, 12 Apr. 2022 1:00 PM – 2:30 PM 4517 Washington Ave.
            Manchester, Kentucky 39495 +1 234-567-8910 See Location
          </p>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <div className={styles.inviteDiv1}></div>

          <button className={styles.btnEvents1}>The Engagement</button>
          <p className={styles.eventsPara1}>
            Monday, 12 Apr. 2022 1:00 PM – 2:30 PM 4517 Washington Ave.
            Manchester, Kentucky 39495 +1 234-567-8910 See Location
          </p>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <div className={styles.inviteDiv2}></div>

          <button className={styles.btnEvents2}>The Wedding</button>
          <p className={styles.eventsPara2}>
            Monday, 12 Apr. 2022 1:00 PM – 2:30 PM 4517 Washington Ave.
            Manchester, Kentucky 39495 +1 234-567-8910
          </p>
        </Col>
      </Row>
    </>
  );
}
