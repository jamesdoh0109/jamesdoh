import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
  href: string;
  cardForCreate?: boolean;
};

export default function Card({
  children,
  href,
  cardForCreate = false,
}: CardProps) {
  return (
    <Link
      href={href}
      className={`p-5 text-black cursor-pointer h-[420px] laptop:w-[350px] w-[320px] space-y-3 rounded-3xl shadow-xl laptop:transition laptop:hover:opacity-50 ${
        cardForCreate
          ? "bg-transparent border-2 border-dashed border-grey-2 text-black dark:text-white"
          : "bg-white"
      }`}
      scroll={false}
    >
      {children}
    </Link>
  );
}
