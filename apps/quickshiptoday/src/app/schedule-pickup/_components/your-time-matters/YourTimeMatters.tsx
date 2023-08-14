import Image from "next/image";

export default function YourTimeMatters() {
  return (
    <div className="container bg-indigo-700 px-4">
      <div className="py-6">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden">
          <div className="px-6 pb-12 pt-10">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Your time matters.
              <br />
              Do something for you.
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Skip the trip, and get 20 minutes back in your day.
            </p>
          </div>
          <div className="aspect-h-3 aspect-w-5 relative -mt-6 min-h-[240px]">
            <Image
              className="rounded-md object-cover object-left-top"
              src="https://ucarecdn.com/f9a9236a-d2c4-4859-850d-3d6b0b8e80c0/-/preview/938x432/-/quality/smart/-/format/auto/do-something-for-you"
              alt="App screenshot"
              fill
            />
          </div>
          <div className="items-left mt-16 flex justify-center gap-x-6">
            <a href="#" className="text-lg font-semibold leading-6 text-white">
              Try Now <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
