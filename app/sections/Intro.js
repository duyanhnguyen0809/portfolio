import Section from "../components/Section";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typewriter } from "react-simple-typewriter";

export default function Intro() {
  //   const comp = useRef(null);

  //   useLayoutEffect(() => {
  //     let ctx = gsap.context(() => {
  //       gsap.registerPlugin(ScrollTrigger);
  //       gsap.to("#image", {
  //         scrollTrigger: {
  //           trigger: "#image",
  //           start: "15% center",
  //           end: "bottom+=50% center",
  //           scrub: true,
  //           markers: true,
  //           toggleActions: "play reverse play reverse",
  //         },
  //         y: 100,
  //         duration: 3,
  //       });
  //       gsap.to("#text", {
  //         scrollTrigger: {
  //           trigger: "#image",
  //           start: "-50% center",
  //           end: "-50% center",
  //           toggleActions: "play reverse pause pause",
  //         },
  //         y: 130,
  //         duration: 2,
  //       });
  //     }, comp);

  //     return () => ctx.revert();
  //   }, []);
  return (
    <Section
      //   ref={comp}
      color="customBlack"
      className="flex pc:items-start mobile:flex-col mobile:h-auto tablet:h-auto tablet:flex-col pc:flex-row"
    >
      <div className="pc:h-full pc:w-1/2 mobile:h-screen tablet:h-screen flex items-center justify-center z-20">
        <div className="h-[90vh] flex items-center justify-center bg-[#6BF2B3]">
          <img
            src="./work1.jpg"
            alt="Work1"
            className="h-[80vh] mx-3 my-3 z-10"
          />
        </div>
      </div>
      <div className="pc:h-full pc:w-1/2 pc:mr-10 mobile:h-screen tablet: h-screen flex flex-col pc:justify-evenly mobile:justify-center mobile:m-3 z-20">
        <p className="text-white pc:text-3xl mobile:text-xl mobile:my-5 font-light opacity-60">
          Salut ! 👋 Je suis un passionné du développement web, étudiant en
          informatique à l'ESGI, à Toulouse. Mon cœur bat pour le MERM Stack :
          ReactJSpour le front-end, NodeJS et Express pour des APIs rapides, et
          MongoDB pour une scalabilité remarquable.
        </p>
        <div className="text-white text-2xl mobile:my-5 font-black uppercase">
          <Typewriter
            words={["Decouvrir mes projets"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => console.log("Done!")}
          />
          <p>
            →{" "}
            <span className="relative group cursor-pointer text-[#6BF2B3]">
              Here
              <span className="absolute h-1 bg-[#6BF2B3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out -bottom-1 left-0 right-0"></span>
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
}
