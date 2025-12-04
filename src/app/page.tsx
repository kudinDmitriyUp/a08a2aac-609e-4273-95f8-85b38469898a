"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroChatPromptFeatures from '@/components/sections/hero/HeroChatPromptFeatures';
import BannerGridAbout from '@/components/sections/about/BannerGridAbout';
import FeatureCardTwenty from '@/components/sections/feature/FeatureCardTwenty';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, Code, Smartphone, Cloud, Brain, Shield, TrendingUp, Users, Briefcase, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="dotGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="MasturCoders"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869544981-yg6233bj.jpg"
          logoAlt="MasturCoders Logo"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "features" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroChatPromptFeatures
          title="Innovative Software Solutions for Ukrainian Tech"
          description="MasturCoders builds custom web applications, mobile apps, and enterprise software solutions that drive business growth. Expert development team focused on quality and performance."
          tag="Ukrainian IT Innovation"
          tagIcon={Zap}
          promptText="Ask us about your project..."
          featureTags={[
            { id: "1", label: "Full Stack", icon: Code },
            { id: "2", label: "Mobile Apps", icon: Smartphone },
            { id: "3", label: "Cloud Ready", icon: Cloud },
            { id: "4", label: "AI Integration", icon: Brain }
          ]}
          featureHighlights={[
            { id: "1", icon: Zap, title: "Lightning Fast", subtitle: "Optimized performance and lightning-quick load times" },
            { id: "2", icon: Shield, title: "Enterprise Security", subtitle: "Bank-level security and compliance standards" },
            { id: "3", icon: TrendingUp, title: "Scalable Solutions", subtitle: "Grows with your business needs effortlessly" },
            { id: "4", icon: Users, title: "24/7 Support", subtitle: "Dedicated team always ready to help" }
          ]}
          ariaLabel="Hero section introducing MasturCoders services"
        />
      </div>

      <div id="about" data-section="about">
        <BannerGridAbout
          bannerMedia={{
            title: "Building Digital Future",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869546237-99sy2wpj.jpg"
          }}
          cards={[
            {
              title: "Our Mission",
              description: "Deliver cutting-edge software solutions that transform businesses and create meaningful digital experiences for users across Ukraine and beyond."
            },
            {
              title: "Our Vision",
              description: "Become the leading Ukrainian software development company recognized for innovation, quality, and customer satisfaction worldwide."
            },
            {
              title: "Our Values",
              description: "Excellence, integrity, collaboration, and continuous learning. We believe in building lasting partnerships with our clients and investing in our team's growth."
            }
          ]}
          bottomMedia={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869546927-d9uozs85.jpg"
          }}
          animationType="slide-up"
          useInvertedBackground="noInvert"
          ariaLabel="About MasturCoders section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwenty
          title="Services We Provide"
          description="Comprehensive software development services tailored to your business needs with expertise across multiple technologies and platforms."
          images={[
            { id: 1, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869547709-vm0lyufd.jpg" },
            { id: 2, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869548493-i5sulu07.jpg" },
            { id: 3, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869549287-8ejnjc2u.jpg" },
            { id: 4, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869550048-g2uxhrxi.jpg" }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="Services"
          tagIcon={Briefcase}
          buttons={[
            { text: "View Pricing", href: "pricing" },
            { text: "Contact Us", href: "contact" }
          ]}
          ariaLabel="Services and features section"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTen
          title="Meet Our Team of Expert Developers"
          tag="Team"
          members={[
            { id: "1", name: "Andrii Kovalenko", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869550725-9freylts.jpg" },
            { id: "2", name: "Maryna Shevchenko", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869551233-5ecj891u.jpg" },
            { id: "3", name: "Dmytro Bondarenko", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869551893-535yosxm.jpg" },
            { id: "4", name: "Oksana Pavlenko", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869552456-zx7b7hae.jpg" }
          ]}
          memberVariant="card"
          useInvertedBackground="noInvert"
          ariaLabel="Team members section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Clients Say"
          description="Hear from satisfied clients about their experience working with MasturCoders"
          testimonials={[
            { id: "1", name: "Ivan Serhii", role: "CEO", company: "StartUp Kyiv", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869552983-fkyy84w2.jpg" },
            { id: "2", name: "Olena Mykhailo", role: "Product Manager", company: "Tech Solutions Ltd", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869553433-s6utzzql.png" },
            { id: "3", name: "Viktor Yuri", role: "Founder", company: "Digital Agency Pro", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869554015-tkgpnidb.jpg" },
            { id: "4", name: "Natalia Petro", role: "CTO", company: "Innovation Hub", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764869554782-tnkiftcf.jpg" }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Client testimonials section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and process"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What technologies do you work with?",
              content: "We specialize in modern web technologies including React, Node.js, Python, and cloud platforms like AWS. We also develop iOS and Android mobile applications using React Native and native technologies."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary based on scope and complexity. A simple website takes 2-4 weeks, while enterprise applications can take 3-6 months. We'll provide a detailed timeline during project planning."
            },
            {
              id: "3",
              title: "Do you provide ongoing support?",
              content: "Yes, we offer comprehensive support packages including bug fixes, updates, feature enhancements, and server maintenance. Support can be monthly, quarterly, or as-needed."
            },
            {
              id: "4",
              title: "What is your development process?",
              content: "We follow Agile methodology with sprints, regular communication, and iterative development. This ensures transparency, flexibility, and quality deliverables that meet your expectations."
            },
            {
              id: "5",
              title: "Can you help with existing projects?",
              content: "Absolutely. We have experience taking over, upgrading, and optimizing existing applications. We can audit your code, identify issues, and provide solutions for improved performance."
            },
            {
              id: "6",
              title: "What are your pricing models?",
              content: "We offer flexible pricing including fixed-price projects, time-and-materials, and retainer agreements. We'll work with you to find the best model for your budget and project needs."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          ariaLabel="FAQ section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to start your next project? Let's build something amazing together."
          animationType="reveal-blur"
          inputPlaceholder="Enter your email"
          buttonText="Send"
          useInvertedBackground="noInvert"
          ariaLabel="Contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="MasturCoders"
          copyrightText="© 2025 MasturCoders. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Web Development", href: "features" },
                { label: "Mobile Apps", href: "features" },
                { label: "Cloud Solutions", href: "features" },
                { label: "Consulting", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Team", href: "team" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Documentation", href: "#" },
                { label: "Status", href: "#" }
              ]
            }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}