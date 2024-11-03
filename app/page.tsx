import Image from "next/image";
import HeroSection from "./components/hero";
import WhyChooseUs from "./components/ChooseUs";
import HowItWorks from "./components/learning";
import CustomerReviews from "./components/CustomerReviews";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <CustomerReviews />
    </div>
  );
}
