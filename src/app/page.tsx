import Image from "next/image";
import styles from "./page.module.css";
import HomePageLayout from "./(withoutlayout)/layout";

export default function Home() {
  return (
    <HomePageLayout>
      <h1>New tag</h1>
    </HomePageLayout>
  );
}
