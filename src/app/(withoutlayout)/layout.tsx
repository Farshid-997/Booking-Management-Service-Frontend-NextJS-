"use client";
import { Col, Layout, Menu, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/flower-shape1.svg";
import {
  MenuOutlined,
  PhoneOutlined,
  DashboardOutlined,
  LoginOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons"; // Import icons
import logo from "../../assets/MainLogo.png";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  const headerStyle = {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

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
      <Header style={headerStyle}>
        <div className="demo-logo">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={60}
              height={60}
              style={{ marginTop: "18px" }}
            />
          </Link>
        </div>
        <Menu
          style={{
            backgroundColor: "white",
          }}
          mode="horizontal"
        >
          <ShoppingCartOutlined />
          <Menu.Item key="home" icon={<LoginOutlined />}>
            <Link href="/">Login</Link>
          </Menu.Item>

          <SubMenu key="more" icon={<MenuOutlined />} title="More">
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
              <Link href="/user">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="contact" icon={<PhoneOutlined />}>
              <Link href="/contact">Contact Us</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
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
