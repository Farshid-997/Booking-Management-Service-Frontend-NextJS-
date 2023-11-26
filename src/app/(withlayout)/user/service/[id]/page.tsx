"use client";
import { SubmitHandler } from "react-hook-form";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button, Col, Row, message } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import { useCreateBookingMutation } from "@/redux/api/bookingApi";
import { getUserInfo } from "@/service/auth.service";
type FormValues = {
  userId: string;
  serviceId: string;
  date: Date;
  staus: string;
  customerAddress: string;
  phone: string;
};

type IDProps = {
  params: any;
};
export default function Booking({ params }: IDProps) {
  const { id } = params;
  const { userId } = getUserInfo() as any;

  const [createBooking] = useCreateBookingMutation();
  const router = useRouter();

  const style = {
    marginTop: "3rem",
    marginLeft: "1.8rem",
  };
  const maindiv = {
    margin: "22px",
  };
  const formDiv = {
    padding: "22px",
  };
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await createBooking({
        ...data,
        userId: userId,
        serviceId: id,
      }).unwrap();

      if (res) {
        message.success("Booking Added successfully!");
        router.push("/user/payment");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <div style={maindiv}>
      <h1 style={style}>Add Bookings </h1>

      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={formDiv}>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput type="date" name="date" size="large" label="date" />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="customerAddress"
              size="large"
              label="address"
            />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput type="text" name="phone" size="large" label="phone" />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput type="text" name="status" size="large" label="status" />
          </Col>
        </Row>
        <Button
          htmlType="submit"
          type="primary"
          style={{ marginLeft: "25px", marginBottom: "8px" }}
          size="large"
        >
          Book your service
        </Button>
      </Form>
    </div>
  );
}
