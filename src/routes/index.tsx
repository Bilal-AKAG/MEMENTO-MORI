import { createFileRoute } from '@tanstack/react-router'
import type React from "react"

import { useEffect, useState } from "react"
import { Link } from '@tanstack/react-router'
import { ArrowRight, Clock, Calendar, BarChart3, Hourglass } from "lucide-react"

export const Route = createFileRoute('/')({
  component: LandingPage,
})




 function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Animated counter for hero section - counts down from average remaining life
  useEffect(() => {
    const targetHours = 657000 // ~75 years in hours
    let currentHours = targetHours

    const interval = setInterval(() => {
      currentHours -= 1
      const hours = Math.floor(currentHours)
      const minutes = Math.floor((currentHours % 1) * 60)
      const seconds = Math.floor((((currentHours % 1) * 60) % 1) * 60)
      setTimeLeft({ hours, minutes, seconds })
    }, 1000)

    setTimeLeft({
      hours: targetHours,
      minutes: 0,
      seconds: 0,
    })

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0f0a] text-[#a3a3a3] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a2e1a] bg-[#0a0f0a]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#dc2626]"></span>
            <span className="text-[#e5e5e5] font-bold tracking-wider">MEMENTO MORI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-[#e5e5e5] transition-colors hidden md:block">
              Features
            </a>
            <a href="#philosophy" className="text-sm hover:text-[#e5e5e5] transition-colors hidden md:block">
              Philosophy
            </a>
            <Link
              to="/moneto"
              className="flex items-center gap-2 bg-[#dc2626] text-[#e5e5e5] px-4 py-2 text-sm font-semibold hover:bg-[#b91c1c] transition-colors"
            >
              Launch App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-[#dc2626] opacity-50" />
        <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-[#dc2626] opacity-50" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#dc2626] opacity-50" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#dc2626] opacity-50" />

        <div className="text-center relative z-10 max-w-4xl">
          <p className="text-[#dc2626] text-sm tracking-[0.3em] mb-6">system.init(mortality_visualizer);</p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#e5e5e5] mb-6 leading-tight text-balance">
            Remember That
            <br />
            <span className="text-[#dc2626]">You Must Die</span>
          </h1>

          <p className="text-lg md:text-xl text-[#525252] max-w-2xl mx-auto mb-12 text-pretty">
            Quantifying the finite nature of existence. Visualize your life in weeks, understand where your time goes,
            and make every moment count.
          </p>

          {/* Live Counter */}
          <div className="border border-[#1a2e1a] p-6 md:p-8 mb-12 inline-block relative">
            <div className="absolute -top-3 left-4 bg-[#0a0f0a] px-2 text-xs text-[#dc2626] tracking-wider">
              AVERAGE HUMAN LIFE REMAINING
            </div>
            <div className="flex items-center gap-4 md:gap-8 text-center">
              <div>
                <div className="text-3xl md:text-5xl font-bold text-[#e5e5e5]">{timeLeft.hours.toLocaleString()}</div>
                <div className="text-xs text-[#525252] mt-1">HOURS</div>
              </div>
              <span className="text-2xl text-[#dc2626]">:</span>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-[#e5e5e5]">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-[#525252] mt-1">MINUTES</div>
              </div>
              <span className="text-2xl text-[#dc2626]">:</span>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-[#e5e5e5]">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-[#525252] mt-1">SECONDS</div>
              </div>
            </div>
          </div>

          <Link
            to="/moneto"
            className="inline-flex items-center gap-3 bg-[#dc2626] text-[#e5e5e5] px-8 py-4 text-lg font-semibold hover:bg-[#b91c1c] transition-colors group"
          >
            Calculate Your Time
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="text-xs text-[#525252] mt-6">No signup required. Your data stays in your browser.</p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-[#525252] tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-linear-to-b from-[#dc2626] to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 md:px-8 border-t border-[#1a2e1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#dc2626] text-sm tracking-[0.2em] mb-4">FEATURES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-4">Visualize Your Mortality</h2>
            <p className="text-[#525252] max-w-xl mx-auto">
              A complete toolkit for understanding and optimizing your finite existence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Calendar className="w-6 h-6" />}
              title="Life Clock"
              description="See your weeks lived versus weeks remaining based on WHO life expectancy data."
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Time Distribution"
              description="Understand how your remaining life breaks down across sleep, work, and quality time."
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Visual Timeline"
              description="Each square represents one week of your life. See your progress at a glance."
            />
            <FeatureCard
              icon={<Hourglass className="w-6 h-6" />}
              title="Consumption Analytics"
              description="Detailed breakdown of hours and equivalent years spent on different activities."
            />
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-24 px-4 md:px-8 border-t border-[#1a2e1a] bg-[#080c08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#dc2626] text-sm tracking-[0.2em] mb-4">INTERFACE PREVIEW</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-6">
                Data-Driven
                <br />
                Mortality Awareness
              </h2>
              <p className="text-[#525252] mb-8 leading-relaxed">
                Our interface draws inspiration from terminal displays and mission control dashboards. Every metric is
                calculated in real-time based on your birth date and regional life expectancy data from WHO 2023.
              </p>
              <ul className="space-y-4">
                <PreviewFeature text="Real-time calculations as you age" />
                <PreviewFeature text="Regional life expectancy from 15+ countries" />
                <PreviewFeature text="Activity breakdown with hours and years" />
                <PreviewFeature text="Week-by-week visual timeline" />
              </ul>
            </div>
            <div className="border border-[#1a2e1a] p-4 relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[#dc2626]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-[#dc2626]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-[#dc2626]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[#dc2626]" />

              {/* Mock Dashboard */}
              <div className="bg-[#0a0f0a] p-6 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#dc2626]">LIFE CLOCK</span>
                  <span className="text-[#525252]">CALCULATION_COMPLETE</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center py-8">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#a3a3a3]">1,560</div>
                    <div className="text-xs text-[#525252] mt-1">WEEKS LIVED</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#dc2626]">2,483</div>
                    <div className="text-xs text-[#525252] mt-1">WEEKS LEFT</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#a3a3a3]">17,381</div>
                    <div className="text-xs text-[#525252] mt-1">DAYS LEFT</div>
                  </div>
                </div>
                <div className="h-2 bg-[#1a2e1a] relative">
                  <div className="absolute left-0 top-0 h-full w-[38%] bg-[#dc2626]" />
                </div>
                <div className="flex justify-between text-xs text-[#525252]">
                  <span>BIRTH</span>
                  <span>EST. DEATH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-4 md:px-8 border-t border-[#1a2e1a]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#dc2626] text-sm tracking-[0.2em] mb-4">PHILOSOPHY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-12">Ancient Wisdom, Modern Interface</h2>

          <blockquote className="text-lg md:text-xl text-[#a3a3a3] italic mb-8 leading-relaxed">
            "It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a
            sufficiently generous amount has been given to us for the highest achievements if it were all well
            invested."
          </blockquote>
          <p className="text-[#525252] mb-16">— Seneca, On the Shortness of Life</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <PhilosophyCard
              number="01"
              title="Awareness"
              description="Acknowledging mortality isn't morbid—it's the first step to living intentionally."
            />
            <PhilosophyCard
              number="02"
              title="Perspective"
              description="Seeing your life in weeks creates urgency and appreciation for the present."
            />
            <PhilosophyCard
              number="03"
              title="Action"
              description="With limited time, every decision matters. Choose what truly fulfills you."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 border-t border-[#1a2e1a] bg-[#080c08]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-6">Begin Your Calculation</h2>
          <p className="text-[#525252] mb-12 max-w-xl mx-auto">
            Enter your birth date and see your life visualized in ways you&apos;ve never considered. The numbers
            don&apos;t lie—but they can inspire.
          </p>
          <Link 
            to="/moneto"
            className="inline-flex items-center gap-3 bg-[#dc2626] text-[#e5e5e5] px-10 py-5 text-lg font-semibold hover:bg-[#b91c1c] transition-colors group"
          >
            Launch Mortality Visualizer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-[#1a2e1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#dc2626]"></span>
            <span className="text-[#525252] text-sm">MEMENTO MORI v.1</span>
          </div>
          <p className="text-[#dc2626] text-sm tracking-wider font-semibold">REMEMBER THAT YOU MUST DIE.</p>
          <p className="text-[#525252] text-xs">Data Source: WHO 2023</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="border border-[#1a2e1a] p-6 hover:border-[#dc2626]/50 transition-colors group relative">
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="text-[#dc2626] mb-4">{icon}</div>
      <h3 className="text-[#e5e5e5] font-semibold mb-2">{title}</h3>
      <p className="text-[#525252] text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function PreviewFeature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-[#a3a3a3]">
      <span className="w-1.5 h-1.5 bg-[#dc2626]"></span>
      {text}
    </li>
  )
}

function PhilosophyCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="border-t border-[#1a2e1a] pt-6">
      <span className="text-[#dc2626] text-sm">{number}</span>
      <h3 className="text-[#e5e5e5] font-semibold text-xl mt-2 mb-3">{title}</h3>
      <p className="text-[#525252] text-sm leading-relaxed">{description}</p>
    </div>
  )
}
