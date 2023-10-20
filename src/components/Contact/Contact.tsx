"use client";
import { UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
export default function Contact() {
  return (
    <>
      <h2 style={{ marginTop: "3rem", textAlign: "center", fontSize: "40px" }}>
        Contact With Us
      </h2>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <Input
          size="small"
          style={{ marginTop: "3rem", width: "50rem", marginLeft: "27rem" }}
          placeholder="Contact with Us"
          prefix={<UserOutlined />}
        />
        <Button
          type="primary"
          style={{ marginTop: "3rem", marginLeft: "0.5rem" }}
        >
          Send
        </Button>
      </div>
    </>
  );
}
