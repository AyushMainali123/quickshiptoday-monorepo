import { Button } from "@/components/ui/core/button";

export default function GiftOfTime() {
  return (
    <div className="container bg-gray-50 px-4 py-10">
      <div className="rounded-lg bg-indigo-700">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Give the gift of time.
            <br />
            Tell a friend today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <Button
              type="submit"
              className="mt-10 h-12 w-full border border-transparent bg-white text-lg font-medium text-indigo-700 text-primary hover:bg-white hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Share Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
