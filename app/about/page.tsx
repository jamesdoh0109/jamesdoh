import ImageContainer from "@/components/common/ImageContainer";
import Github from "@/components/svg/Github";
import LinkedIn from "@/components/svg/LinkedIn";
import Mail from "@/components/svg/Mail";
import X from "@/components/svg/X";
import SectionContainer from "@/components/About/SectionContainer";
import profile2 from "@/public/profile_2.png";

export default function About() {
  return (
    <div className="h-full flex flex-row hide-desktop-image:flex-col hide-desktop-image:pt-24">
      <div className="w-1/2 hide-desktop-image:w-full flex flex-col justify-center items-center space-y-8">
        <ImageContainer
          src={profile2}
          alt="profile-2"
          className="h-[400px] w-[400px] flex justify-center hide-desktop-image:w-[320px] hide-desktop-image:h-[320px]"
        />
        <div className="flex space-x-5">
          <a href="https://github.com/jihundoh0109" target="_blank">
            <Github className="w-6 h-6 fill-black dark:fill-white" />
          </a>
          <a href="https://www.linkedin.com/in/jihun-doh" target="_blank">
            <LinkedIn className="w-6 h-6 fill-black dark:fill-white" />
          </a>
          <a href="https://twitter.com/james___doh" target="_blank">
            <X className="w-6 h-6 fill-black dark:fill-white" />
          </a>
          <a href="mailto:dohj0109@seas.upenn.edu" target="_blank">
            <Mail className="w-6 h-6 fill-black dark:fill-white" />
          </a>
        </div>
      </div>
      <SectionContainer />
    </div>
  );
}
