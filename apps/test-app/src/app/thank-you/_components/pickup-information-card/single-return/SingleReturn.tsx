import { Icon } from "@/components/icons";
import { Return } from "../PickupInformationCard";

export default function SingleReturn({
  confirmationId,
  quantity,
  type
}: Return) {
  return (
    <div className="flex items-center pt-6 first:pt-0 bg-white">
      <div>
        <Icon.Box className="h-10 w-10" />
      </div>
      <div className="ml-6">
        <div className="font-medium text-gray-900">{type} Returns</div>
        <div className="mt-1">Confirmation: {confirmationId}</div>
        <div className="mt-1">QTY: {quantity}</div>
      </div>
    </div>
  );
}
