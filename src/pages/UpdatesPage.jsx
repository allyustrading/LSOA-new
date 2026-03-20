import { updates } from '../data/siteData';
import { Card, PageLayout } from '../components/UI';

export default function UpdatesPage() {
  return (
    <PageLayout
      eyebrow="Updates"
      title="A nonprofit-friendly publishing space for educational and mission-driven content"
      subtitle="This page can hold project updates, educational articles, community events, research notes, and reflections on wellness design while maintaining a calm nonprofit tone."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {updates.map((item) => (
          <Card key={item.title} className="p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">{item.type}</div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
