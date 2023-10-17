"use client";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Col, Row, message } from "antd";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { getUserInfo } from "@/service/auth.service";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useCreateServiceMutation } from "@/redux/api/serviceApi";

type FormValues = {
  name: string;
  description: string;
  location: string;
  price: number;
  availability: boolean;
};

export default function AddService() {
  const methods = useForm<FormValues>();
  const { role } = getUserInfo() as any;
  const { handleSubmit } = methods;
  const [createService] = useCreateServiceMutation();
  const onSubmit = async (data: FormValues) => {
    try {
      const res = await createService({ ...data }).unwrap();

      if (res?.id) {
        message.success("Service Created successfully!");
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
    margin: "25px",
  };
  const formDiv = {
    padding: "25px",
  };

  return (
    <>
      {" "}
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: "manage-user",
            link: `/${role}/manage-user`,
          },
          {
            label: "admin",
            link: `/${role}/admin`,
          },
        ]}
      />
      <div style={maindiv}>
        <h2 style={style}>Add Services</h2>

        <Form submitHandler={handleSubmit(onSubmit)}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={formDiv}>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput type="text" name="name" size="large" label="name" />
            </Col>

            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="description"
                size="large"
                label="description"
              />
            </Col>

            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="number"
                name="price"
                size="large"
                label="price"
              />
            </Col>

            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="location"
                size="large"
                label="location"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="availability"
                size="large"
                label="availability"
              />
            </Col>
          </Row>
          <Button
            htmlType="submit"
            type="primary"
            style={{ marginLeft: "25px", marginBottom: "8px" }}
            size="large"
          >
            Create
          </Button>
        </Form>
      </div>
    </>
  );
}
