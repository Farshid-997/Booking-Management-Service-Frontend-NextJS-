"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
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

export default function EditUserPage({ params }: IDProps) {
  const { role } = getUserInfo() as any;
  const { id } = params;
  const { data, isLoading } = useGetSingleUserQuery(id);
  const [updateUser] = useUpdateUserMutation();

  const defaultValues = {
    name: data?.name || "",
    username: data?.username || "",
    email: data?.email || "",
    contactNo: data?.contactNo || "",
    address: data?.address || "",
    role: data?.role || "",

    profileImg: data?.profileImg || "",
  };
  const onSubmit = async (values: { name: string }) => {
    try {
      await updateUser({ id, body: values });
      message.success("User Updated successfully!");
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
            link: `/${role}`,
          },
          {
            label: "manage-user",
            link: `/${role}/manage-user`,
          },
        ]}
      />

      <ActionBar title="Edit  User"></ActionBar>

      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={formDiv}>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput type="text" name="name" size="large" label="Name" />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="username"
              size="large"
              label="User Name"
            />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput type="text" name="email" size="large" label="email" />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="string"
              name="contactNo"
              size="large"
              label="Contact No"
            />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="address"
              size="large"
              label="Address"
            />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput type="text" name="role" size="large" label="role" />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="profileImg"
              size="large"
              label="Profile Image"
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
