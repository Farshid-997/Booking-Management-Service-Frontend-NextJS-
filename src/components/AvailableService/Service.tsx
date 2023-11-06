"use client";

import { Button, Card } from "antd";
import Image from "next/image";
import img2 from "../../assets/R (2).jpg";

import { Col, Row } from "antd";
import img1 from "../../assets/arrangement9.png";
import { useGetServiceQuery } from "@/redux/api/serviceApi";
import Link from "next/link";
import styles from "./styles.module.css";
const { Meta } = Card;

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

      <Row className={styles.serviceRowStyle} gutter={[20, 40]}>
        {data?.service?.map((service, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={
                <Image alt="example" src={img2} height={180} width={250} />
              }
            >
              <p className={styles.serviceTitle}>{service?.name}</p>
              <p className={styles.serviceDesc}>
                {service?.description.slice(0, 50)}
              </p>
              <p className={styles.pricetext}>Price:{service?.price} BDT</p>
              <Link href={`/seeDetails/${service?.id}`}>
                <button
                  className={styles.serviceBtn}
                  style={{ marginTop: "8px" }}
                >
                  See Details
                </button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
