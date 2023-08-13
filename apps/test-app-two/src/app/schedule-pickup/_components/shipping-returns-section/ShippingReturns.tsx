import Image from "next/image";

export default function ShippingReturns() {
  return (
    <>
      <div className="container mt-12 px-4">
        <div className="bg-white py-12">
          <div className="relative isolate">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl">
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}
              ></div>
            </div>
            <div className="py-3">
              <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                    Shipping Returns
                  </h2>
                  <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                    just got easier
                  </h2>
                  <p className="mx-auto mt-6 max-w-md text-left text-base text-gray-600">
                    Do you have one or more returns from your favorite brands
                    like Amazon, Athleta, Dailylook, or Nike?
                  </p>
                  <p className="mx-auto mt-6 max-w-md text-left text-base text-gray-600">
                    Get at least 20 minutes back in your day by having your
                    returns picked up right at home.
                  </p>
                </div>
                <div className="mt-16 flow-root">
                  <div className="-m-2 rounded-xl">
                    <Image
                      src="https://ucarecdn.com/b5f86fb9-258c-488d-97bb-1ae61123b613/-/preview/938x432/-/quality/smart/-/format/auto/amazon-return-packages"
                      alt="Return Packages"
                      width="2432"
                      height="1442"
                      className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(80%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl">
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
