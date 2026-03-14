import Link from 'next/link';
import { compileSystemPack, getPreset } from '@/lib/compiler';

export default async function PresetDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const preset = getPreset(slug);
  const pack = compileSystemPack(slug);

  return (
    <main className="shell">
      <section className="section-head">
        <div>
          <p className="eyebrow">{preset.niche}</p>
          <h1>{preset.title}</h1>
          <p className="lede">{preset.promise}</p>
        </div>
        <Link href="/presets" className="text-link">← Back to presets</Link>
      </section>

      <section className="grid cards2">
        <article className="card">
          <h2>Avatar Bible</h2>
          <pre>{pack.avatarBible}</pre>
        </article>
        <article className="card">
          <h2>Master Image Prompt</h2>
          <pre>{pack.imagePrompt}</pre>
        </article>
        <article className="card">
          <h2>Video Prompt</h2>
          <pre>{pack.videoPrompt}</pre>
        </article>
        <article className="card">
          <h2>Offer Stack</h2>
          <pre>{pack.offerStack}</pre>
        </article>
      </section>

      <section className="card">
        <p className="eyebrow">Hooks</p>
        <ul>
          {pack.hooks.map((hook) => <li key={hook}>{hook}</li>)}
        </ul>
      </section>
    </main>
  );
}
