import { howItWorksData } from "./HowItWorks.data";
import SingleDescription from "./single-description";

export default function HowItWorks() {
  return (
    <div className="container mx-auto max-w-7xl bg-indigo-50 px-4 py-8">
      <div className="overflow-hidden py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16">
            <div>
              <div>
                <h2 className="mt-2 text-center text-4xl font-bold tracking-tight text-gray-900">
                  How It Works
                </h2>

                {/*  */}
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
                  {howItWorksData.map((data) => (
                    <SingleDescription {...data} key={data.title} />
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
