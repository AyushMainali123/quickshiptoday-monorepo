import { Card, CardContent } from "@/components/ui/core/card";
import SingleInformation from "./single-information";
import SingleReturn from "./single-return";

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
    <Card className="mt-6 bg-white overflow-hidden">
      <CardContent className="p-0">
        <dl className="flex-auto text-sm text-gray-600">
          <div className="space-y-6 divide-y rounded-b-md bg-card px-4">
            {informations.map(({ id, title, value }) => (
              <SingleInformation title={title} value={value} key={id} />
            ))}
          </div>
          <div className="space-y-6 divide-y bg-white px-4 py-6">
            {returns?.map((singleReturn) => (
              <SingleReturn {...singleReturn} key={singleReturn.id} />
            ))}
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
