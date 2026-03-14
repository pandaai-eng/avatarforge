import Link from 'next/link';
import { presets } from '@/data/presets';

export default function PresetsPage() {
  return (
    <main className="shell">
      <section className="section-head">
        <div>
          <p className="eyebrow">Preset library</p>
          <h1>Avatar system packs</h1>
        </div>
        <Link href="/" className="text-link">← Back home</Link>
      </section>
      <div className="grid cards2">
        {presets.map((preset) => (
          <article key={preset.slug} className="card">
            <p className="tag">{preset.niche}</p>
            <h2>{preset.title}</h2>
            <p>{preset.promise}</p>
            <p><strong>Audience:</strong> {preset.audience}</p>
            <p><strong>Visual:</strong> {preset.visualStyle}</p>
            <p><strong>Voice:</strong> {preset.voice}</p>
            <ul>
              {preset.deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Link href={`/presets/${preset.slug}`} className="button primary">Open pack</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
