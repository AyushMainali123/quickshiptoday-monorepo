import { H2, H3 } from "@/components/ui/core/text";
import GiftOfTime from "./_components/gift-of-time";
import NextSteps from "./_components/next-steps";
import PickupInformationCard from "./_components/pickup-information-card";
import { Return } from "./_components/pickup-information-card/PickupInformationCard";

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
    id: "8",
    title: "Return Number",
    value: '222339'
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

const returns: Return[] = [
  {
    confirmationId: "1ABDCJSLEJASOFRJ",
    id: "1",
    quantity: 1,
    type: "UPS"
  },
  {
    confirmationId: "1ABDCJSLEJAGJDN",
    id: "2",
    quantity: 2,
    type: "FedEx"
  }
];

export default function ThankYou() {
  return (
    <main>
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <H2>Thank you</H2>
        <H3 className="mt-2">Your pickup is scheduled.</H3>
        <p className="mt-2 text-sm text-gray-500">
          Congrats, you just saved 20 minutes by using quick ship today.
        </p>
        <PickupInformationCard informations={informations} returns={returns} />
      </div>
      <NextSteps />
      <GiftOfTime />
    </main>
  );
}
