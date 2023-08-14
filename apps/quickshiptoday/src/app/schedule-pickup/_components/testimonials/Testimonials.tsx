import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <div className="container bg-indigo-100 px-4">
        <div className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                Testimonials
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                Customers who love to save time
              </p>
            </div>
            <div className="mx-auto mt-16 flow-root max-w-2xl">
              <div className="-mt-8">
                <div className="pt-8">
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>
                        “I&apos;m a busy mom with too much to do and not enough
                        time; having my returns picked up at home is a big time
                        saver.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <Image
                        className="rounded-full bg-gray-50"
                        src="https://ucarecdn.com/f448075b-c352-45e5-9cc9-32090f84689e/-/preview/938x432/-/quality/smart/-/format/auto/"
                        alt="Testimonial"
                        height={40}
                        width={40}
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          Jasmin
                        </div>
                        <div className="text-gray-600">Evergreen, CO</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
