import { Card, Container } from '../components/UI';

export default function NotFoundPage() {
  return (
    <section className="py-28">
      <Container>
        <Card className="p-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Page not found</h2>
          <p className="mt-4 text-slate-600">Please use the navigation to continue exploring the Liuli Society website design.</p>
          <a href="#/home" className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 font-medium text-white">Back to Home</a>
        </Card>
      </Container>
    </section>
  );
}
