import HomePageLayout from "./(withoutlayout)/layout";
import CarouselPage from "@/components/Carousel/CarouselPage";
import Service from "@/components/AvailableService/Service";
import UpComingService from "@/components/UpComingService/UpComing";
import Review from "@/components/Review/Review";

export default function Home() {
  return (
    <HomePageLayout>
      <CarouselPage />
      <Service />
      <UpComingService />
      <Review />
    </HomePageLayout>
  );
}
