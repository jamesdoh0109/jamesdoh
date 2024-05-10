import Image, { StaticImageData } from "next/image";

type ImageContainerProps = {
  src: StaticImageData | string;
  alt: string;
  className: string;
  onClick?: () => void;
  priority?: boolean;
  unoptimized?: boolean;
  widthPrioritizedOnSmallScreen?: boolean;
};

export default function ImageContainer({
  src,
  alt,
  className,
  onClick,
  priority = false,
  unoptimized = false,
  widthPrioritizedOnSmallScreen = false,
}: ImageContainerProps) {
  return (
    <div
      className={`${className} ${onClick && "cursor-pointer"}`}
      onClick={onClick}
    >
      <Image
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        className={`w-auto h-full ${
          widthPrioritizedOnSmallScreen &&
          "hide-desktop-image:w-full hide-desktop-image:h-auto"
        }`}
        alt={alt}
        priority={priority}
        unoptimized={unoptimized}
      />
    </div>
  );
}
