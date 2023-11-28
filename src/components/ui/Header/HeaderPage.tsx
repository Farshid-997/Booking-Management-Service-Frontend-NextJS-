"use client";
const { Header } = Layout;
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

import logo from "../../../assets/shape.png";
import Image from "next/image";
import { Avatar, Button, Layout, Menu } from "antd";
import Link from "next/link";
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "@/service/auth.service";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/storageKey";
import { useState } from "react";
const { SubMenu } = Menu;
export default function HeaderPage() {
  const router = useRouter();
  const [menuActive, setMenuActive] = useState(false);
  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const { role } = getUserInfo() as any;

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.logoContent}>
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              style={{ marginTop: "1.4rem" }}
            />
          </Link>

          <h6 style={{ marginTop: "1rem" }}>Habibi</h6>
        </div>

        <MenuOutlined
          className={`hamburgericon ${styles.hamburgericon}`}
          onClick={toggleMenu}
        />

        <div className={styles.contentMenu}>
          {isLoggedIn() ? (
            <Button onClick={logout} className={styles.logoutButton}>
              Logout
            </Button>
          ) : (
            <p
              style={{
                marginLeft: "4rem",
                marginRight: "2rem",
                color: "black",
              }}
            >
              <Link href="/login" className={styles.text1}>
                Login
              </Link>
            </p>
          )}

          <Link
            href={`/${role}`}
            style={{ marginLeft: "3rem", color: "black" }}
            className={styles.text2}
          >
            Dashboard
          </Link>

          <Link
            href="/contact"
            style={{ marginLeft: "3rem", marginRight: "2rem", color: "black" }}
            className={styles.text3}
          >
            Contact Us
          </Link>

          <SearchOutlined
            style={{ cursor: "pointer", marginRight: "3rem" }}
            className={styles.searchIcon}
          />
        </div>
      </div>
    </>
  );
}
