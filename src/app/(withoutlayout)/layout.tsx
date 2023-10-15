"use client";

import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  const paths = [
    {
      page: "Home",
      route: "/",
    },
    {
      page: "About",
      route: "/about",
    },
    {
      page: "Contact",
      route: "/contact",
    },
    {
      page: "News",
      route: "/news",
    },
    {
      page: "News_Details",
      route: "/news/1",
    },
    {
      page: "Filtered_News",
      route: "/news/details/23-Jun-2022/sports",
    },
    {
      page: "Blog",
      route: "/news/blog",
    },
    {
      page: "Article",
      route: "/news/article/sports",
    },
    {
      page: "Admin",
      route: "/admin",
    },
    {
      page: "Album",
      route: "/album",
    },
    {
      page: "Dashboard",
      route: "/dashboard",
    },
  ];
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content style={{ padding: "0 50px", width: "100%" }}>{children}</Content>

      <Footer style={{ textAlign: "center" }}>Booking Service</Footer>
    </Layout>
  );
};

export default HomePageLayout;
