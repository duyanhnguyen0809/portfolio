import React from "react";
import Section from "../components/Section";

export default function Landing() {
  return (
    <Section
      color="customBlack"
      className="flex mobile:flex-col-reverse tablet:flex-row pc:flex-row items-center justify-center"
    >
      <div className="mobile:h-screen tablet:h-full pc:h-full mobile:w-full tablet:w-2/3 pc:w-1/2 flex mobile:flex-col-reverse tablet:flex-row pc:flex-row items-center ">
        <div className="h-full mobile:h-1/3 tablet:h-5/6 flex tablet:z-10 mobile:z-10 pc:justify-evenly pc:m-10 mobile:m-10 tablet:m-0 flex-col mobile:justify-center pc:text-start mobile:text-center tablet:justify-end">
          <p className="text-white tablet:text-5xl pc:text-5xl font-black uppercase">
            Hello!
            <br /> I’m <span className="text-[#6BF2B3]">Duy Anh Nguyen</span>.
          </p>
          <p className="text-white tablet:text-3xl pc:text-3xl font-light opacity-60">
            Welcome to my Portfolio ! I am a student in software engineering,
            currenly doing an apprenciceship at Sopra Steria Group, as a Java /
            Angular / Ionic developper.
          </p>
        </div>
      </div>
      <div className="mobile:h-1/2 tablet:h-1/2 pc:h-full mobile:w-full tablet:w-full pc:w-1/2 items-center justify-center mobile:absolute flex pc:relative ">
        <div className="w-2/3 z-10 border-gradient">
          <img
            src="./ava.jpg"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>{" "}
      </div>
    </Section>
  );
}
