import { Button } from "@/components/ui/core/button";
import Link from "next/link";

export default function NoReturnsToday() {
  return (
    <div className="container bg-indigo-100 px-4">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          No returns today? No problem.{" "}
        </h2>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
          Come back and get a free return.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button asChild>
            <Link href="/">Learn more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
