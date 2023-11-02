"use client";
import { Col, Divider, Row, Card } from "antd";
import Image from "next/image";
import img1 from "../../assets/dusk12.png";
import img2 from "../../assets/shape.png";
import styles from "./styles.module.css";
import { StarOutlined } from "@ant-design/icons";
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
              cover={
                <Image
                  alt="example"
                  src={img2}
                  width={200}
                  style={{ borderRadius: "50px" }}
                />
              }
            >
              {" "}
              <Meta description="good service" />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              <Meta description="bad service" />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              <Meta description="moderate service" />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<Image alt="example" src={img2} width={200} />}
            >
              <Meta description="good service" />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
              <StarOutlined className={styles.icon} />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
