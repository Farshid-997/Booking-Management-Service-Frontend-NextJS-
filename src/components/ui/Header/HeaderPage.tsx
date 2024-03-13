"use client";

import { SearchOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../assets/shape.png";
import Image from "next/image";
import { Button, Menu } from "antd";
import Link from "next/link";
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "@/service/auth.service";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/storageKey";
import { useState } from "react";

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
              className={styles.logo}
            />
          </Link>

          <h6 style={{ marginTop: "1rem" }} className={styles.headName}>
            Habibi
          </h6>
        </div>

        <div className={styles.hamburgericon} onClick={toggleMenu}>
          <RxHamburgerMenu />
        </div>

        <div className={styles.contentMenu}>
          {isLoggedIn() ? (
            <Button onClick={logout} className={styles.logoutButton}>
              Logout
            </Button>
          ) : (
            <Link href="/login" className={styles.text1}>
              Login
            </Link>
          )}

          <Link
            href={`/${role}`}
            // style={{ marginLeft: "3rem", color: "black" }}
            className={styles.text2}
          >
            Dashboard
          </Link>

          {/* <SearchOutlined className={styles.searchIcon} /> */}
        </div>
      </div>
    </>
  );
}
