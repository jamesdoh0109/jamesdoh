import Link from "next/link";

type AnchorProps = {
  text: string;
  href: string;
};

export default function Anchor({ text, href }: AnchorProps) {
  if (href.charAt(0) === "/") {
    return (
      <Link href={href} className="text-blue-0 dark:text-blue-1">
        {text}
      </Link>
    );
  } else {
    return (
      <a href={href} target="_blank" className="text-blue-0 dark:text-blue-1">
        {text}
      </a>
    );
  }
}
