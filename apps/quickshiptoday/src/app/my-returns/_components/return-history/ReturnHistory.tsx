import { Return } from "./ReturnHistory.types";
import SingleHistoryCard from "./single-history";

const informations = [
  {
    id: "1",
    title: "Pickup date",
    value: (
      <time dateTime="2021-01-22">
        April 5<sup>th</sup>, 2023
      </time>
    )
  },
  {
    id: "8",
    title: "Return Number",
    value: "1100000"
  },
  {
    id: "2",
    title: "Description",
    value: "Hello Hello Test"
  },
  {
    id: "4",
    title: "Total amount",
    value: "$1,000.00"
  }
];

const returns: Return[] = [
  {
    confirmationId: "1ABDCJSLEJASOFRJ",
    id: "1",
    quantity: 1,
    type: "UPS"
  },
  {
    confirmationId: "1ABDCJSLEJAGJDN",
    id: "2",
    quantity: 2,
    type: "FedEx"
  }
];

const history = [
  {
    id: "1",
    informations,
    returns
  },
  {
    id: "2",
    informations,
    returns
  }
];

export default function ReturnHistory() {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {history.map((sngleHistory) => (
        <SingleHistoryCard key={sngleHistory.id} {...sngleHistory} />
      ))}
    </div>
  );
}
