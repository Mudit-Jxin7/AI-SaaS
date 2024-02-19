"use client";

import React from "react";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SectionTitle from "@/components/landing/SectionTitle";
import Benefits from "@/components/landing/Benefits";
import { benefitOne, benefitTwo } from "@/components/landing/Data";
import Video from "@/components/landing/Video";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import Cta from "@/components/landing/Cta";
import Footer from "@/components/landing/Footer";
import PopupWidget from "@/components/landing/PopupWidget";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Visual Vivo Benefits"
        title=" Why should you use it"
        align={""}
      >
        Our AI SaaS image editor offers unparalleled convenience and efficiency
        by harnessing the power of artificial intelligence. With seamless
        integration and intuitive features, it streamlines the editing process,
        saving you time and effort. Stay ahead of the curve with cutting-edge
        technology that enhances your creativity and productivity effortlessly.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
        align=""
      >
        This section is to highlight a promo or demo video of your product.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
        align=""
      >
        Look at some of our customer testimonials to see how they feel about our
        product.
      </SectionTitle>
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default LandingPage;
