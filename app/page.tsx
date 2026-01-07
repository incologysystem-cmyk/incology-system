import Slider from "./Component/Slider";
import TestimonialSection from "./Component/TestimonialSection";
import AllFeatureSection from "./Component/AllFeatureSection";
import ProcessSection from "./Component/ProcessSection";
import ComparisionSection from "./Component/ComparisionSection";
import ReachOut from "./Component/ReachOut";
import ServiceSection from "./Component/ServiceSection";
import FAQSection from "./Component/FAQsection";
import Integrations from "./Component/Integrations";
import BenefitsSection from "./Component/Benefit";
import TeamSection from "./Component/OurAmazinteam";
import Carousel from "./Component/Carousel";
import WordpressSection from "./Component/Wordpressportfolio";
import MernSection from "./Component/Mernportfolio";
import MobileSection from "./Component/Mobileportfolio";

function Home() {
  return (
    <>
      <Slider />
      <TestimonialSection />
      <MernSection />
      <WordpressSection />
      <MobileSection />
      <BenefitsSection />
      <ServiceSection />
      <AllFeatureSection />
      <ProcessSection />
      <Carousel />
      <Integrations />
      {/* <ReviewSection /> */}
      <FAQSection />
      <ComparisionSection />
      <TeamSection />
      <ReachOut />
    </>
  );
}

export default Home
