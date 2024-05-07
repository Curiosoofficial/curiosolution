import BenefitSection from "@/components/HomePage/BenefitSection";
import CardSection from "@/components/HomePage/CardSection";
import HeroSection from "@/components/HomePage/HeroSection";
import HowSection from "@/components/HomePage/HowSection";
import NewsletterSection from "@/components/HomePage/NewsletterSection";



export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <CardSection/>
      <BenefitSection/>
      <HowSection/>
      <NewsletterSection/>
    </main>
  );
}
