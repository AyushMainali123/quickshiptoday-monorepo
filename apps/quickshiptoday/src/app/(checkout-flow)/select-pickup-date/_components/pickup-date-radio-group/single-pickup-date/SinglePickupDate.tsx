import { Label } from "@/components/ui/core/label";
import { RadioGroupItem } from "@/components/ui/core/radio-group";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { SingleAvailableDate } from "../PickupDateRadioGroup";
interface SinglePickupDateProps extends SingleAvailableDate {
  groupValue: string;
  type: "default" | "immediate";
}

const pickups: Record<SinglePickupDateProps["type"], string> = {
  default: "Add To Regularly Scheduled Pickup",
  immediate: "Immediate Pickup"
};

const defaultShippingCost = "Add to this pickup for $0.00";

export default function SinglePickUpDate({
  date,
  value,
  groupValue,
  type
}: SinglePickupDateProps) {
  return (
    <>
      <Label
        // className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
        className={cn(
          "relative flex flex-1 cursor-pointer rounded-lg border-2 border-transparent bg-white p-4 shadow-sm focus:outline-none",
          value === groupValue && "border-primary"
        )}
      >
        <RadioGroupItem value={value} id={value} className="sr-only" />

        <span className="flex flex-1">
          <span className="flex flex-col">
            <span
              id="project-type-0-label"
              className="block text-sm font-medium text-gray-900"
            >
              {pickups[type]}
            </span>
            <span
              id="project-type-0-description-0"
              className="mt-1 flex items-center text-sm text-gray-500"
            >
              {type === "default" ? (
                defaultShippingCost
              ) : (
                <div className="h-5" aria-hidden="true" />
              )}
            </span>
            <span
              id="project-type-0-description-1"
              className="mt-6 text-sm font-medium text-gray-900"
            >
              {format(new Date(value), "MM/dd/yyyy")}
            </span>
          </span>
        </span>
        {value === groupValue ? (
          <svg
            className="h-5 w-5 text-indigo-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <div aria-hidden="true" className="h-5 w-5" />
        )}
      </Label>
    </>
  );
}

export function CardGroup() {
  return (
    <fieldset>
      <legend className="text-base font-semibold leading-6 text-gray-900">
        Select a mailing list
      </legend>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
          <input
            type="radio"
            name="project-type"
            value="Newsletter"
            className="sr-only"
            aria-labelledby="project-type-0-label"
            aria-describedby="project-type-0-description-0 project-type-0-description-1"
          />
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span
                id="project-type-0-label"
                className="block text-sm font-medium text-gray-900"
              >
                Newsletter
              </span>
              <span
                id="project-type-0-description-0"
                className="mt-1 flex items-center text-sm text-gray-500"
              >
                Last message sent an hour ago
              </span>
              <span
                id="project-type-0-description-1"
                className="mt-6 text-sm font-medium text-gray-900"
              >
                621 users
              </span>
            </span>
          </span>
          <svg
            className="h-5 w-5 text-indigo-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          <span
            className="pointer-events-none absolute -inset-px rounded-lg border-2"
            aria-hidden="true"
          ></span>
        </label>
        <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
          <input
            type="radio"
            name="project-type"
            value="Existing Customers"
            className="sr-only"
            aria-labelledby="project-type-1-label"
            aria-describedby="project-type-1-description-0 project-type-1-description-1"
          />
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span
                id="project-type-1-label"
                className="block text-sm font-medium text-gray-900"
              >
                Existing Customers
              </span>
              <span
                id="project-type-1-description-0"
                className="mt-1 flex items-center text-sm text-gray-500"
              >
                Last message sent 2 weeks ago
              </span>
              <span
                id="project-type-1-description-1"
                className="mt-6 text-sm font-medium text-gray-900"
              >
                1200 users
              </span>
            </span>
          </span>
          <svg
            className="h-5 w-5 text-indigo-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          <span
            className="pointer-events-none absolute -inset-px rounded-lg border-2"
            aria-hidden="true"
          ></span>
        </label>
        <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
          <input
            type="radio"
            name="project-type"
            value="Trial Users"
            className="sr-only"
            aria-labelledby="project-type-2-label"
            aria-describedby="project-type-2-description-0 project-type-2-description-1"
          />
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span
                id="project-type-2-label"
                className="block text-sm font-medium text-gray-900"
              >
                Trial Users
              </span>
              <span
                id="project-type-2-description-0"
                className="mt-1 flex items-center text-sm text-gray-500"
              >
                Last message sent 4 days ago
              </span>
              <span
                id="project-type-2-description-1"
                className="mt-6 text-sm font-medium text-gray-900"
              >
                2740 users
              </span>
            </span>
          </span>
          <svg
            className="h-5 w-5 text-indigo-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          <span
            className="pointer-events-none absolute -inset-px rounded-lg border-2"
            aria-hidden="true"
          ></span>
        </label>
      </div>
    </fieldset>
  );
}
