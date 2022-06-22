import React from 'react';
import { DiSolidity, DiJava, DiPython, DiReact} from 'react-icons/di';
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
          <SiSolidity size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web3</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity, Smart Contracts
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Vue.js, React.js, Bootstrap 5.0
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
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Scraping</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python Scrapy Framework 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;