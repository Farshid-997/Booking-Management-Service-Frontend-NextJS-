"use client";

import { Layout } from "antd";
import HeaderPage from "@/components/ui/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="layout">
      <HeaderPage />
      <div className="new-content">{children}</div>

      <Footer></Footer>
    </Layout>
  );
};

export default HomePageLayout;
