
import { communityItems, icons } from '../data/siteData';
import { Card, PageLayout } from '../components/UI';
import heroCommunity from '../assets/hero_community.jpg';

export default function CommunityPage() {
  const { Users } = icons;

  return (
    <PageLayout
      eyebrow="Community"
      title="Making wellness ideas more accessible and more supportive for real communities"
      subtitle="Liuli Society exists not only to explore wellness ideas, but to make them more accessible and supportive for real communities."
    >
      <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <img src={heroCommunity} alt="Community conversation in a calm collaborative setting" className="h-80 w-full object-cover" />
      </div>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <Card className="p-7 md:p-8">
          <h3 className="text-2xl font-semibold text-slate-900">Main Message</h3>
          <p className="mt-4 leading-7 text-slate-600">
            By integrating education, thoughtful design, and ongoing people-centered support, Liuli Society hopes to bring healthier and more supportive experiences to the communities it serves.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {communityItems.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-7 md:p-8">
          <div className="inline-flex rounded-2xl bg-teal-50 p-3 text-teal-700"><Users size={24} /></div>
          <h3 className="mt-5 text-2xl font-semibold text-slate-900">Long-Term Community Support Vision</h3>
          <p className="mt-4 leading-7 text-slate-600">
            The community page is intended to present a gentle, accessible, and future-facing vision for education, volunteer involvement, group experiences, and long-term supportive relationships.
          </p>
        </Card>
      </div>
    </PageLayout>
  );
}
