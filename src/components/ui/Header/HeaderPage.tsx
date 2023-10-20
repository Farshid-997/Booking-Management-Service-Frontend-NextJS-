"use client";
const { Header } = Layout;
import {
  MenuOutlined,
  PhoneOutlined,
  DashboardOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../../assets/shape.png";
import Image from "next/image";
import { Avatar, Layout, Menu } from "antd";
import Link from "next/link";
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "@/service/auth.service";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/storageKey";
const { SubMenu } = Menu;
export default function HeaderPage() {
  const headerStyle = {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const router = useRouter();

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const { role } = getUserInfo() as any;
  return (
    <>
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
          {/* <ShoppingCartOutlined
            style={{ cursor: "pointer" }}
            twoToneColor="#eb2f96"
            height={50}
          /> */}

          {isLoggedIn() ? (
            <Avatar
              style={{
                backgroundColor: "#87d068",
                margin: "1rem",
                cursor: "pointer",
              }}
              icon={<UserOutlined />}
              onClick={logout}
            />
          ) : (
            <Menu.Item key="home" icon={<LoginOutlined />}>
              <Link href="/login">Login</Link>
            </Menu.Item>
          )}

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
    </>
  );
}
