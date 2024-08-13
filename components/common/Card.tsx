type CardProps = {
  children: React.ReactNode;
  onClick: () => void;
  cardForCreate?: boolean;
};

export default function Card({
  children,
  onClick,
  cardForCreate = false,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-5 text-black cursor-pointer h-[420px] laptop:w-[350px] w-[320px] space-y-3 rounded-3xl shadow-xl laptop:transition laptop:hover:opacity-50 ${
        cardForCreate
          ? "bg-transparent border-2 border-dashed border-grey-2 text-black dark:text-white"
          : "bg-white"
      }`}
    >
      {children}
    </div>
  );
}
