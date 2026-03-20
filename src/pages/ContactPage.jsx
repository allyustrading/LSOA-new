import { icons, inquiryTypes } from '../data/siteData';
import { Card, PageLayout } from '../components/UI';

export default function ContactPage() {
  const { Building2 } = icons;

  return (
    <PageLayout
      eyebrow="Contact"
      title="Open a conversation with Liuli Society"
      subtitle="We welcome conversations with educators, researchers, community partners, volunteers, and supporters who believe in a more thoughtful approach to natural wellness."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-7 md:p-8">
          <div className="inline-flex rounded-2xl bg-slate-100 p-3 text-slate-700"><Building2 size={24} /></div>
          <h3 className="mt-5 text-2xl font-semibold text-slate-900">Suggested Inquiry Types</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {inquiryTypes.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-7 md:p-8">
          <h3 className="text-2xl font-semibold text-slate-900">Contact Form Preview</h3>
          <p className="mt-3 leading-7 text-slate-600">This form is included as a design-ready preview and can later be connected to email, a CRM, or a nonprofit form tool.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none" placeholder="Your name" />
            <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none" placeholder="Email address" />
            <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none md:col-span-2" placeholder="Inquiry type" />
            <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none md:col-span-2" placeholder="How would you like to connect with Liuli Society?" />
          </div>
          <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 font-medium text-white">Contact Us</button>
        </Card>
      </div>
    </PageLayout>
  );
}
