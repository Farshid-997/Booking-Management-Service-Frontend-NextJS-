"use client";

import { Button, Card } from "antd";
import Image from "next/image";
import img2 from "../../assets/R (2).jpg";
import { Col, Row } from "antd";
import img1 from "../../assets/arrangement9.png";
import { useGetServiceQuery } from "@/redux/api/serviceApi";
import Link from "next/link";
const { Meta } = Card;
export default function Service() {
  const query: Record<string, any> = {};
  const { data, isLoading } = useGetServiceQuery({ ...query });

  const contentStyle: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "50px",
  };

  const rowStyle = {
    marginTop: "4rem",
    paddingLeft: "15rem",
    paddingRight: "5rem",
    marginBottom: "4rem",
  };
  return (
    <div>
      <Image
        src={img1}
        alt=""
        style={{ marginLeft: "48rem", marginTop: "3rem" }}
      ></Image>
      <h2 style={contentStyle}>Available Service</h2>

      <Row style={rowStyle}>
        {data?.service.map((service, index) => (
          <Col span={6} key={index}>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={
                <Image alt="example" src={img2} height={180} width={250} />
              }
            >
              <Meta
                title={service?.name}
                description={service?.description.slice(0, 50)}
              />
              <p style={{ fontWeight: "bold", color: "blue" }}>
                Price:{service?.price} BDT
              </p>
              <Link href={`/seeDetails/${service?.id}`}>
                <Button type="primary" style={{ marginTop: "8px" }}>
                  See Details
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
