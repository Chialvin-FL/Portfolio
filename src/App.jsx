import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import FeaturedWorks from './components/FeaturedWorks';
import WorkExperience from './components/WorkExperience';
import TechStack from './components/TechStack';
import Hackathons from './components/Hackathons';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <FeaturedWorks />
      <WorkExperience />
      <TechStack />
      <Hackathons />
      <Testimonials />
      <Contact />
      <Chatbot />
    </Layout>
  );
}

export default App;
