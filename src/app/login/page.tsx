"use client";
import { Button, Col, Input, Row, message } from "antd";
import loginImage from "../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/service/auth.service";
import HomePageLayout from "../(withoutlayout)/layout";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      storeUserInfo({ token: res?.token });
      if (res?.token) {
        message.success("User Login successfully!");
        router.push("/user");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <HomePageLayout>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}
      >
        <Col sm={12} md={16} lg={10}>
          <Image
            src={loginImage}
            className={styles.loginImage}
            alt="login image"
          />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1
            style={{
              margin: "15px 0px",
            }}
          >
            Login Into your account
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="email"
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>

              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form>

            <Link href="/register">
              <p style={{ marginTop: "1rem" }}>
                Already Login? Register Here..
              </p>
            </Link>
          </div>
        </Col>
      </Row>
    </HomePageLayout>
  );
};

export default LoginPage;
