"use client";

import { Card } from "antd";
import Image from "next/image";
import img2 from "../../assets/R (2).jpg";

import { Col, Row } from "antd";
import img1 from "../../assets/arrangement9.png";
import { useGetServiceQuery } from "@/redux/api/serviceApi";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Service() {
  const query: Record<string, any> = {};
  const { data, isLoading } = useGetServiceQuery({ ...query });

  return (
    <div>
      <Image
        src={img1}
        alt="service-header-image"
        className={styles.serviceHeaderImage}
      ></Image>
      <h2 className={styles.contentHeader}>Available Service</h2>

      <Row className={styles.serviceRowStyle}>
        {data?.service?.map((service, index) => (
          <Col xs={24} sm={12} md={12} lg={6} key={index}>
            <Card
              hoverable
              className={styles.serviceCard}
              cover={
                <Image
                  alt="example"
                  src={service?.image}
                  height={180}
                  width={280}
                />
              }
            >
              <p className={styles.serviceTitle}>{service?.name}</p>

              <p className={styles.pricetext}>Price:{service?.price} BDT</p>

              <Row>
                <Col xs={24} sm={12} md={12} lg={6} key={index}>
                  <Link href={`/seeDetails/${service?.id}`}>
                    <button
                      className={styles.serviceBtn}
                      style={{ marginTop: "8px", cursor: "pointer" }}
                    >
                      See Details
                    </button>
                  </Link>
                </Col>

                {/* <Col xs={24} sm={12} md={12} lg={6} key={index}>
                  <Link href={`/user/service/${service?.id}`}>
                    <BsFillCartCheckFill className={styles.cartIcon} />
                  </Link>
                </Col> */}
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
