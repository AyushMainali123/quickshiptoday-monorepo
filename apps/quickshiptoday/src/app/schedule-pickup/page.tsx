import HowItWorks from "./_components/how-it-works";
import NoReturnsToday from "./_components/no-returns-today";
import ReturnMatters from "./_components/return-matters";
import SchedulePickup from "./_components/schedule-pickup";
import ShippingReturns from "./_components/shipping-returns-section";
import ShopAtAmazon from "./_components/shop-at-amazon";
import Testimonials from "./_components/testimonials";
import YourTimeMatters from "./_components/your-time-matters/YourTimeMatters";

export default function Home() {
  return (
    <>
      <SchedulePickup />
      <ShippingReturns />
      <HowItWorks />
      <ShopAtAmazon />
      <Testimonials />
      <YourTimeMatters />
      <NoReturnsToday />
      <ReturnMatters />
    </>
  );
}
