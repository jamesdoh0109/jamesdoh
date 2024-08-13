import { ButtonColor } from "@/lib/types";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  text: string;
  color: ButtonColor;
  scroll?: boolean;
};

const COLORS = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  toggle: "bg-black dark:bg-white text-white dark:text-black",
};

export default function Button({
  href,
  text,
  onClick,
  color,
  scroll = true,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`${COLORS[color]} px-5 py-2 text-center rounded-lg  cursor-pointer transition hover:opacity-70`}
        scroll={scroll}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button
        className={`${COLORS[color]} px-5 py-2 text-center rounded-lg cursor-pointer transition hover:opacity-70`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}
