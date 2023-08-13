import { H2 } from "@/components/ui/core/text";
import ReturnHistory from "./_components/return-history";

export default function MyReturns() {
  return (
    <main>
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <H2>Return history</H2>
        <div className="max-w-xl">
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent returns or cancel.
          </p>
        </div>
        <ReturnHistory />
      </div>
    </main>
  );
}
