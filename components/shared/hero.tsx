import Container from "../ui/container";
import Section from "../ui/section";




const Hero: React.FC = () => {
  return (
    <Section>
      <Container>
       <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Hero</h1>
       </div>
      </Container>
    </Section>
  );
}


export default Hero;
