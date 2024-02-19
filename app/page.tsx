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
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page"
        align={""}
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
        align=""
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
        align=""
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
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
