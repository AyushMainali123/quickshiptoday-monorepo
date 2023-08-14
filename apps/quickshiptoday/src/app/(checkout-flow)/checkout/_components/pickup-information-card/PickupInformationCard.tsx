import { Card, CardContent } from "@/components/ui/core/card";
import SingleInformation from "./single-information";

export interface Information {
  id: string;
  title: string;
  value: React.ReactNode;
}

export interface Return {
  id: string;
  type: "UPS" | "FedEx";
  confirmationId: string;
  quantity: number;
}

interface PickupInformationCardProps {
  informations: Information[];
  returns?: Return[];
}

export default function PickupInformationCard({
  informations,
  returns
}: PickupInformationCardProps) {
  return (
    <Card className="mt-6">
      <CardContent className="px-4 py-6">
        <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600">
          {informations.map(({ id, title, value }) => (
            <SingleInformation title={title} value={value} key={id} />
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}
