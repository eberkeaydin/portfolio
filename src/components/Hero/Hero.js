import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Link } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Berke. I am a candidate of Web3 Developer and computer
        engineering student. I am using this website to share my curriculum
        vitae, projects and personal blog. 
        <br></br>
        <br></br>
        I am a diligent software engineer
        candidate with experience in several internships and software projects.
        I improve myself in product development, front-end development, UI
        design, UI experience and aim to advance in these fields.
      </SectionText>
      <Button>
        <Link href="https://www.linkedin.com/in/eberkeaydin/" target="_blank">
          Learn More
        </Link>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
