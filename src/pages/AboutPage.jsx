import { Card, PageLayout } from '../components/UI';

export default function AboutPage() {
  return (
    <PageLayout
      eyebrow="About"
      title="Who Liuli Society is and why it is structured as a nonprofit"
      subtitle="Liuli Society is a U.S. nonprofit organization recognized as tax-exempt under Section 501(c)(3) of the Internal Revenue Code. We are committed to advancing wellness education, research-informed innovation, and community-based initiatives that support healthier everyday living."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-7">
          <h3 className="text-2xl font-semibold text-slate-900">Who We Are</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Liuli Society is a mission-driven nonprofit organization focused on education, research-informed wellness innovation, and community support. The site is intentionally designed to communicate credibility, warmth, and institutional trust.
          </p>
        </Card>
        <Card className="p-7">
          <h3 className="text-2xl font-semibold text-slate-900">Our Mission</h3>
          <p className="mt-4 leading-7 text-slate-600">
            We are committed to making healthy living more understandable, accessible, and humane through educational frameworks, supportive initiatives, and thoughtful design.
          </p>
        </Card>
        <Card className="p-7">
          <h3 className="text-2xl font-semibold text-slate-900">Our Vision</h3>
          <p className="mt-4 leading-7 text-slate-600">
            We envision a future where wellness knowledge, community trust, and responsible innovation come together to create supportive and grounded everyday living.
          </p>
        </Card>
        <Card className="p-7">
          <h3 className="text-2xl font-semibold text-slate-900">Why This Model</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Liuli Society uses a nonprofit structure so that public value, research-informed education, and community-facing mission remain central. This website does not promote product sales or commercial campaigns.
          </p>
        </Card>
      </div>
    </PageLayout>
  );
}
