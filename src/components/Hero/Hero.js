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

        I am currently working at Authic Labs which is digital art marketplace based on Benelux.
      </SectionText>
      <Button>
        <Link href="https://www.linkedin.com/in/eberkeaydin/" target="_blank">Learn More</Link>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;