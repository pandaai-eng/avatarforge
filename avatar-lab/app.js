const toolStacks = {
  "ChatGPT Image": ["ChatGPT Image", "Flux", "Photoshop / Canva", "ElevenLabs", "CapCut"],
  "Midjourney": ["Midjourney", "Magnific / Upscaler", "Canva", "ElevenLabs", "HeyGen"],
  "Flux": ["Flux", "ComfyUI or hosted Flux", "Canva", "Runway", "ElevenLabs"],
  "Runway": ["Runway", "Flux / ChatGPT Image", "CapCut", "ElevenLabs", "Airtable / Notion"],
  "Kling": ["Kling", "Flux / Midjourney", "CapCut", "ElevenLabs", "Google Drive"],
  "HeyGen": ["HeyGen", "ChatGPT", "ElevenLabs", "Canva", "Google Drive"]
};

const nicheAngles = {
  "Creator Education": "teach creators how to build authority and monetize content with an AI avatar system",
  "Beauty / Lifestyle": "build an aspirational personal brand that feels premium, feminine, and conversion-ready",
  "Crypto / Finance": "explain markets with bold authority, clarity, and visually addictive short-form content",
  "Fitness / Coaching": "turn transformation stories into structured offers, habits, and high-converting social proof",
  "Real Estate": "publish trust-building market content, listing explainers, and warm lead-generation clips",
  "Ecommerce": "produce product storytelling, UGC concepts, and repeatable conversion creatives",
  "Agency / B2B": "create authority assets that generate inbound leads and demonstrate expert positioning"
};

function el(id) { return document.getElementById(id); }

function buildState() {
  return {
    brandName: el("brandName").value.trim(),
    niche: el("niche").value,
    persona: el("persona").value.trim(),
    goal: el("goal").value,
    platform: el("platform").value,
    style: el("style").value,
    voice: el("voice").value,
    cta: el("cta").value,
  };
}

function fillOutputs(s) {
  const promise = `${s.brandName} helps users ${nicheAngles[s.niche]}.`;
  const tools = toolStacks[s.platform].join("\n- ");

  el("avatarBible").value = `BRAND: ${s.brandName}\nNICHE: ${s.niche}\nPERSONA: ${s.persona}\nMISSION: ${promise}\n\nAVATAR RULES:\n- Always sound ${s.voice.toLowerCase()}\n- Maintain ${s.style.toLowerCase()} visual consistency\n- Teach, persuade, and direct toward ${s.goal.toLowerCase()}\n- Use one memorable signature phrase per piece of content\n- Keep messaging emotionally specific, not generic\n\nCONTENT PILLARS:\n1. Belief-shifting content\n2. Behind-the-scenes process\n3. Social proof / transformation\n4. Offer education\n5. Soft CTA to ${s.cta.toLowerCase()}\n\nVISUAL DNA:\n- 9:16 vertical-first compositions\n- cinematic lighting + premium color grading\n- clean wardrobe, consistent color palette, branded scene styling\n- face remains highly consistent across outputs\n\nDO NOT:\n- use cluttered backgrounds\n- mix too many aesthetics\n- use weak generic hooks\n- let the avatar drift in age, facial structure, or brand tone`;

  el("imagePrompt").value = `Create a highly consistent branded AI avatar for ${s.brandName}. The subject is a ${s.persona.toLowerCase()} serving the ${s.niche} niche. Use a ${s.style.toLowerCase()} aesthetic with premium cinematic lighting, realistic skin texture, symmetrical face, polished wardrobe styling, and strong eye contact. Frame for short-form vertical content. Keep the face identity stable across generations. Include branded color harmony, creator-economy energy, and a conversion-oriented visual mood. Output should feel like a top 1% digital brand, not generic influencer content. Negative prompt: inconsistent face, extra fingers, distorted eyes, low detail, muddy lighting, cheap stock-photo feel, cluttered background, weak fashion styling, low-contrast composition.`;

  el("videoPrompt").value = `Generate a short-form talking avatar video concept for ${s.brandName}. The avatar should deliver a 20-35 second hook-led message for ${s.niche}. Tone: ${s.voice.toLowerCase()}. Visual style: ${s.style.toLowerCase()}. Structure: 1) pattern interrupt hook, 2) one emotionally sharp insight, 3) one tactical takeaway, 4) CTA for ${s.cta.toLowerCase()}. Add camera movement, subtle hand gestures, premium lighting, clean background separation, and platform-native pacing for Reels/TikTok/Shorts. Keep lip sync natural and expressions persuasive.`;

  el("voicePrompt").value = `Write a voice and script prompt for a synthetic avatar brand. Voice profile: ${s.voice}. Persona: ${s.persona}. Goal: ${s.goal}. Audience: ${s.niche}.\n\nOutput requirements:\n- 5 hook variations\n- 3 CTA variations for ${s.cta}\n- 1 polished 30-second script\n- 1 60-second authority script\n- tonal notes for pacing, emphasis, and emotional cadence\n- words to avoid because they sound generic or weak\n\nThe scripts should feel natively social, sharp, emotionally specific, and commercially useful.`;

  el("offerStack").value = `CORE OFFER: ${s.brandName} AI Avatar System\n\nDeliverables:\n1. Avatar identity bible\n2. 25 premium image prompts\n3. 15 short-form video prompts\n4. 30 hook + CTA combinations\n5. Voice profile + script templates\n6. Content calendar for 30 days\n7. Launch checklist and tool stack\n\nMONETIZATION ANGLES:\n- DIY digital product\n- Done-with-you setup upsell\n- VIP custom avatar brand build\n- Monthly content membership\n\nFAST POSITIONING:\n\"Build a branded AI avatar that actually sells — not just pretty pictures.\"\n\nBONUSES:\n- niche-specific prompt packs\n- caption bank\n- shot list templates\n- Canva cover templates`;

  el("contentCalendar").value = `30-DAY CONTENT SYSTEM FOR ${s.brandName.toUpperCase()}\n\nWEEK 1\n- Day 1: origin story hook\n- Day 2: biggest mistake in ${s.niche}\n- Day 3: before/after transformation concept\n- Day 4: myth-busting authority clip\n- Day 5: product walkthrough\n- Day 6: client objection takedown\n- Day 7: soft CTA recap\n\nWEEK 2\n- authority framework post\n- tutorial micro-lesson\n- reaction / POV clip\n- behind-the-scenes build\n- testimonial narrative\n- feature breakdown\n- CTA post\n\nWEEK 3\n- contrarian belief post\n- 3 mistakes post\n- case study sequence\n- how-it-works demo\n- FAQ video\n- urgency post\n- offer summary\n\nWEEK 4\n- trend adaptation\n- advanced tip\n- checklist carousel\n- live demo prompt\n- mini training\n- buyer objection closer\n- final conversion CTA`;

  el("landingCopy").value = `${s.brandName}: Build an AI avatar brand that looks premium and converts.\n\nHEADLINE:\nCreate your own high-converting AI avatar system in days, not months.\n\nSUBHEAD:\nGet the prompts, scripts, visual direction, and tool stack to build a consistent avatar brand for ${s.niche.toLowerCase()} — whether you want to sell content, attract leads, or launch a digital offer.\n\nWHO IT'S FOR:\n- creators who want scale without always filming\n- founders who need a repeatable content machine\n- agencies and coaches who want a branded AI front-end\n\nWHAT THEY GET:\n- complete prompt system\n- reusable avatar identity bible\n- content prompts + scripts + CTA bank\n- platform tool stack\n- launch-ready prototype workflow\n\nCTA:\nStart building your avatar brand now.`;

  el("toolStack").value = `RECOMMENDED STACK FOR ${s.platform.toUpperCase()}\n- ${tools}\n\nWORKFLOW:\n1. Generate base avatar look\n2. Lock visual identity in the avatar bible\n3. Create 5 hero renders + 10 working variations\n4. Write hooks, scripts, and CTA packs\n5. Turn stills into motion or talking avatar assets\n6. Package into a prompt product + service upsell\n7. Store exports in Drive and publish offer assets\n\nSELLABLE PRODUCT IDEA:\n- Starter Prompt Pack: $29-$79\n- Niche PromptLab Bundle: $99-$299\n- Done-With-You Setup: $500-$2,500\n- Monthly content membership: recurring revenue`;
}

function copyField(id) {
  const target = el(id);
  target.select();
  document.execCommand("copy");
}

function exportMarkdown() {
  const s = buildState();
  const sections = ["avatarBible", "imagePrompt", "videoPrompt", "voicePrompt", "offerStack", "contentCalendar", "landingCopy", "toolStack"];
  const titleMap = {
    avatarBible: "Avatar Identity Bible",
    imagePrompt: "Master Image Prompt",
    videoPrompt: "Video / Talking Avatar Prompt",
    voicePrompt: "Voice + Script Prompt",
    offerStack: "Offer Stack",
    contentCalendar: "Content Calendar",
    landingCopy: "Landing Page Copy",
    toolStack: "Tool Stack"
  };
  let md = `# ${s.brandName} - AvatarForge Export\n\n`;
  for (const key of sections) {
    md += `## ${titleMap[key]}\n\n${el(key).value}\n\n`;
  }
  downloadFile(`${slugify(s.brandName)}-avatarforge-export.md`, md, "text/markdown");
}

function exportJson() {
  const s = buildState();
  const payload = {
    ...s,
    avatarBible: el("avatarBible").value,
    imagePrompt: el("imagePrompt").value,
    videoPrompt: el("videoPrompt").value,
    voicePrompt: el("voicePrompt").value,
    offerStack: el("offerStack").value,
    contentCalendar: el("contentCalendar").value,
    landingCopy: el("landingCopy").value,
    toolStack: el("toolStack").value,
  };
  downloadFile(`${slugify(s.brandName)}-avatarforge-export.json`, JSON.stringify(payload, null, 2), "application/json");
}

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = name;
  link.click();
  URL.revokeObjectURL(link.href);
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", () => copyField(btn.dataset.copy));
});

el("generateAll").addEventListener("click", () => fillOutputs(buildState()));
el("downloadMarkdown").addEventListener("click", exportMarkdown);
el("downloadJson").addEventListener("click", exportJson);

fillOutputs(buildState());
