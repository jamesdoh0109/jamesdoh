import Link from "next/link";

type CardProps = {
  name: string;
  date: string;
  description: string;
  href: string;
};

export default function Card({ href, name, date, description }: CardProps) {
  return (
    <Link href={href}>
      <div className="w-full h-[120px] p-4 rounded-lg bg-white text-black border border-black cursor-pointer transition hover:opacity-50">
        <h2 className="text-xl">{name}</h2>
        <div className="text-grey-2 text-sm italic">{date}</div>
        <div className="text-xs">{description}</div>
      </div>
    </Link>
  );
}
