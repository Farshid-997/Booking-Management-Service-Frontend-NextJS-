"use client";
import { Col, Row } from "antd";
import styles from "./styles.module.css";

export default function Invite() {
  return (
    <>
      <h1 className={styles.comingHeader}>Our Coming Events</h1>
      <Row gutter={[16, 16]} className={styles.rowComingStyles}>
        <Col xs={24} sm={12} md={6}>
          <div className={styles.inviteDiv}></div>

          <button className={styles.btnEvents}>The Reception</button>
          <p className={styles.eventsPara}>
            Monday, 12 Apr. 2022 <br></br> 1:00 PM – 2:30 PM 4517 Washington
            Ave. <br></br> Manchester, Kentucky 39495 +1 234-567-8910 See
            Location
          </p>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <div className={styles.inviteDiv1}></div>

          <button className={styles.btnEvents}>The Engagement</button>
          <p className={styles.eventsPara}>
            Monday, 12 Apr. 2022 <br></br> 1:00 PM – 2:30 PM 4517 Washington
            Ave. <br></br> Manchester, Kentucky 39495 +1 234-567-8910 See
            Location
          </p>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <div className={styles.inviteDiv2}></div>

          <button className={styles.btnEvents}>The Wedding</button>
          <p className={styles.eventsPara}>
            Monday, 12 Apr. 2022 <br></br> 1:00 PM – 2:30 PM 4517 Washington
            Ave. <br></br> Manchester, Kentucky 39495 +1 234-567-8910 See
            Location
          </p>
        </Col>
      </Row>
    </>
  );
}
