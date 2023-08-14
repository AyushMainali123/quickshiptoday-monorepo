interface SingleDescriptionProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const SingleDescription = ({
  description,
  icon,
  title
}: SingleDescriptionProps) => {
  return (
    <div className="relative pl-9">
      <dt className="inline font-semibold text-gray-900">
        {icon}
        {title}
      </dt>

      <dd className="inline">{description}</dd>
    </div>
  );
};

export default SingleDescription;
