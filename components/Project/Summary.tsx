import ImageContainer from "@/components/common/ImageContainer";

type SummaryProps = {
  name: string;
  description: string;
  date: string;
  imageLink: string;
};

export default function Summary({
  name,
  description,
  date,
  imageLink,
}: SummaryProps) {
  return (
    <>
      <ImageContainer
        src={imageLink}
        alt="name"
        className="h-1/2 flex justify-center"
      />
      <div className="space-y-2">
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-grey-2 text-xs italic">{date}</span>
        </div>
        <p className="text-sm line-clamp-6">{description}</p>
      </div>
    </>
  );
}
