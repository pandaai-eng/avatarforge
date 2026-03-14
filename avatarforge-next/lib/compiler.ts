import { presets } from '@/data/presets';

export function getPreset(slug: string) {
  return presets.find((preset) => preset.slug === slug) ?? presets[0];
}

export function compileSystemPack(slug: string) {
  const preset = getPreset(slug);

  return {
    title: preset.title,
    avatarBible: `ROLE: ${preset.title}\nNICHE: ${preset.niche}\nAUDIENCE: ${preset.audience}\nPROMISE: ${preset.promise}\nVISUAL STYLE: ${preset.visualStyle}\nVOICE: ${preset.voice}\n\nRULES:\n- Maintain strong visual consistency\n- Use emotionally specific hooks\n- Teach, persuade, and transition toward conversion\n- Avoid bland generic creator language\n- Stay commercially useful at all times`,
    imagePrompt: `Create a premium AI avatar system render for ${preset.title}. Niche: ${preset.niche}. Audience: ${preset.audience}. Style: ${preset.visualStyle}. Tone: ${preset.voice}. Make the output look like a top-tier digital brand with consistent facial identity, premium composition, polished wardrobe, and conversion-aware aesthetic intent. Negative prompt: low-detail face, drift, weak wardrobe, clutter, muddy lighting, low authority energy.`,
    videoPrompt: `Generate a 20-35 second short-form video concept for ${preset.title}. Use hook-first pacing, one sharp insight, one tactical takeaway, and a clean CTA. Maintain ${preset.visualStyle} visual continuity and ${preset.voice} delivery.`,
    offerStack: ['Core system pack', ...preset.deliverables].join('\n- '),
    hooks: preset.hooks,
  };
}
