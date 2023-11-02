"use client";

import { Avatar, Card, Col, Row } from "antd";
import img1 from "../../assets/arrangement9.png";
import img2 from "../../assets/img-1.jpg";
import img3 from "../../assets/dusk12.png";
import img4 from "../../assets/img-3.jpg";
import styles from "./styles.module.css";
import Image from "next/image";
const { Meta } = Card;
export default function Category() {
  return (
    <>
      <h2 className={styles.categoryHeader}>Our Categories</h2>
      <div className={styles.mainContainerCatDiv}>
        <div className={styles.categoryMainDiv}>
          <Row className={styles.categoryRowStyle} gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                style={{ width: 250 }}
                cover={<Image alt="example" src={img1} />}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Service Cartegory"
                  description="This new edition of our service category"
                />
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                style={{ width: 250 }}
                cover={<Image alt="example" src={img4} width={170} />}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Service Cartegory"
                  description="Todays launching"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                style={{ width: 250 }}
                cover={<Image alt="example" src={img2} width={170} />}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Service Cartegory"
                  description="Today's launching"
                />
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                style={{ width: 250 }}
                cover={<Image alt="example" src={img3} width={250} />}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Service Cartegory"
                  description="Best Seller"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
