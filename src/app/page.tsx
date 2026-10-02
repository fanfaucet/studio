'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Copy,
  Menu,
  Play,
  Sparkles,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Reads the room',
    description:
      'ChatGPT takes in your goal, the people in the scenario, and the constraints that shape the conversation.',
  },
  {
    number: '02',
    title: 'Builds the roles',
    description:
      'It gives each participant a point of view, priorities, and a voice that makes the exchange feel distinct.',
  },
  {
    number: '03',
    title: 'Runs the exchange',
    description:
      'It predicts useful turns in the conversation and keeps the discussion moving toward your desired outcome.',
  },
  {
    number: '04',
    title: 'Shapes the takeaway',
    description:
      'It turns the dialogue into decisions, objections, and talking points you can use in your presentation.',
  },
];

const prompt = `Simulate a 10-minute negotiation between a product lead, a CFO,
and a sales director. They need to decide whether to launch the
new onboarding flow this quarter. Make each person persuasive,
but give them different priorities. End with a clear decision.`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    await navigator.clipboard?.writeText(prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ee] text-[#202724]">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-7 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em]">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#202724] text-sm text-[#fffdf8]">✦</span>
          Field Notes
        </a>
        <div className="hidden items-center gap-8 text-sm text-[#5c625e] md:flex">
          <a className="transition hover:text-[#202724]" href="#how-it-works">How it works</a>
          <a className="transition hover:text-[#202724]" href="#example">Example</a>
          <a className="transition hover:text-[#202724]" href="#tips">Tips</a>
        </div>
        <a href="#try-it" className="hidden rounded-full bg-[#202724] px-5 py-2.5 text-sm font-medium text-[#fffdf8] transition hover:bg-[#3a4540] md:block">
          Try a scenario <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
        </a>
        <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"><Menu className="h-5 w-5" /></button>
      </nav>
      {menuOpen && <div className="absolute right-6 top-[70px] z-20 rounded-2xl border border-[#dedbd2] bg-[#fffdf8] p-4 text-sm shadow-lg md:hidden"><a className="block py-2" href="#how-it-works">How it works</a><a className="block py-2" href="#example">Example</a><a className="block py-2" href="#tips">Tips</a></div>}

      <section id="top" className="relative mx-auto max-w-[1240px] px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="absolute left-[5%] top-9 h-24 w-24 rounded-full bg-[#d8e5a3] opacity-75 blur-[1px]" />
        <div className="absolute right-[7%] top-16 h-16 w-16 rounded-full border border-[#cbd1c4]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d7d7ca] bg-[#fcfaf4] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[#5a645c]"><Sparkles className="h-3.5 w-3.5 text-[#8d9b42]" /> A practical guide</p>
          <h1 className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1d2822] sm:text-6xl lg:text-[82px]">
            What happens when<br />ChatGPT enters the room?
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#5f6861] sm:text-xl">
            A clear look at how ChatGPT turns one prompt into a lively conversation, negotiation, or roundtable you can bring to the table.
          </p>
          <a href="#how-it-works" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#e3ecb6] px-6 py-3.5 text-sm font-semibold text-[#253022] transition hover:bg-[#d4e39a]">
            See how it works <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-[#dcd9d0] bg-[#fffdf8] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div><p className="eyebrow">Behind the response</p><h2 className="section-title mt-4">It does more than write lines.</h2></div>
            <p className="max-w-xs text-sm leading-6 text-[#687069]">A scenario prompt gives ChatGPT a job to do: understand context, explore perspectives, and make the exchange useful.</p>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {steps.map((step) => <article key={step.number} className="border-t border-[#d9d8d0] pt-5"><div className="flex items-start gap-5"><span className="font-display text-3xl tracking-[-0.05em] text-[#a1ad71]">{step.number}</span><div><h3 className="text-lg font-semibold tracking-[-0.025em]">{step.title}</h3><p className="mt-2 max-w-md text-[15px] leading-6 text-[#666e68]">{step.description}</p></div></div></article>)}
          </div>
        </div>
      </section>

      <section id="example" className="bg-[#22312c] px-6 py-20 text-[#f7f5ed] lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1120px]">
          <div className="max-w-2xl"><p className="eyebrow text-[#d6e690]">A closer look</p><h2 className="section-title mt-4 text-[#f7f5ed]">One prompt.<br />A room full of perspectives.</h2><p className="mt-5 max-w-xl leading-7 text-[#bdc6bd]">For a presentation, you can ask ChatGPT to model the discussion before it happens. Here’s the anatomy of a useful simulation.</p></div>
          <div className="mt-12 grid overflow-hidden rounded-[22px] border border-[#46544e] lg:grid-cols-[.95fr_1.05fr]">
            <div className="bg-[#1b2823] p-6 sm:p-9"><div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#bdca89]">Your prompt</span><button aria-label="Copy example prompt" onClick={copyPrompt} className="rounded-md p-1.5 text-[#dce5d6] hover:bg-[#33423b]">{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}</button></div><pre className="mt-7 whitespace-pre-wrap font-body text-[15px] leading-7 text-[#e9ece3]">{prompt}</pre><p className="mt-8 border-t border-[#405048] pt-5 text-xs leading-5 text-[#9da99f]">The details you provide—stakes, roles, format, and desired ending—guide the simulation.</p></div>
            <div className="bg-[#f5f2e9] p-6 text-[#26312c] sm:p-9"><span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#75824d]">What ChatGPT creates</span><div className="mt-6 space-y-4"><Dialogue initials="PL" name="Product lead" color="bg-[#e4c4a7]" text="The launch could reduce setup time by 30%. Waiting costs us learning." /><Dialogue initials="CF" name="CFO" color="bg-[#c9d9af]" text="I need to see how that reduction translates to retention before we commit." /><Dialogue initials="SD" name="Sales director" color="bg-[#b9ced3]" text="Give my team a preview and we can test the message with real prospects." /></div><div className="mt-6 rounded-lg border border-[#d7d5cb] bg-[#ebe9df] p-4"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#788073]">Decision</p><p className="mt-1 text-sm font-medium">Run a two-week sales preview, then launch if activation holds.</p></div></div>
          </div>
        </div>
      </section>

      <section id="tips" className="px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-[1120px] gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Make it yours</p><h2 className="section-title mt-4">Direct the room.</h2><p className="mt-5 max-w-sm leading-7 text-[#667069]">The best scenario prompts are specific enough to create useful friction—and open enough for a real exchange.</p></div><div className="grid gap-4 sm:grid-cols-2"><Tip title="Name the people" text="Give each person a role, a priority, and something they care about protecting." /><Tip title="Set the stakes" text="Explain what is being decided, what is at risk, and what success looks like." /><Tip title="Ask for tension" text="Invite objections, trade-offs, and competing viewpoints—not just agreement." /><Tip title="Choose an ending" text="Ask for a decision, summary, or presentation-ready list of key points." /></div></div></section>

      <section id="try-it" className="mx-6 mb-6 rounded-[26px] bg-[#dce9a8] px-7 py-14 text-center sm:mx-8 lg:mx-auto lg:mb-8 lg:max-w-[1180px]"><CircleHelp className="mx-auto h-6 w-6 text-[#4a5b35]" /><h2 className="font-display mt-5 text-4xl tracking-[-0.05em] text-[#273222] sm:text-5xl">Ready to set the scene?</h2><p className="mx-auto mt-4 max-w-lg text-[#566348]">Start with the situation you want to explore. ChatGPT can help you rehearse the conversations that matter.</p><button onClick={() => document.getElementById('example')?.scrollIntoView({ behavior: 'smooth' })} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#24312b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#394a40]">Explore the example <Play className="h-3.5 w-3.5 fill-current" /></button></section>

      <footer className="mx-auto flex max-w-[1240px] flex-col gap-4 px-6 py-8 text-xs text-[#707870] sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>Field Notes · A guide to better conversations</span><span>Made for thoughtful presentations</span></footer>
    </main>
  );
}

function Dialogue({ initials, name, color, text }: { initials: string; name: string; color: string; text: string }) {
  return <div className="flex gap-3"><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${color} text-[10px] font-bold`}>{initials}</span><div><p className="text-xs font-semibold">{name}</p><p className="mt-1 text-sm leading-5 text-[#5d655f]">“{text}”</p></div></div>;
}

function Tip({ title, text }: { title: string; text: string }) {
  return <article className="rounded-xl border border-[#dddcd4] bg-[#fffdf8] p-5"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#e4edb9] text-sm font-bold text-[#607038]">+</span><h3 className="mt-5 font-semibold tracking-[-0.02em]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6a726c]">{text}</p></article>;
}
