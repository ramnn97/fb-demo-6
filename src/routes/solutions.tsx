import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Our Solutions — FaceBuilds" },
      { name: "description", content: "Explore FaceBuilds solutions for personal branding, content, PR, marketing, events, and automation." },
      { property: "og:title", content: "Our Solutions — FaceBuilds" },
      { property: "og:description", content: "A complete creative and growth system for building a brand people remember." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientPage,
});

const solutions = [
  {
    number: "01",
    title: "Personal Branding",
    promise: "Be the name they remember.",
    description: "People don't just buy products, they buy people they trust. We turn your story, skills, and personality into a brand that feels real, looks sharp, and stays in people's minds long after they scroll past.",
    points: ["Story & positioning", "Content roadmap", "Profile makeover", "Signature look & feel"],
  },
  {
    number: "02",
    title: "Podcast Production",
    promise: "You bring the talk, we bring the polish.",
    description: "From the first topic idea to the final upload, we take care of the heavy lifting. You get a podcast that sounds crisp, looks pro, and makes you the go-to voice in your space.",
    points: ["Topic & guest planning", "High-quality studio recording", "Clean editing & mixing", "Reels from podcasts"],
  },
  {
    number: "03",
    title: "Performance Marketing",
    promise: "Ads that earn, not just run.",
    description: "Budget kahan gaya? Never a question you'll have to ask. We build ad campaigns around numbers, testing, and smart targeting, so every rupee works harder and brings you real customers.",
    points: ["Meta & Google ads", "Smart audience targeting", "Scroll-stopping Reels & creatives", "Clear monthly reports"],
  },
  {
    number: "04",
    title: "Influencer Marketing",
    promise: "Right faces. Real trust.",
    description: "Likes are easy, belief is rare. We match you with brands your audience already listens to, and shape collaborations that feel natural, not forced.",
    points: ["Brand hunt & shortlisting", "Deals & coordination", "Campaign brief & planning", "Results tracking"],
  },
  {
    number: "05",
    title: "Event Shoot Production",
    promise: "Moments end. Content doesn't.",
    description: "Your event takes weeks to plan and one day to happen. We capture every spark and turn it into videos, reels, and photos that keep working for you for months afterward.",
    points: ["Photo & video coverage", "Same-day reels", "Guest soundbites", "Pre & post-event marketing"],
  },
  {
    number: "06",
    title: "PR Management",
    promise: "Let the right people talk about you.",
    description: "Good work deserves good headlines. We craft your story, pitch it to podcast channels, distribute content across multiple channels, and protect your reputation—so you earn credibility money can't buy through ads.",
    points: ["Content distribution", "Podcast outreach", "Image & reputation care", "Interviews & features"],
  },
  {
    number: "07",
    title: "AI Content Creation",
    promise: "More content. Less waiting.",
    description: "Why wait weeks for one video? We use AI to create ads, visuals, and scripts at lightning speed while keeping your voice and feel completely intact.",
    points: ["AI organic videos & ads", "Scripts & captions", "Creative visuals", "Multi-language versions"],
  },
  {
    number: "08",
    title: "AI Automation & Funnels",
    promise: "Your business, always on.",
    description: "Stop chasing every lead by hand. We build smart systems that catch interested people, follow up on time, and guide them to buy, even when you're asleep or busy.",
    points: ["Landing pages & funnels", "WhatsApp & email flows", "Automated lead follow-up workflows", "Chatbot & AI calling setup"],
  },
];

const solutionPanels = [
  {
    label: "Brand & content",
    note: "Strategy, storytelling, and the work people remember.",
    title: "Turn expertise\ninto influence.",
    services: solutions.slice(0, 3),
  },
  {
    label: "Reach & reputation",
    note: "Build trust with the right people, in the right places.",
    title: "Key client\nneeds.",
    services: solutions.slice(3, 6),
  },
  {
    label: "Creative systems",
    note: "Create consistently and make every opportunity count.",
    title: "Everything\nworking together.",
    services: solutions.slice(6, 8),
  },
];

function ClientPage() {
  const pageRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = page.querySelectorAll<HTMLElement>("[data-reveal]");
    let observer: IntersectionObserver | undefined;

    if (reducedMotion) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.16, rootMargin: "0px 0px -7% 0px" });
      revealTargets.forEach((target) => observer.observe(target));
    }

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
        progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
    <main className="client-page solutions-page" ref={pageRef}>
      <div className="solutions-reading-progress" ref={progressRef} aria-hidden="true" />
      <header className="solutions-header">
        <Link to="/" className="wordmark" aria-label="FaceBuilds home"><img src="/logo-transparent.png" alt="FaceBuilds" /></Link>
      </header>

      <section className="solutions-hero" aria-labelledby="solutions-title">
        <div className="solutions-hero-copy" data-reveal>
          <h1 id="solutions-title">Make your brand<br /><em>impossible to miss.</em></h1>
          <p className="solutions-hero-intro">One connected team for the strategy, stories, and systems that turn attention into lasting growth.</p>
          <a className="solutions-hero-link" href="#solutions">Explore the solutions <ArrowDown aria-hidden="true" /></a>
        </div>
      </section>

      <div id="solutions">
      <div className="solutions-panels" aria-label="Our solutions">
        {solutionPanels.map((panel, panelIndex) => (
          <section className={`solutions-panel solutions-panel-${panelIndex + 1}`} data-reveal aria-label={panel.label} key={panel.label}>
            <div className="solutions-panel-head">
              <span className="solutions-panel-label">{panel.label}</span>
              <span className="solutions-panel-note">FaceBuilds · Our solutions</span>
              <h2>{panel.title.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h2>
              <p>{panel.note}</p>
            </div>
            <div className="solutions-panel-cards">
              {panel.services.map((solution, serviceIndex) => (
                <article className={`solutions-service-card solutions-service-card-${serviceIndex + 1}`} aria-label={solution.title} key={solution.number}>
                  <span className="solutions-service-topline">{solution.number} <span>FaceBuilds / Service</span></span>
                  <div className="solutions-service-copy">
                    <p className="solutions-service-promise">{solution.promise}</p>
                    <div className="solutions-service-title"><h3>{solution.title}</h3><span aria-hidden="true">↗</span></div>
                    <p className="solutions-service-description">{solution.description}</p>
                    <ul>{solution.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="solutions-list solutions-mobile-list" aria-label="Our solutions">
        <svg className="solutions-mobile-route" viewBox="0 0 1000 1600" preserveAspectRatio="none" aria-hidden="true">
          <path d="M150 0 V80 C150 112 176 130 218 130 H782 C850 130 850 166 850 200 V280 C850 312 824 330 782 330 H218 C150 330 150 366 150 400 V480 C150 512 176 530 218 530 H782 C850 530 850 566 850 600 V680 C850 712 824 730 782 730 H218 C150 730 150 766 150 800 V880 C150 912 176 930 218 930 H782 C850 930 850 966 850 1000 V1080 C850 1112 824 1130 782 1130 H218 C150 1130 150 1166 150 1200 V1280 C150 1312 176 1330 218 1330 H782 C850 1330 850 1366 850 1400 V1480 C850 1512 824 1530 782 1530 H218 C150 1530 150 1566 150 1600" />
        </svg>
        {solutions.map((solution) => (
          <article className="solution-entry" aria-label={solution.title} key={solution.number}>
            <div className="solution-entry-circle" aria-hidden="true" />
            <div className="solution-entry-body">
              <div className="solution-entry-copy">
                <p className="solution-entry-promise">{solution.promise}</p>
                <span className="solution-entry-number">{solution.number}</span>
                <h2>{solution.title}</h2>
                <p className="solution-entry-description">{solution.description}</p>
              </div>
              <ul className="solution-entry-points" aria-label={`${solution.title} includes`}>
                {solution.points.map((point) => <li key={point}><span aria-hidden="true" />{point}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>
      </div>

      <footer className="solutions-outro solutions-reference-footer" data-reveal aria-label="FaceBuilds footer">
        <div className="solutions-footer-top">
          <div className="solutions-footer-details">
            <p>Personal branding · Content · Growth</p>
            <p>© {new Date().getFullYear()} FaceBuilds. All rights reserved.</p>
          </div>
          <nav className="solutions-footer-socials" aria-label="Social media">
            <a href="https://www.linkedin.com/company/facebuilds/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin /></a>
            <a href="https://www.facebook.com/share/1JLXozAw9u/" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook /></a>
            <a href="https://www.instagram.com/facebuildsofficial?stkn=eTU4aW4yenJ1Z2s3" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram /></a>
            <a href="https://youtube.com/@facebuilds?si=WE0sMSycHPfsAsU1" aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube /></a>
          </nav>
        </div>
        <div className="solutions-outro-line">
          <h2>Make your next move <em>count.</em></h2>
          <a href="https://calendly.com/facebuilds" className="solutions-contact-link" target="_blank" rel="noreferrer">Let’s talk <ArrowRight aria-hidden="true" /></a>
        </div>
        <a className="solutions-footer-wordmark" href="/" aria-label="FaceBuilds home">FaceBuilds</a>
      </footer>
    </main>
    </>
  );
}
