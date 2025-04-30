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
        My name is Berke. I am a candidate of business analyst and former full stack engineer. 
        <br></br>
        <br></br>
        Results-driven professional with 2 years of experience as a Software Engineer, now transitioning
        into Business Analysis with a focus on bridging technical solutions with business objectives.
        Certified in internationally recognized business analysis methodologies, equipped to drive
        requirements elicitation, process optimization, and stakeholder alignment.
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
