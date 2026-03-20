
import { pathways } from '../data/siteData';
import { Card, PageLayout } from '../components/UI';
import wellnessPathways from '../assets/wellness_pathways.jpg';

export default function PathwaysPage() {
  return (
    <PageLayout
      eyebrow="Wellness Pathways"
      title="Nine pathways that reflect daily life scenarios, natural care experiences, and future innovation"
      subtitle="The Liuli wellness framework is organized into nine pathways. These pathways reflect everyday life scenarios, natural care experiences, and areas for education, exploration, and future innovation."
    >
      <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <img src={wellnessPathways} alt="Natural wellness ingredients and thoughtful daily care setting" className="h-80 w-full object-cover" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {pathways.map((pathway, index) => (
          <Card key={pathway.title} className="p-6 md:p-7">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-teal-700">Pathway {index + 1}</div>
              <div className="text-xs text-slate-400">0{index + 1}</div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{pathway.title}</h3>
            <div className="mt-2 text-sm text-slate-500">{pathway.cn}</div>
            <p className="mt-4 text-sm leading-7 text-slate-600">{pathway.text}</p>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
