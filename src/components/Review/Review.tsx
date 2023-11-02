"use client";
import { Col, Divider, Row, Card } from "antd";
import Image from "next/image";
import img1 from "../../assets/dusk12.png";
import img2 from "../../assets/shape.png";
import styles from "./styles.module.css";
const { Meta } = Card;
export default function Review() {
  return (
    <div>
      <Image src={img1} alt="" className={styles.reviewHeaderImage}></Image>
      <h2 className={styles.reviewHeader}>User Review</h2>

      <div>
        <Row className={styles.reviewRowStyle} gutter={[8, 8]}>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              {" "}
              <Meta
                title="5 star rating of weeding planer service"
                description="good service"
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              <Meta
                title="3.8 star rating of weeding planer service"
                description="bad service"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              <Meta
                title="4.0 star rating of weeding planer service"
                description="moderate service"
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              <Meta
                title="4.5 star rating of weeding planer service"
                description="good service"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
