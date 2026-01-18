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
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Emin Berke. A software engineer and full-time learner.
        <br></br>
        <br></br>
        Results-driven professional with 2 years of experience as a Software
        Engineer. Experienced in integrating digital asset custody(Ripple
        Custody) to core banking applications, communicating with RPC node
        providers(Blockdaemon), managing and monitoring intent based transaction
        environments with understanding of several blockchain networks such as
        Bitcoin, Ethereum, Ripple, Solana, Cardano, Tron and so on. Developing
        REST APIs and microservices architectures using Spring Boot, Nest.js and
        Docker, ensuring scalable and business-aligned crypto custody solutions.
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
