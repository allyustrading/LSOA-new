import { Card, PageLayout } from '../components/UI';

export default function SupportPage() {
  return (
    <PageLayout
      eyebrow="Support Us"
      title="A page that builds nonprofit credibility now and prepares for future growth"
      subtitle="Even if donations are not the current priority, this page builds nonprofit credibility and prepares the organization for future support, educational collaboration, and partnership opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-7">
          <h3 className="text-2xl font-semibold text-slate-900">Why Support Liuli Society</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Support helps expand educational work, research-informed learning, community-facing initiatives, and long-term mission-centered development.
          </p>
        </Card>
        <Card className="p-7">
          <h3 className="text-2xl font-semibold text-slate-900">Partnership Opportunities</h3>
          <p className="mt-4 leading-7 text-slate-600">
            The page can invite mission-aligned partnerships with universities, educators, community organizations, and philanthropic supporters.
          </p>
        </Card>
        <Card className="p-7">
          <h3 className="text-2xl font-semibold text-slate-900">Educational Collaboration</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Liuli Society welcomes future collaboration around wellness education, pilot learning models, and thoughtful approaches to daily support.
          </p>
        </Card>
        <Card className="border-teal-200 bg-teal-50 p-7">
          <h3 className="text-2xl font-semibold text-teal-950">Tax-Deductible Giving Statement</h3>
          <p className="mt-4 leading-7 text-teal-900">
            Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.
          </p>
        </Card>
      </div>
    </PageLayout>
  );
}
