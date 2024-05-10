import ImageContainer from "../common/ImageContainer";

type ProjectCard = {
  name: string;
  description: string;
  date: string;
  imagePath: string;
};

export default function Card({
  name,
  description,
  date,
  imagePath,
}: ProjectCard) {
  return (
    <div className="items-center p-5 bg-white text-black h-[420px] laptop:w-[350px] w-[320px] space-y-3 rounded-3xl shadow-xl cursor-pointer transition hover:opacity-50">
      <ImageContainer
        src={imagePath}
        alt="name"
        className="h-1/2 flex justify-center"
      />
      <div className="space-y-2">
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-grey-2 text-xs italic">{date}</span>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
