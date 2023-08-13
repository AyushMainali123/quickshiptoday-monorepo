"use client";
import { Button } from "@/components/ui/core/button";

import Link from "next/link";
import { VscHome } from "react-icons/vsc";
import UserChoice from "./user-choice/UserChoice";

export default function SchedulePickup() {
  return (
    <>
      <div className="container mx-auto mt-6 max-w-7xl px-4">
        <h2 className="text-4xl font-bold tracking-tight text-indigo-600">
          <span className="block xl:inline">Schedule a pickup</span>
        </h2>

        <div className="relative mt-8 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <VscHome className="h-5 w-5" />
          </div>
          <div>
            <input
              type="text"
              className="block h-16 w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              placeholder="Enter pickup address"
            />
          </div>
        </div>

        <UserChoice title="How many UPS returns?" />
        <UserChoice title="How many FedEx returns?" />

        <div className="mt-6 space-y-6 px-3">
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <div className="text-base font-medium">Total</div>
            <div className="text-base font-medium text-gray-900">$8.99</div>
          </div>

          <Button
            size={"lg"}
            className="relative z-20 mt-6 w-full text-lg font-medium"
            asChild
          >
            <Link href="/select-pickup-date">Select Pickup Date</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
