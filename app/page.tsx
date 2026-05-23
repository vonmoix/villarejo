import { Nav } from "@/components/nav";
import { HeroPaths } from "@/components/ui/background-paths";
import { Experience } from "@/components/sections/experience";
import { TechStack } from "@/components/sections/tech-stack";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroPaths
          firstName="Manuel"
          lastName="Villarejo"
          eyebrow="IT Director & Enterprise Engineering Leader"
          subtitle="19 years at the intersection of technology strategy and engineering leadership."
        >
          <p className="text-muted leading-[1.78] mb-8 max-w-[60ch]"
             style={{ fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)" }}>
            Currently IT Director at Expenti, focused on technology strategy,
            ERP/HRIS integrations, and AI automation. MBA from Imperial College
            London. Track record in M&amp;A, carve-outs, and regulatory
            compliance (ISO 27001) across Europe and APAC.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://linkedin.com/in/mvillarejo"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </Button>
          </div>
        </HeroPaths>

        <Experience />
        <TechStack />
        <Education />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
