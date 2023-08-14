"use client";

import { RadioGroup } from "@/components/ui/core/radio-group";
import { getDay } from "date-fns";
import { useState } from "react";
import SinglePickUpDate from "./single-pickup-date";

export interface SingleAvailableDate {
  id: string;
  date: string;
  value: string;
}

interface PickupDateRadioGroupProps {
  availablePickupDates: SingleAvailableDate[];
}

export default function PickupDateRadioGroup({
  availablePickupDates
}: PickupDateRadioGroupProps) {
  const defaultValue = availablePickupDates.find((pickupDate) => {
    const pickupDateValue = new Date(pickupDate.date);

    // '5' should be default value i.e. Thursday
    return getDay(pickupDateValue) === 5;
  }) as SingleAvailableDate;

  // If default value doesn't equal 5, throw error. This allows us to troubleshoot us easily in the future
  if (defaultValue === undefined) {
    throw new Error("Default value should be thursday");
  }

  const [value, setValue] = useState(defaultValue.value.toString());
  return (
    <>
      <RadioGroup
        defaultValue={availablePickupDates[0].value}
        onValueChange={(newValue) => setValue(newValue)}
        className="mt-10 flex"
      >
        {availablePickupDates.map((pickupDate) => (
          <SinglePickUpDate
            key={pickupDate.id}
            type={
              pickupDate.value === defaultValue.value ? "default" : "immediate"
            }
            {...pickupDate}
            groupValue={value}
          />
        ))}
      </RadioGroup>
    </>
  );
}
