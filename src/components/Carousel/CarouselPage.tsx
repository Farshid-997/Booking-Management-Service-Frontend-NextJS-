"use client";
import { Carousel } from "antd";
import img1 from "../../assets/bannerimg.jpg";
import img2 from "../../assets/bannerimg1.jpg";
import img3 from "../../assets/bannerimg2.jpg";
import Image from "next/image";
const contentStyle: React.CSSProperties = {
  color: "white",
  position: "absolute",
  top: "380px",
  fontSize: "50px",
  marginLeft: "10rem",
  fontWeight: 600,
};

const contentStyle1: React.CSSProperties = {
  color: "white",
  position: "absolute",
  top: "380px",
  fontSize: "50px",
  marginLeft: "10rem",
  fontWeight: 600,
};
// const imageStyle = {
//   width: "100%",
//   height: "550px",
// };

const contentStyle2: React.CSSProperties = {
  color: "white",
  position: "absolute",
  top: "380px",
  fontSize: "50px",
  marginLeft: "10rem",
  fontWeight: 600,
};
const CarouselPage = () => (
  <Carousel autoplay effect="fade" style={{ width: "100%", border: "none" }}>
    <div>
      <Image
        src={img1}
        alt="imag1 banner"
        style={{ objectFit: "cover" }}
      ></Image>

      <h3 style={contentStyle}>Book Your Service Now!</h3>
    </div>
    <div>
      <Image
        src={img2}
        alt="img2 banner"
        style={{ objectFit: "cover" }}
      ></Image>

      <h3 style={contentStyle1}>Make your events memorable!</h3>
    </div>
    <div>
      <Image
        src={img3}
        alt="img3 banner"
        style={{ objectFit: "cover" }}
      ></Image>
      <h3 style={contentStyle2}>You can contact with us!</h3>
    </div>
  </Carousel>
);

export default CarouselPage;
