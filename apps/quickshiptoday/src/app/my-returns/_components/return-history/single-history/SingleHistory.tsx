import { Button } from "@/components/ui/core/button";
import { Card, CardContent } from "@/components/ui/core/card";
import { Information, Return } from "../ReturnHistory.types";
import SingleInformation from "./single-information";
import SingleReturn from "./single-return";

interface SingleHistoryCardProps {
  informations: Information[];
  returns?: Return[];
}

export default function SingleHistoryCard({
  informations,
  returns
}: SingleHistoryCardProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <CardContent className="p-0">
        <dl className="flex-auto text-sm text-gray-600">
          <div className="space-y-6 divide-y rounded-b-md bg-card px-4">
            {informations.map(({ id, title, value }) => (
              <SingleInformation title={title} value={value} key={id} />
            ))}
          </div>
          <div className="px-6 bg-card pb-6">
            <Button className="w-full" variant={"outline"}> Cancel Return</Button>
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
