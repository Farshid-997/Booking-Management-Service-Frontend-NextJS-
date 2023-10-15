"use client";
import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  MenuOutlined,
  PhoneOutlined,
  DashboardOutlined,
  LoginOutlined,
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
              style={{ marginTop: "16px" }}
            />
          </Link>
        </div>
        <Menu
          style={{
            backgroundColor: "white",
          }}
          mode="horizontal"
        >
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
      <Footer style={{ textAlign: "center" }}>Booking Service 2023</Footer>
    </Layout>
  );
};

export default HomePageLayout;
