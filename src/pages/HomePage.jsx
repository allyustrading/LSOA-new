
import { ArrowRight, Mail } from 'lucide-react';
import { communityItems, icons, inquiryTypes, pathways, pillars, trustItems } from '../data/siteData';
import { Card, Container, SectionTitle } from '../components/UI';
import heroHome from '../assets/hero_home.jpg';
import wellnessPathways from '../assets/wellness_pathways.jpg';
import wellnessLab from '../assets/wellness_lab.jpg';

function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm text-teal-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-teal-600" />
              U.S. 501(c)(3) Nonprofit Organization
            </div>
            <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              Building a Research-Informed Natural Wellness Platform at UNH BIC
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Liuli Society is a U.S. 501(c)(3) nonprofit organization advancing wellness education, thoughtful product innovation, and companion-centered community support through a research-informed approach.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
              琉璃社是美国 501(c)(3) 非营利组织，正在 UNH BIC 构建一个基于研究、以社区为核心的天然健康平台。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#/about" className="rounded-full bg-teal-700 px-6 py-3.5 font-medium text-white shadow transition hover:opacity-95">About Liuli Society</a>
              <a href="#/approach" className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-medium text-slate-800 transition hover:bg-slate-50">Explore Our Approach</a>
              <a href="#/contact" className="rounded-full px-6 py-3.5 font-medium text-slate-700 transition hover:text-teal-700">Contact Us</a>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur">
              <img src={heroHome} alt="Community-centered wellness education gathering" className="h-[420px] w-full object-cover" />
              <div className="grid gap-5 p-7 md:p-8">
                <div className="rounded-2xl bg-[linear-gradient(135deg,#d8efe8_0%,#f4f1de_100%)] p-6 md:p-7">
                  <div className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-800">Core Positioning</div>
                  <div className="mt-3 text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">Education. Research. Community.</div>
                  <p className="mt-4 leading-7 text-slate-700">
                    A calm, credible, and community-centered nonprofit presence dedicated to wellness education, exploratory innovation, and thoughtful support.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="bg-white p-5">
                    <div className="text-sm font-semibold text-slate-900">What this site emphasizes</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      <li>Wellness education</li>
                      <li>Research and innovation</li>
                      <li>Community support</li>
                      <li>Daily living support</li>
                    </ul>
                  </Card>
                  <Card className="bg-white p-5">
                    <div className="text-sm font-semibold text-slate-900">What this site avoids</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      <li>Disease treatment claims</li>
                      <li>Clinical cure language</li>
                      <li>Product sales messaging</li>
                      <li>Commercial promotion structure</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-slate-200/70 bg-white/50 py-6 md:py-8">
      <Container>
        <div className="grid gap-4 md:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  const { Microscope, HandHeart } = icons;

  return (
    <>
      <Hero />
      <TrustBar />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <SectionTitle
              eyebrow="Mission"
              title="Our mission is to make healthy living more understandable, accessible, and humane"
              subtitle="We are committed to advancing natural wellness through education, research-informed design, and community-based support. Our mission is to make healthy living more understandable, more accessible, and more humane for individuals, families, and communities."
            />
            <Card className="overflow-hidden p-0">
              <img src={wellnessPathways} alt="Natural wellness ingredients and educational care context" className="h-64 w-full object-cover" />
              <div className="p-7 md:p-8">
                <h3 className="text-xl font-semibold text-slate-900">Community Impact</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  We aim to build a model that does more than offer products. By integrating education, thoughtful design, and human-centered follow-through, we hope to create a healthier and more supportive experience for the communities we serve.
                </p>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                  This is a nonprofit institutional website. It is designed to build trust with universities, grant partners, donors, and communities—not to function as a shop or sales funnel.
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <SectionTitle
            eyebrow="Three Core Pillars"
            title="The website is organized around three foundational pillars"
            subtitle="Based on the founder vision, Liuli Society communicates a structured, research-informed, and human-centered framework for wellness education and community support."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.title} className="h-full p-7 md:p-8">
                  <div className="inline-flex rounded-2xl bg-teal-50 p-3 text-teal-700"><Icon size={24} /></div>
                  <div className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">Core Pillar</div>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">{pillar.title}</h3>
                  <div className="mt-2 text-sm text-slate-500">{pillar.cn}</div>
                  <p className="mt-5 leading-7 text-slate-600">{pillar.text}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200/70 bg-white/70 py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
            <div>
              <SectionTitle
                eyebrow="Wellness Pathways"
                title="Nine pathways organized around daily life, natural care, and future research"
                subtitle="Our wellness framework is organized into nine pathways that reflect everyday needs, natural care experiences, and future areas of research and education."
              />
              <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <img src={wellnessPathways} alt="Herbal ingredients and calm wellness workspace" className="h-72 w-full object-cover" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {pathways.slice(0, 6).map((pathway, idx) => (
                <Card key={pathway.title} className="p-5">
                  <div className="text-sm font-semibold text-teal-700">Pathway {idx + 1}</div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">{pathway.title}</div>
                  <div className="mt-1 text-sm text-slate-500">{pathway.cn}</div>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <a href="#/pathways" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white">
              Explore the 9 Pathways <ArrowRight size={16} />
            </a>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Card className="overflow-hidden p-0">
              <img src={wellnessLab} alt="Research activity in a laboratory setting" className="h-64 w-full object-cover" />
              <div className="p-7 md:p-8">
                <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Microscope size={24} /></div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">Research and Innovation at UNH BIC</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Within the innovation environment of UNH BIC, Liuli Society is developing a nonprofit platform for wellness education, exploratory formulation design, community-centered pilot initiatives, and long-term mission-driven growth.
                </p>
                <ul className="mt-5 space-y-3 text-slate-600">
                  <li>Early-stage wellness innovation</li>
                  <li>Education-centered pilot models</li>
                  <li>Community-facing initiatives</li>
                  <li>Responsible exploration and refinement</li>
                </ul>
              </div>
            </Card>
            <Card className="p-7 md:p-8">
              <div className="inline-flex rounded-2xl bg-amber-50 p-3 text-amber-700"><HandHeart size={24} /></div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900">Support Our Mission</h3>
              <p className="mt-4 leading-7 text-slate-600">
                As a 501(c)(3) nonprofit organization, Liuli Society welcomes mission-aligned partnerships, educational collaborations, and future support opportunities that help expand community wellness impact.
              </p>
              <div className="mt-5 rounded-2xl border border-teal-200 bg-teal-50 p-5 text-teal-900">
                Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="#/support" className="rounded-full bg-slate-900 px-6 py-3 font-medium text-white">Support the Mission</a>
                <a href="#/contact" className="rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-800">Partner With Us</a>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-slate-900 py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="Contact CTA"
              title="Let’s build a better wellness future together"
              subtitle="We welcome conversations with educators, researchers, community partners, and supporters who believe in a more thoughtful approach to natural wellness."
              dark
            />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {inquiryTypes.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {communityItems.slice(0, 2).map((item) => (
                  <div key={item} className="rounded-2xl bg-white/5 p-4 text-slate-300">{item}</div>
                ))}
              </div>
              <a href="#/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 font-semibold text-slate-950">
                Contact Us <Mail size={16} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
