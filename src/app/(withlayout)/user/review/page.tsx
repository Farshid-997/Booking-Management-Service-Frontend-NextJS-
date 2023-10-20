"use client";
import { SubmitHandler } from "react-hook-form";
import { Button, Col, Row, message } from "antd";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { getUserInfo } from "@/service/auth.service";

import { useCreateReviewMutation } from "@/redux/api/reviewApi";

type FormValues = {
  rating: string;
  text: string;
  userId: string;
  serviceId: string;
};

export default function AddReview() {
  const { role } = getUserInfo() as any;

  const [createReview] = useCreateReviewMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await createReview({ ...data }).unwrap();

      if (res) {
        message.success("Review Added successfully!");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const style = {
    marginTop: "3rem",
    marginLeft: "1.8rem",
  };
  const maindiv = {
    // border: "1px solid black",
    margin: "22px",
  };
  const formDiv = {
    padding: "22px",
  };

  return (
    <>
      {" "}
      <div style={maindiv}>
        <h2 style={style}>Add Review</h2>

        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={formDiv}>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="rating"
                size="large"
                label="rating"
              />
            </Col>

            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput type="text" name="text" size="large" label="text" />
            </Col>

            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="userId"
                size="large"
                label="userId"
              />
            </Col>

            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="serviceId"
                size="large"
                label="serviceId"
              />
            </Col>
          </Row>
          <Button
            htmlType="submit"
            type="primary"
            style={{ marginLeft: "25px", marginBottom: "8px" }}
            size="large"
          >
            Add
          </Button>
        </Form>
      </div>
    </>
  );
}
