import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BlogPosts from '../components/Blog/BlogPosts';


const Home = () => {
  return (
          <Layout>
            <Section grid>
              <Hero />
              <BgAnimation />
            </Section>
            <Projects />
            <Technologies />
            <Timeline />
            <Acomplishments />
          </Layout>
        
  );
};



export default Home;
