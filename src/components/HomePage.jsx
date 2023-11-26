import React from 'react'
import Banner from './pages/landing-page/Banner';
import CallToAction from './pages/landing-page/CallToAction';
import Faq from './pages/landing-page/Faq';
import Intro from './pages/landing-page/Intro';
import More from './pages/landing-page/More';
import Features from './pages/landing-page/Features';

export default function HomePage() {
  return (
    <>
      <Banner />
      <Intro />
      <Features />
      <More />
      <Faq />
      <CallToAction />
    </>
  );
};
