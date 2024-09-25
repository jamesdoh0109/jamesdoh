import ImageContainer from "@/components/common/ImageContainer";
import Github from "@/components/svg/Github";
import LinkedIn from "@/components/svg/LinkedIn";
import Mail from "@/components/svg/Mail";
import X from "@/components/svg/X";
import profile1 from "@/public/profile_1.png";
import badge1 from "@/public/aws_badge.png";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center hide-desktop-image:justify-start hide-desktop-image:items-center w-1/2 hide-desktop-image:w-full hide-desktop-image:text-center pl-40 pr-10 hide-desktop-image:px-10 hide-desktop-image:pt-20 wide-and-short:px-52 text-grey-1 dark:text-grey-2 space-y-6">
      <div>
        <ImageContainer
          src={profile1}
          alt="profile-1"
          className="h-[90%] hide-desktop-image:w-[270px] absolute bottom-0 right-20 hide-desktop-image:relative hide-desktop-image:right-0 -z-10"
          widthPrioritizedOnSmallScreen={true}
        />
      </div>

      <div>
        <h1 className="laptop:text-7xl text-5xl font-bold bg-gradient-to-b from-black to-grey-1 dark:from-white dark:to-grey-2 text-transparent inline-block bg-clip-text">
          James Doh
        </h1>
        <h3 className="laptop:text-2xl text-xl font-semibold">
          Envision. Engineer. Empower.
        </h3>
      </div>
      <p className="laptop:text-lg">
        Hi there! 👋 Welcome to my page. I am a software engineer who loves
        to&nbsp;
        <span className="font-bold">envision</span> the possibilities of
        technology and&nbsp;
        <span className="font-bold">engineer</span> practical, innovative
        solutions that ultimately&nbsp;
        <span className="font-bold">empower</span> the world in which we live.
      </p>
      <div className="flex space-x-5">
        <a href="https://github.com/jamesdoh0109" target="_blank">
          <Github className="w-6 h-6 fill-black dark:fill-white" />
        </a>
        <a href="https://www.linkedin.com/in/james-doh" target="_blank">
          <LinkedIn className="w-6 h-6 fill-black dark:fill-white" />
        </a>
        <a href="https://twitter.com/james___doh" target="_blank">
          <X className="w-6 h-6 fill-black dark:fill-white" />
        </a>
        <a href="mailto:dohj0109@seas.upenn.edu" target="_blank">
          <Mail className="w-6 h-6 fill-black dark:fill-white" />
        </a>
      </div>
      <a
        className="hide-desktop-image:pb-12 w-[110px]"
        href="https://www.credly.com/badges/60b49f9b-95ec-4350-b9ed-215299cb44a0/public_url"
        target="_blank"
      >
        <ImageContainer src={badge1} alt="badge-1" className="h-[110px]" />
      </a>
    </div>
  );
}
