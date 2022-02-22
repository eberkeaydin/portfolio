import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href='e.berkeaydin@gmail.com'>e.berkeaydin@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Address</LinkTitle>
          <LinkItem href='https://en.wikipedia.org/wiki/%C4%B0zmir'>Bornova, Izmir | Turkey</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Veritas Vincit</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/eberkeaydin'>
        <AiFillGithub size="3rem" />
        </SocialIcons>
       <SocialIcons href='https://www.linkedin.com/in/eberkeaydin/'>
        <AiFillLinkedin size="3rem" />
       </SocialIcons>
        <SocialIcons href='https://www.instagram.com/e.berkeaydin/'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
