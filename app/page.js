"use client";

import Section from "./components/Section";
import Landing from "./sections/Landing";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <div>
      <Landing className="z-20" />
      <Intro />
      <Projects />
    </div>
  );
}
