import { Button } from "@/components/ui/core/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/core/sheet";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          aria-label="Open menu"
        >
          <GiHamburgerMenu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>We can contain navigaton links here</SheetTitle>
          <SheetDescription className="flex flex-col gap-4">
            <Link href="/schedule-pickup">Schedule Pickup</Link>
            <Link href="/select-pickup-date">Select Pickup Date</Link>
            <Link href="/checkout">Checkout</Link>
            <Link href="/thank-you">Thank You</Link>
            <Link href="/my-returns">My Returns</Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
