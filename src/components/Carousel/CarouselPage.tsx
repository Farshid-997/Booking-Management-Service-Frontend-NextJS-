"use client";
import { Carousel } from "antd";
import img1 from "../../assets/bannerimg.jpg";
import img2 from "../../assets/bannerimg2.jpg";
import img3 from "../../assets/bannerimg3.jpg";
import Image from "next/image";
const contentStyle: React.CSSProperties = {
  color: "#fff",
  position: "absolute",
  top: "150px",
  fontSize: "50px",
  marginLeft: "10rem",
};

const contentStyle1: React.CSSProperties = {
  color: "#fff",
  position: "absolute",
  top: "150px",
  fontSize: "50px",
  marginLeft: "10rem",
};

const contentStyle2: React.CSSProperties = {
  color: "#fff",
  position: "absolute",
  top: "150px",
  fontSize: "50px",
  marginLeft: "10rem",
};
const CarouselPage = () => (
  <Carousel autoplay effect="fade" style={{ width: "100%", border: "none" }}>
    <div>
      <Image
        src={img1}
        alt="imag1 banner"
        style={{ width: "100%", height: "500px" }}
      ></Image>

      <h3 style={contentStyle}>Book Your Service Now!</h3>
    </div>
    <div>
      <Image
        src={img2}
        alt="img2 banner"
        style={{ width: "100%", height: "500px" }}
      ></Image>

      <h3 style={contentStyle1}>Make your events memorable!</h3>
    </div>
    <div>
      <Image
        src={img3}
        alt="img3 banner"
        style={{ width: "100%", height: "500px" }}
      ></Image>
      <h3 style={contentStyle2}>You can contact with us!</h3>
    </div>
  </Carousel>
);

export default CarouselPage;
