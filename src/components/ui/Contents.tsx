"use client";
import { Layout } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "gray",
      }}
    >
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: "user",
            link: `/${base}/user`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
