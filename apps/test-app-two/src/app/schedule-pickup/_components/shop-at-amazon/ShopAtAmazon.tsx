import Image from "next/image";

export default function ShopAtAmazon() {
  return (
    <>
      <div className="relative mt-10 pt-10 bg-white">
        <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50"></div>
        <div className="mx-auto max-w-7xl bg-indigo-600">
          <div>
            <div className="relative z-10">
              <div className="absolute inset-x-0 h-1/2 bg-white"></div>
              <div className="mx-auto max-w-md px-6">
                <div className="aspect-h-6 aspect-w-10 relative min-h-[180px]">
                  <Image
                    className="rounded-3xl object-cover object-center shadow-2xl"
                    src="https://ucarecdn.com/8f9f5fd0-1167-4ada-bcfa-795b2ef389a8/-/preview/938x432/-/quality/smart/-/format/auto/amazon-return-packages"
                    alt="Amazon return packages"
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-indigo-600">
              <div className="absolute inset-0 hidden overflow-hidden rounded-3xl">
                <svg
                  className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width="404"
                  height="384"
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-indigo-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="384"
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
                  width="404"
                  height="384"
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-indigo-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="384"
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md space-y-6 px-6 py-12">
                <h2
                  className="text-center text-3xl font-bold tracking-tight text-white"
                  id="join-heading"
                >
                  Do you shop at{" "}
                  <span className="text-orange-400">Amazon?</span>
                </h2>
                <p className="text-center text-lg text-white">
                  Skip the trip to Kohls on your next return.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Learn more <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
