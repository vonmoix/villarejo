import { Nav } from "@/components/nav";
import { HeroPaths } from "@/components/ui/background-paths";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

// v2 components — critique improvements
import { Skills }         from "@/components/v2/skills";
import { TechStack }      from "@/components/v2/tech-stack";
import { Certifications } from "@/components/v2/certifications";
import { About }          from "@/components/v2/about";
import { Contact }        from "@/components/v2/contact";

export default function HomeV2() {
  return (
    <>
      <Nav />
      <main id="main-content">
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
        <Education />
        <Skills />
        <TechStack />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
