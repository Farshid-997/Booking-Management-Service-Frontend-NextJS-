import HomePageLayout from "./(withoutlayout)/layout";
import CarouselPage from "@/components/Carousel/CarouselPage";
import Service from "@/components/AvailableService/Service";
import UpComingService from "@/components/UpComingService/UpComing";
import Review from "@/components/Review/Review";
import Category from "@/components/Category/Category";
import News from "@/components/LatestNews/News";
import dynamic from "next/dynamic";
import Contact from "@/components/Contact/Contact";
import Invite from "./../components/Invite/Invite";

function Home() {
  return (
    <HomePageLayout>
      <CarouselPage />
      <Service />
      <UpComingService />
      <Review />
      <Category></Category>
      <News></News>
      <Invite />
      {/* <Contact></Contact> */}
    </HomePageLayout>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
