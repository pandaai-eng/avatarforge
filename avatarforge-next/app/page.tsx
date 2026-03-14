import Link from 'next/link';
import { presets } from '@/data/presets';
import { compileSystemPack } from '@/lib/compiler';

export default function HomePage() {
  const featured = compileSystemPack('creator');

  return (
    <main className="shell">
      <section className="hero card">
        <div>
          <p className="eyebrow">AvatarForge OS</p>
          <h1>Build premium AI avatar systems you can use or sell.</h1>
          <p className="lede">
            A productized AI-avatar workspace for prompts, scripts, offers, and launch assets.
            Built for creators, agencies, coaches, ecommerce brands, and digital operators.
          </p>
          <div className="actions">
            <Link href="/presets" className="button primary">Browse Presets</Link>
            <Link href="/sales" className="button secondary">View Sales Assets</Link>
          </div>
        </div>
        <div className="preview card soft">
          <h2>{featured.title}</h2>
          <p>{featured.avatarBible}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Preset packs</p>
            <h2>Start from high-converting niches</h2>
          </div>
          <Link href="/presets" className="text-link">See all presets →</Link>
        </div>
        <div className="grid cards3">
          {presets.map((preset) => (
            <article key={preset.slug} className="card">
              <p className="tag">{preset.niche}</p>
              <h3>{preset.title}</h3>
              <p>{preset.promise}</p>
              <ul>
                {preset.deliverables.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link href={`/presets/${preset.slug}`} className="text-link">Open preset →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section card">
        <p className="eyebrow">What this becomes</p>
        <h2>From prototype to product</h2>
        <div className="grid cards2">
          <div>
            <h3>Use it yourself</h3>
            <p>Create branded avatar systems, prompt vaults, script packs, and content calendars for your own offer stack.</p>
          </div>
          <div>
            <h3>Sell it as a product</h3>
            <p>Package preset packs, ebook bundles, prompt vaults, and done-with-you implementation offers around the same engine.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
