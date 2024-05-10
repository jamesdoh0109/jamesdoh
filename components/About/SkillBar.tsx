type SkillBarProps = {
  percentage: string;
  name: string;
};

export default function SkillBar({ percentage, name }: SkillBarProps) {
  return (
    <div className="w-full flex flex-col justify-center">
      <h5 className="text-xs">{name}</h5>
      <div className="w-[90%] h-[9px] bg-grey-2 dark:bg-grey-1 rounded-3xl relative">
        <div
          className={`${percentage} h-[9px] bg-burgundy-0 dark:bg-burgundy-1 rounded-3xl absolute transition-width transition-slowest ease`}
        ></div>
      </div>
    </div>
  );
}
