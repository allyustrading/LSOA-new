import { Card, PageLayout } from '../components/UI';

const steps = [
  ['Why Knowledge Comes First', 'Our approach begins not with selling, but with understanding.'],
  ['From Understanding to Design', 'Natural wellness solutions are designed from a health knowledge foundation and shaped for real-life daily use.'],
  ['From Design to Daily Support', 'Support becomes meaningful when it is translated into understandable practices, routines, and educational experiences.'],
  ['The Role of Companion Support', 'We value one-time use less than long-term guidance, feedback, and supportive follow-through.'],
  ['Long-Term Trust Model', 'Trust grows through clarity, care, documentation, and ongoing human-centered support.'],
];

export default function ApproachPage() {
  return (
    <PageLayout
      eyebrow="Our Approach"
      title="A clear and professional framework rooted in understanding first"
      subtitle="Liuli’s foundational logic is presented in a nonprofit-friendly and research-friendly format that moves from knowledge to design, and from design to daily support."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {steps.map(([title, text]) => (
          <Card key={title} className="p-6 lg:col-span-1">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
