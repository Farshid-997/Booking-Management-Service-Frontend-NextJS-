"use client";
import { Divider } from "antd";
import HomePageLayout from "@/app/(withoutlayout)/layout";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import { Col, Row } from "antd";
import img2 from "../../../assets/d.jpg";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";

import { StarFilled } from "@ant-design/icons";
import Link from "next/link";
type IDProps = {
  params: any;
};
function ServiceDetailsPage({ params }: IDProps) {
  const { id } = params;
  const { data, isLoading } = useGetSingleServiceQuery(id);

  return (
    <>
      <HomePageLayout>
        <h2 className={styles.header}>See the Details</h2>

        <Row
          justify="center"
          style={{
            minHeight: "100vh",
            marginTop: "3rem",
          }}
        >
          <Col sm={12} md={8} lg={8}>
            <div className={styles.imageDiv}>
              <Image src={img2} alt="" className={styles.imageData}></Image>
            </div>
          </Col>

          <Col sm={12} md={8} lg={8}>
            <div className={styles.contentDiv}>
              <h3 className={styles.contName}>{data?.name}</h3>
              <p className={styles.price}>{data?.price}BDT</p>

              <p className={styles.description}>
                {data?.description.slice(0, 300)}...
              </p>

              <Link href={`/user/service/${data?.id}`}>
                <button className={styles.bookButton}>Book the Service</button>
              </Link>

              <p className={styles.category}>Categories: {data?.category}</p>

              {/* <div className={styles.reviewStar}>
                <StarFilled style={{ fontSize: "30px" }} />
                <StarFilled style={{ fontSize: "30px", marginLeft: "1rem" }} />
                <StarFilled style={{ fontSize: "30px", marginLeft: "1rem" }} />
                <StarFilled style={{ fontSize: "30px", marginLeft: "1rem" }} />
                <StarFilled style={{ fontSize: "30px", marginLeft: "1rem" }} />
              </div> */}
            </div>
          </Col>
          <Divider />
        </Row>
      </HomePageLayout>
    </>
  );
}
export default dynamic(() => Promise.resolve(ServiceDetailsPage), {
  ssr: false,
});
