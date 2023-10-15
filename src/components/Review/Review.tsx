"use client";
import { Col, Divider, Row, Card } from "antd";
const { Meta } = Card;
export default function Review() {
  const reviewStyle: React.CSSProperties = {
    width: "100%",
    height: "400px",
    border: "1px solid gray",
    backgroundColor: "gray",
    borderRadius: "10px",
    marginBottom: "2rem",
  };
  const mainDiv = {
    paddingLeft: "15rem",
    paddingRight: "5rem",
  };
  const contentStyle: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    marginTop: "4rem",
    fontSize: "50px",
    marginBottom: "4rem",
  };
  const rowStyle = {
    marginTop: "1rem",
    paddingLeft: "15rem",
    paddingRight: "5rem",
  };
  return (
    <div style={mainDiv}>
      <h2 style={contentStyle}>User Review</h2>
      <div style={reviewStyle}>
        <Row style={rowStyle}>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              {" "}
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>

          <Col span={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>

          <Col span={6}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
