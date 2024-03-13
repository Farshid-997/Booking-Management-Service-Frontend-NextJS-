"use client";
import { Row, Col, Avatar, Rate } from "antd";

import "swiper/swiper-bundle.css";

import styles from "./styles.module.css"; // Replace with your actual styles file

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={3}
      // navigation
      effect={"flip"}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      // scrollbar={{ draggable: true }}
      breakpoints={{
        360: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((key) => (
        <SwiperSlide key={key}>
          <Row className={styles.reviewRowStyle}>
            <Col xs={24} sm={12} md={12} lg={6}>
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
                  Our experience with Habibi was nothing short of magical! From
                  the first consultation to the grand finale, they executed
                  every detail flawlessly. The creativity, professionalism, and
                  dedication made our special day truly unforgettable. Thank you
                  for turning our dreams into reality!
                </p>
              </div>
            </Col>
          </Row>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Review;
