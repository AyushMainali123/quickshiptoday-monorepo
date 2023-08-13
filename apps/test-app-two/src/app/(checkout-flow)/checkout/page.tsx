import { H2 } from "@/components/ui/core/text";
import PayOptions from "./_components/pay-options";
import PickupInformationCard from "./_components/pickup-information-card/PickupInformationCard";

const informations = [
  {
    id: "1",
    title: "Pickup date",
    value: (
      <time dateTime="2021-01-22">
        April 5<sup>th</sup>, 2023
      </time>
    )
  },
  {
    id: "2",
    title: "Pickup location",
    value: "Porch"
  },
  {
    id: "3",
    title: "Pickup address",
    value: "6912 Lynx Lair Rd"
  },
  {
    id: "4",
    title: "Total amount",
    value: "$1,000.00"
  }
];

export default function CheckoutPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      <H2>Checkout</H2>
      <PickupInformationCard informations={informations} />
      <PayOptions />
    </main>
  );
}
