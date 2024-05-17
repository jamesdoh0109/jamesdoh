import Link from "next/link";
import ImageContainer from "@/components/common/ImageContainer";

type ProjectCard = {
  id: string;
  name: string;
  description: string;
  date: string;
  imageLink: string;
};

export default function Card({
  id,
  name,
  description,
  date,
  imageLink,
}: ProjectCard) {
  return (
    <Link
      href={`/projects/?modal=true&id=${id}`}
      className="items-center p-5 bg-white text-black cursor-pointer h-[420px] laptop:w-[350px] w-[320px] space-y-3 rounded-3xl shadow-xl transition hover:opacity-50"
      scroll={false}
    >
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
    </Link>
  );
}
