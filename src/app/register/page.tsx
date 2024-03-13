"use client";
import { Button, Col, Input, Row, message } from "antd";
import loginImage from "../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import HomePageLayout from "../(withoutlayout)/layout";
import { useUserRegisterMutation } from "@/redux/api/authApi";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

type FormValues = {
  name: string;
  email: string;
  username: string;
  // role: string;
  contactNo: string;
  password: string;
  address: string;
};

const RegisterPage = () => {
  const router = useRouter();
  const [userRegister] = useUserRegisterMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userRegister({ ...data }).unwrap();
      console.log(res);
      if (res?.id) {
        router.push("/login");
        message.success("User Registered successfully!");
      }
      //  storeUserInfo({ data: res?.data });
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <HomePageLayout>
      {" "}
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}
      >
        <Col sm={12} md={16} lg={10}>
          <Image src={loginImage} width={500} alt="login image" />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1
            style={{
              margin: "15px 0px",
            }}
          >
            First Register into your account
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div
                style={{
                  margin: "15px 0px ",
                }}
              >
                <FormInput name="name" type="text" size="large" label="name" />
              </div>

              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="email"
                />
              </div>

              {/* <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput name="role" type="text" size="large" label="role" />
              </div> */}

              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="contactNo"
                  type="text"
                  size="large"
                  label="contactNo"
                />
              </div>

              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="address"
                  type="text"
                  size="large"
                  label="address"
                />
              </div>

              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="username"
                  type="text"
                  size="large"
                  label="username"
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
                Register
              </Button>

              <Link href="/login">
                <p style={{ marginTop: "1rem" }}>
                  Already SignUp? Login Here..
                </p>
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </HomePageLayout>
  );
};

export default RegisterPage;
