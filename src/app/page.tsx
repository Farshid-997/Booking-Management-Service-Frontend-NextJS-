import HomePageLayout from "./(withoutlayout)/layout";
import CarouselPage from "@/components/Carousel/CarouselPage";
import Service from "@/components/AvailableService/Service";
import UpComingService from "@/components/UpComingService/UpComing";
import Review from "@/components/Review/Review";
import Category from "@/components/Category/Category";
import News from "@/components/LatestNews/News";

export default function Home() {
  return (
    <HomePageLayout>
      <CarouselPage />
      <Service />
      <UpComingService />
      <Review />
      <Category></Category>
      <News></News>
    </HomePageLayout>
  );
}
