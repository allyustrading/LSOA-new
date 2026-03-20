
import { Card, PageLayout } from '../components/UI';
import heroResearch from '../assets/hero_research.jpg';
import wellnessLab from '../assets/wellness_lab.jpg';

const sections = [
  ['Why UNH BIC', 'UNH BIC provides an innovation environment that supports thoughtful exploration, institutional credibility, and future collaboration.'],
  ['Research-Informed Wellness Innovation', 'Liuli Society is developing a nonprofit platform that promotes wellness education, exploratory design, and responsible refinement.'],
  ['Exploratory Development Areas', 'Early-stage wellness innovation, education-centered pilot models, and exploratory formulation design can all be presented clearly within this structure.'],
  ['Community Pilot Possibilities', 'Community-facing pilots may support learning, accessibility, and better understanding of supportive daily wellness models.'],
  ['Future Collaboration Opportunities', 'The site can invite future partnerships with universities, researchers, educators, and mission-aligned supporters.'],
];

export default function ResearchPage() {
  return (
    <PageLayout
      eyebrow="Research at UNH BIC"
      title="A calm, credible, and institutionally grounded research page"
      subtitle="This section is designed to show seriousness, innovation, and nonprofit legitimacy with an academic-light tone that remains professional, warm, and credible."
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <img src={heroResearch} alt="Hands pouring natural formulation materials in a research setting" className="h-[360px] w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <img src={wellnessLab} alt="Microscope-based laboratory work for wellness research" className="h-[360px] w-full object-cover" />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {sections.map(([title, text]) => (
          <Card key={title} className="p-7">
            <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{text}</p>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
