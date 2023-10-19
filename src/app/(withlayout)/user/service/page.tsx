"use client";
import { SubmitHandler } from "react-hook-form";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button, Col, Row, message } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import { useCreateBookingMutation } from "@/redux/api/bookingApi";
type FormValues = {
  userId: string;
  serviceId: string;
  date: string;
  staus: string;
};
export default function Booking() {
  const [createBooking] = useCreateBookingMutation();
  const router = useRouter();
  router.push("/user/payment");
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
      const res = await createBooking({ ...data }).unwrap();

      if (res) {
        message.success("Booking Added successfully!");
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
            <FormInput type="text" name="userId" size="large" label="UserID" />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="serviceId"
              size="large"
              label="ServiceID"
            />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput type="text" name="date" size="large" label="date" />
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
          Add your service
        </Button>
      </Form>
    </div>
  );
}
