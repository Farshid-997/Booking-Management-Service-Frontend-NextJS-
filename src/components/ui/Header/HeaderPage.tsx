"use client";
const { Header } = Layout;
import {
  MenuOutlined,
  PhoneOutlined,
  DashboardOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";
import { BsCart4 } from "react-icons/bs";
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
  const router = useRouter();

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const { role } = getUserInfo() as any;
  return (
    <>
      <Header className={styles.headerStyle}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            style={{ marginTop: "2rem" }}
          />
        </Link>

        <Menu
          style={{
            backgroundColor: "white",
          }}
          mode="horizontal"
        >
          <BsCart4 className={styles.headerCartIcon} />

          {isLoggedIn() ? (
            <Avatar
              style={{
                backgroundColor: "#87d068",
                marginTop: "1.3rem",
                cursor: "pointer",
              }}
              icon={<UserOutlined />}
              onClick={logout}
              size="small"
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
