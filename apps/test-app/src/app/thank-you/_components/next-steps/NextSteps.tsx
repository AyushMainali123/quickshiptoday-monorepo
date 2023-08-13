import { nextStepsData } from "./NextSteps.data";
import SingleDescription from "./single-description";

export default function NextSteps() {
  return (
    <div className="container mx-auto max-w-7xl bg-indigo-50 py-6">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16">
            <div>
              <div>
                <h2 className="mt-2 text-center text-4xl font-bold tracking-tight text-gray-900">
                  Next Steps
                </h2>

                {/*  */}
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
                  {nextStepsData.map((data) => (
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
