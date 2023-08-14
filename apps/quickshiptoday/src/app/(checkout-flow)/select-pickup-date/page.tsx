"use client";
import { Button } from "@/components/ui/core/button";
import { H2 } from "@/components/ui/core/text";
import FloatingLabelInput from "@/components/ui/shared/floating-label-input";
import Link from "next/link";
import PickupDateRadioGroup from "./_components/pickup-date-radio-group";

const availablePickupDates = [
  {
    id: "1",
    date: "Thursday, August 10",
    value: new Date(2023, 7, 10).toString()
  },
  {
    id: "2",
    date: "Friday, August 11",
    value: new Date(2023, 7, 11).toString()
  },
  {
    id: "3",
    date: "Thursday, August 12",
    value: new Date(2023, 7, 12).toString()
  }
];

export default function SelectPickupDate() {
  return (
    <>
      <main className="container mx-auto max-w-7xl px-4 py-8">
        {/* Pickup date selection */}
        <H2>Select pickup date</H2>
        <PickupDateRadioGroup availablePickupDates={availablePickupDates} />

        {/* Pickup Details Selection  */}
        <H2 className="mt-10">Enter pickup details</H2>
        <FloatingLabelInput
          label="Name"
          placeholder="Walt Disney"
          containerClassName="mt-10"
        />
        <FloatingLabelInput
          label="Mobile Phone"
          placeholder="XXX-XXX-XXXX"
          containerClassName="mt-10"
        />
        <FloatingLabelInput
          label="Pickup Location"
          placeholder="example: Porch, Gargle, Pool"
          containerClassName="mt-10"
        />
        <FloatingLabelInput
          label="Description"
          placeholder="example: Amazon, Dailylook, Nike"
          containerClassName="mt-10"
        />
        <Button className="mt-10 w-full" asChild>
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>
      </main>
    </>
  );
}
