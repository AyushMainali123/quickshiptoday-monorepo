import Link from "next/link";

export default function ReturnMatters() {
  return (
    <div className="container bg-gray-100 px-4">
      <div className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-700">
            We didn’t think returns mattered either.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-gray-600">
            Then we learned 20% of our online purchases get returned.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="https://quickshiptoday.com/section/why-we-made-it"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
