import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" legacyBehavior passHref>
        <NavLink />
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects" legacyBehavior passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech" legacyBehavior passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        {/* External link */}
        <NavLink
          href="https://medium.com/@e.berkeaydin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </NavLink>
      </li>

      <li>
        <Link href="#about" legacyBehavior passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons
        href="https://github.com/eberkeaydin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons
        href="https://www.linkedin.com/in/eberkeaydin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons
        href="https://www.instagram.com/e.berkeaydin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
