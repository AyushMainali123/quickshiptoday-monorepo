interface SingleInformationProps {
  title: string;
  value: React.ReactNode;
}

export default function SingleInformation({
  title,
  value
}: SingleInformationProps) {
  return (
    <div className="flex justify-between pt-6 first:pt-0">
      <dt className="font-medium text-gray-900">{title}</dt>
      <dd>{value}</dd>
    </div>
  );
}
