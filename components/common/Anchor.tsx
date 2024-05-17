import Link from "next/link";
import { AnchorColor } from "@/lib/types";

type AnchorProps = {
  text: string;
  href: string;
  color?: AnchorColor;
};

const COLORS = {
  blue: "text-blue-0",
  "light-blue": "dark:text-blue-1",
  toggle: "text-blue-0 dark:text-blue-1",
};

export default function Anchor({ text, href, color = "toggle" }: AnchorProps) {
  if (href.charAt(0) === "/") {
    return (
      <Link href={href} className={`${COLORS[color]}`}>
        {text}
      </Link>
    );
  } else {
    return (
      <a href={href} target="_blank" className={`${COLORS[color]}`}>
        {text}
      </a>
    );
  }
}
