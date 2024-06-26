import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { fromFadeInUp, start } from "../../shared/gsap";
import {
  Container,
  Image,
  ImageContainer,
  ImageWrapper,
  Main,
  Paragraph,
  ParagraphContainer,
  SectionHeader,
  SectionHeaderBar,
  SectionTitle,
  Strong,
  Wrapper,
} from "./About.style";

const About = () => {
  // gsap scroll trigger animation
  const sectionEl = useRef<HTMLElement>(null);
  const sectionHeaderEl = useRef<HTMLDivElement>(null);
  const paragraphContainerEl = useRef<HTMLDivElement>(null);
  const imageContainerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    // section header
    const duration = 0.5;
    const fadeInUp = {
      ...fromFadeInUp,
      duration,
    };
    const sectionHeaderTween = gsap.from(sectionHeaderEl.current, {
      ...fadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: sectionEl.current,
        start: start,
      },
    });
    const isDesktop = window.innerWidth > 992;
    const paragraphContainerTween = gsap.from(paragraphContainerEl.current, {
      ...fadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: sectionEl.current,
        start: isDesktop ? "top-=330px center" : "top-=80px center",
      },
    });
    const imageContainerTween = gsap.from(imageContainerEl.current, {
      ...fadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: sectionEl.current,
        start: "top-=330px center",
      },
    });
    return () => {
      [
        sectionHeaderTween,
        paragraphContainerTween,
        imageContainerTween,
      ].forEach((el) => el.scrollTrigger?.kill());
    };
  }, []);
  return (
    <Container ref={sectionEl} id="about">
      <Wrapper>
        <SectionHeader ref={sectionHeaderEl}>
          <SectionTitle index={1}>About Me</SectionTitle>
          <SectionHeaderBar />
        </SectionHeader>
        <Main>
          <ParagraphContainer ref={paragraphContainerEl}>
            <Paragraph>
            Hello, my name is <Strong>Nithin R</Strong> and I am{" "}
              <Strong>24 years old</Strong>. I currently reside in{" "}
              <Strong>Coimbatore</Strong>. As a Full Stack Developer With Python, my main focus is on
              creating websites using <Strong>React</Strong>,{" "}
              <Strong>javascript</Strong>, and <Strong>Next JS</Strong>. I have
              always had a passion for web development and this interest was
              sparked back in <Strong>2023</Strong> when I took some courses on
              HTML and CSS through OpenClassroom. Since then, I have continued
              to improve my skills and stay up-to-date with the latest web
              development trends and technologies. I enjoy the challenge of
              creating dynamic and user-friendly websites that provide a great
              user experience.
            </Paragraph>
            <Paragraph>
              Since <Strong>March 2024</Strong>, I have been actively using{" "}
              <Strong>React ,Node.js and Next JS</Strong> in my web development projects.
              During this time, I had the opportunity to complete a 2-month
              Assistant Team Lead with a <Strong>Aggregate Intelligence</Strong>, where I
              worked extensively with both SQL and Node.js. This experience
              motivated me to further specialize in these technologies, and I
              started working on <Strong>projects at home</Strong> to improve my
              skills, specifically focusing on{" "}
              <Strong>React in Javascript</Strong> and little bit of{" "}
              <Strong>Node.js & Next JS</Strong>.
            </Paragraph>
            <Paragraph>
              Having <Strong>gained confidence</Strong> in my abilities, I am
              now <Strong>seeking an opportunity</Strong> to turn my passion
              into a career. Currently, I work part-time for{" "}
              <Strong>Milk Delivery and coaching to student who has interested 
              in web development</Strong> three days a week, and the
              rest of my time is spent working at home with{" "}
              <Strong>React ,SQL & Python</Strong>. I am actively seeking
              employment with a company that can offer me a chance to utilize my
              skills and make my dream of becoming a professional web developer
              a reality.
            </Paragraph>
          </ParagraphContainer>
          <ImageContainer ref={imageContainerEl}>
            <ImageWrapper className="imageWrapper">
              <Image
                src={`${process.env.PUBLIC_URL}/assets/ma-photo.png`}
                alt="hero"
              />
            </ImageWrapper>
          </ImageContainer>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default About;
