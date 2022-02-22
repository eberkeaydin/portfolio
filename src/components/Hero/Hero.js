import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Berke. I am a candidate of full stack developer and computer engineering student. I am using this website to share my curriculum vitae, projects and personal blog.
      </SectionText>
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;