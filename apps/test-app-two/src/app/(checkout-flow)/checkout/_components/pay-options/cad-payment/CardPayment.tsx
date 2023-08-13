import { Button } from "@/components/ui/core/button";
import { Input } from "@/components/ui/core/input";
import { Label } from "@/components/ui/core/label";
import Link from "next/link";

export default function CardPayment() {
  // TODO: We will be integrating react-hook-form + ZOD for collecting the information here in the future
  return (
    <form>
      <div>
        <Label htmlFor="card-number">Card number</Label>
        <Input type="text" id="card-number" className="mt-1" />
      </div>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex-1">
          <Label htmlFor="expiration-date">Expiration date (MM/YY)</Label>
          <Input type="text" id="expiration-date" className="mt-1" />
        </div>
        <div className="max-w-[100px]">
          <Label htmlFor="cvc">CVC</Label>
          <Input type="text" id="cvc" className="mt-1" />
        </div>
      </div>
      <Button size="lg" className="mt-10 w-full text-lg" asChild>
        <Link href="/thank-you">
          Pay $8.99
        </Link>
      </Button>
    </form>
  );
}
