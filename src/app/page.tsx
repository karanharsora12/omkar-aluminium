import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Introduction from "@/components/introduction";
import Products from "@/components/products";
import Services from "@/components/services";
import Projects from "@/components/projects";
import WhyUs from "@/components/why-us";
import Process from "@/components/process";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTASection from "@/components/cta-section";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Products />
        <Services />
        <Projects />
        <WhyUs />
        <Process />
        <Statistics />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
