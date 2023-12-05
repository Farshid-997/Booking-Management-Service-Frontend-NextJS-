"use client";
import { Col, Row, Avatar, Rate } from "antd";

import styles from "./styles.module.css";
import { useGetReviewQuery } from "@/redux/api/reviewApi";

export default function Review() {
  const query: Record<string, any> = {};
  const { data, isLoading } = useGetReviewQuery({ ...query });

  return (
    <>
      <h2 className={styles.reviewHeader}>User Review</h2>
      <section className="bg-white">
        <div className="">
          <Row className={styles.reviewRowStyle}>
            {[1, 2, 3, 4].map((key) => (
              <Col key={key} xs={24} sm={12} md={12} lg={6}>
                <div className={styles.reviewCard}>
                  <Row align="middle" justify="start">
                    <Col>
                      <Avatar
                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        size={56}
                      />
                    </Col>
                    <Col>
                      <div>
                        <Rate allowHalf defaultValue={5} />
                      </div>
                      <p className="ms-2">Paul Starr</p>
                    </Col>
                  </Row>

                  <p className={styles.reviewPara}>
                    Our experience with Habibi was nothing short of magical!
                    From the first consultation to the grand finale, they
                    executed every detail flawlessly. The creativity,
                    professionalism, and dedication made our special day truly
                    unforgettable. Thank you for turning our dreams into
                    reality!
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}
