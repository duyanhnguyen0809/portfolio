import Section from "../components/Section";
import CardContainer from "../components/CardContainer";

export default function Projects() {
  const cards = [
    {
      title: "Card Title 1",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://via.placeholder.com/200",
      borderColor: "border-[#6BF2B3]",
    },
    {
      title: "Card Title 2",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://via.placeholder.com/200",
      borderColor: "border-[#6BF2B3]",
    },
    {
      title: "Card Title 3",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://via.placeholder.com/200",
      borderColor: "border-[#6BF2B3]",
    },
    {
      title: "Card Title 4",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://via.placeholder.com/200",
      borderColor: "border-[#6BF2B3]",
    },
    // More cards...
  ];

  return (
    <Section
      color="customBlack"
      className="relative z-20 flex justify-center content-center"
    >
      <div className="absolute w-screen flex justify-center h-fit">
        <h1 className="text-white text-5xl uppercase p-5 font-black">
          My projects
        </h1>
      </div>
      <CardContainer cards={cards} />
    </Section>
  );
}
