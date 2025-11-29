import { CyberCard } from "@/components/cyber-card";
import RetroCard from "@/components/retro-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Globe,
  ArrowRight,
  Skull,
  Activity,
  Hourglass,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  const LANDING_ACCORDION_ITEMS = [
    {
      title: "THE PHILOSOPHY OF MEMENTO MORI",
      content: ` "You could leave life right now. Let that determine what you do and say and think." — Marcus Aurelius.

      Memento Mori is not about being morbid or fearful. It is a tool for radical clarity. By visualizing the finiteness of our time, we strip away the trivial and focus on the essential. It is the ancient practice of keeping death in mind to truly live.`,
    },
    {
      title: "THE 4,000 WEEKS REALITY",
      content:
        "The average human life is absurdly short—roughly 4,000 weeks. It sounds like a lot, until you see it laid out on a single screen. We often live as if we have an infinite scroll of days. The grid proves otherwise. Every red square is a week spent; every grey square is an opportunity remaining.",
    },
    {
      title: "URGENCY OVER ANXIETY",
      content:
        "Seneca wrote, 'It is not that we have a short time to live, but that we waste a lot of it.' This visualization is a mirror. If looking at it makes you uncomfortable, that is the point. Use that discomfort. Let it drive you to make the remaining squares count.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-red-900 selection:text-white flex flex-col">
      {/* Landing Header */}
      <nav className="border-b border-neutral-900 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skull className="w-5 h-5 text-neutral-400" />
            <span className="font-mono font-bold tracking-tighter text-lg">
              MEMENTO MORI
            </span>
          </div>
          <button
            onClick={() => {}}
            className="text-xs font-mono uppercase tracking-widest hover:text-red-500 transition-colors"
          >
            [ Initialize System ]
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-18 md:pt-22 md:pb-28 px-6 overflow-hidden border-b border-neutral-900">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1  border border-dashed  border-red-900/30 bg-red-900/10 text-red-500 text-[10px] tracking-[0.2em] font-mono uppercase mb-4 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            You Thing you Have time ?
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
            YOUR LIFE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-neutral-200 to-neutral-600">
              IN WEEKS
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-neutral-400 text-lg md:text-xl leading-relaxed font-normal">
            Quantifying the finite nature of existence. A statistical
            visualization tool to inspire clarity, urgency, and purpose.
          </p>

          <div className="pt-8">
            <Button
              size="lg"
              onClick={() => {}}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold text-white transition-all duration-200 bg-neutral-900 border border-neutral-800 hover:border-red-600 hover:bg-red-900/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-black"
            >
              <Link to="/moneto">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-linear-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-3">
                  INITIALIZE VISUALIZATION{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <p className="mt-4 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
              No Sign Up Required • Local Storage Only
            </p>
          </div>
        </div>
      </section>

      {/* Feature Preview Section */}
      <section className="py-24 bg-neutral-950/50 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 border border-neutral-800/50 bg-black hover:border-red-900/50 transition-colors group">
              <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-sm text-red-500 group-hover:text-red-400">
                <Hourglass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono">
                The Life Clock
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Real-time calculation of your actuarial life expectancy. Watch
                the weeks tick down in high-precision.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-neutral-800/50 bg-black hover:border-red-900/50 transition-colors group">
              <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-sm text-red-500 group-hover:text-red-400">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono">
                Consumption Data
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Analyze how much of your life is consumed by sleep, work, and
                chores vs. the time that is truly yours.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-neutral-800/50 bg-black hover:border-red-900/50 transition-colors group">
              <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-sm text-red-500 group-hover:text-red-400">
                <Skull className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono">
                The Grid
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                4,000 weeks laid out in a single view. A powerful visual
                meditation on mortality used by Stoics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section (Accordion) */}
      <section className="py-24 px-6 max-w-3xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase">
            Meaningful Thoughts
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto"></div>
        </div>
        <CyberCard noPadding>
          <Accordion type="single" collapsible className="w-full">
            {LANDING_ACCORDION_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6"
              >
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CyberCard>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-neutral-900 bg-black text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="text-[10px] text-neutral-600 font-mono uppercase tracking-[0.2em]">
            Memento Mori Project // v1.0.0
          </div>
          <p className="text-neutral-500 text-sm max-w-md mx-auto">
            "We have two lives, and the second begins when we realize we only
            have one."
          </p>
        </div>
      </footer>
    </div>
  );
}
