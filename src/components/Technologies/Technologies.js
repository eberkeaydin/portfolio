import React from 'react';
import { DiSolidity, DiJava, DiPython, DiReact, DiVue, DiNodejs, DiDocker} from 'react-icons/di';
import { SiSolidity} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the Ethereum Blockchain and web development.
      From Front-end to Web3 Development
    </SectionText>
    <List>
    <ListItem>
        <picture>
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Server Side</ListTitle>
          <ListParagraph>
            Experience with Node <br />
            Typescript, Nest.js, Elasticsearch
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiVue size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Nuxt.js, Element UI and TailwindCSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, MySQL and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
      <ListItem>
        <picture>
          <DiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Microservices</ListTitle>
          <ListParagraph>
            Experience with <br />
            Kubernetes, Elasticsearch, Apache Kafka and Airflow 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;