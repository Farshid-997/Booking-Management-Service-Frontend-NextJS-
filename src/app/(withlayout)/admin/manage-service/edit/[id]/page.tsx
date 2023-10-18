"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import { getUserInfo } from "@/service/auth.service";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const maindiv = {
  margin: "25px",
};
const formDiv = {
  padding: "25px",
};

export default function EditServicePage({ params }: IDProps) {
  const { role } = getUserInfo() as any;
  const { id } = params;
  const { data, isLoading } = useGetSingleServiceQuery(id);
  const [updateService] = useUpdateServiceMutation();

  const defaultValues = {
    name: data?.name || "",
    description: data?.description || "",
    price: data?.price || "",
    location: data?.location || "",
    category: data?.category || "",
    availability: data?.availability || "",
  };
  const onSubmit = async (values: { name: string }) => {
    try {
      await updateService({ id, body: values });
      message.success("Service Updated successfully!");
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <div style={maindiv}>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: `/${role}/admin`,
          },
          {
            label: "add-service",
            link: `/${role}/add-service`,
          },
        ]}
      />

      <ActionBar title="Edit  Service"></ActionBar>

      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={formDiv}>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput type="text" name="name" size="large" label="name" />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="description"
              size="large"
              label="description"
            />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput type="number" name="price" size="large" label="price" />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="location"
              size="large"
              label="location"
            />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="category"
              size="large"
              label="category"
            />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
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
          Update
        </Button>
      </Form>
    </div>
  );
}
