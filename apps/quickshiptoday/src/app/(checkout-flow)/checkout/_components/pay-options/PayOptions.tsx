import CardPayment from "./cad-payment";
import PayButtons from "./pay-buttons";

export default function PayOptions() {
  return (
    <>
      <PayButtons />
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm font-medium text-gray-500">
            or
          </span>
        </div>
      </div>
      <CardPayment />
    </>
  );
}
