"use client";
import { Button, Card } from "antd";
import HomePageLayout from "@/app/(withoutlayout)/layout";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import { Col, Row } from "antd";
import img2 from "../../../assets/R (2).jpg";
import img1 from "../../../assets/dusk12.png";

import dynamic from "next/dynamic";
import Image from "next/image";
type IDProps = {
  params: any;
};
function ServiceDetailsPage({ params }: IDProps) {
  const { id } = params;
  const { data, isLoading } = useGetSingleServiceQuery(id);

  const header: React.CSSProperties = {
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "50px",
    textDecoration: "underline",
  };

  const content: React.CSSProperties = {
    fontSize: "25px",
    color: "green",
  };

  return (
    <>
      <HomePageLayout>
        <h2 style={header}>See the Details</h2>

        <Row
          justify="center"
          style={{
            minHeight: "100vh",
            marginTop: "3rem",
          }}
        >
          <Col sm={12} md={8} lg={8}>
            <Card
              hoverable
              style={{ width: 250, objectFit: "cover" }}
              cover={
                <Image alt="example" src={img2} height={250} width={250} />
              }
            ></Card>
          </Col>

          <Col sm={12} md={8} lg={8}>
            <Card hoverable style={{ width: 550 }}>
              <p style={content}>Service name:{data?.name}</p>
              <p style={content}>Category:{data?.category}</p>
              <p style={content}>Price:{data?.price}</p>
              <Button type="primary">Book the Service</Button>

              <Image src={img1} alt="" style={{ marginLeft: "10rem" }}></Image>
            </Card>
          </Col>
        </Row>

       
      </HomePageLayout>
    </>
  );
}
export default dynamic(() => Promise.resolve(ServiceDetailsPage), {
  ssr: false,
});
