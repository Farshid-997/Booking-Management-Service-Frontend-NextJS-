"use client";
import { Col, Layout, Row } from "antd";
import Image from "next/image";

import img1 from "../../assets/flower-shape1.svg";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import HeaderPage from "@/components/ui/Header/HeaderPage";

const { Content, Footer } = Layout;

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  const footerStyle = {
    backgroundColor: "#9AA497",
    marginTop: "5rem",
    height: "auto",
  };
  const list = {
    listStyleType: "none",
    fontSize: "15px",
    color: "black",
    padding: "10px",
  };
  const list1 = {
    marginBottom: "1rem",
  };

  const icon1 = {
    marginLeft: "1px",
    width: "20px",
    color: "purple",
    height: "20px",
  };

  return (
    <Layout className="layout">
      <HeaderPage />
      <Content style={{ height: "auto" }}>{children}</Content>

      <Footer style={footerStyle}>
        <Row gutter={20}>
          <Col>
            <Image src={img1} alt="" width={160} height={160}></Image>
          </Col>
          <Col>
            <ul style={list}>
              <li style={list1}>About us</li>
              <li style={list1}>Contact Us</li>
              <li style={list1}>Photograpy</li>
              <li style={list1}>More</li>
            </ul>
          </Col>

          <Col>
            <ul style={list}>
              <li style={list1}>Events</li>
              <li style={list1}>Reviews</li>
              <li style={list1}>Discount</li>
              <li style={list1}>Story</li>
            </ul>
          </Col>
        </Row>

        <div style={{ marginLeft: "12rem" }}>
          <FacebookOutlined style={icon1} />
          <InstagramOutlined style={icon1} />
          <TwitterOutlined style={icon1} />
        </div>
      </Footer>
    </Layout>
  );
};

export default HomePageLayout;
