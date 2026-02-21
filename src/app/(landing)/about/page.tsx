"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


/* ------------------------------------------------------------------ */
/* HERO */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 grid gap-12 md:grid-cols-2 items-center">

        <div>
          <Badge className="mb-6">ABOUT DEEPALLI</Badge>

          <blockquote className="mt-6 border-l-2 pl-6 italic text-3xl font-semibold">
            “My mission is to make children feel understood, supported, and
            emotionally strong —{" "}
            <span className="text-primary">not labeled, not limited.</span>”
          </blockquote>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I am Deepalli Sharma, a holistic healing practitioner dedicated
            to helping children and families navigate emotional stress, learning difficulties,
            and inner struggles with compassionate, holistic approaches rooted in empathy,
            lived experience, and intuitive understanding.
          </p>

          <div className="mt-6 flex gap-3">
            <Badge variant="secondary">5+ Years Experience</Badge>
            <Badge variant="secondary">Certified Practitioner</Badge>
          </div>
        </div>

        <div>
          <Image
            src="/about/profile.jpg"
            alt="Profile"
            width={500}
            height={400}
            priority
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TIMELINE */
/* ------------------------------------------------------------------ */

function JourneyTimeline() {
  const blocks = [
    {
      title: "Roots & Wisdom",
      text:
        "I come from a humble, value-driven family. My father was a government employee and taxation lawyer. My mother, a school principal, carried deep spiritual wisdom inspired by nature's simplicity. She taught us compassion and kindness above all. One defining moment: I watched her sit beside a dying injured dog, reciting verses from the Gita, offering Gangajal with love. The dog passed peacefully. That moment planted the first seed of my healing journey.",
      image: "/about/about1.jpeg",
      step: "01"
    },
    {
      title: "The Academic Struggle & Law",
      text:
        "Academically, my path was not easy. I struggled with learning difficulties at a time when support was limited, facing embarrassment and self-doubt. I overcame these challenges and pursued Law at Panjab University, later preparing for judicial services in Delhi. Despite doing everything \"right,\" I felt disconnected. Meditation brought clarity—law was not my ultimate calling, though I practiced for several years.",
      image: "/about/about2.jpeg",
      step: "02"
    },
    {
      title: "A Mother's Turning Point",
      text:
        "After marriage, my first child was born with a port-wine stain condition and later showed signs of a learning disability at age six. As a mother, I refused to remain helpless. I immersed myself in healing sciences—Aromatherapy, Crystal Healing, Reiki, Angelic Healing, Regression Therapy, Counselling, and Bach Flower Remedies. Through consistent effort and compassionate support, my child grew confident. This became my life's purpose.",
      image: "/about/about3.jpeg",
      step: "03"
    },
  ];

  return (
    <section className="py-32 bg-linear-to-b from-background to-muted/10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            My Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to a life dedicated to healing
          </p>
        </div>

        <div className="space-y-32 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-primary to-primary/50 hidden lg:block" />

          {blocks.map((b, i) => (
            <div
              key={b.title}
              className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Step number for mobile */}
              <div className="absolute -top-8 left-0 lg:hidden">
                <Badge variant="outline" className="text-xs font-mono">
                  {b.step}
                </Badge>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                <div className="w-6 h-6 rounded-full bg-primary ring-8 ring-background shadow-lg" />
              </div>

              {/* Content - alternates sides on desktop */}
              <div className={`${i % 2 === 0 ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2'}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-muted hover:border-primary/50">
                  <CardHeader className="space-y-4">
                    <div className={`hidden lg:flex items-center gap-3 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <Badge variant="outline" className="text-xs font-mono">
                        {b.step}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">
                      {b.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                      {b.text}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Image - alternates sides on desktop */}
              <div className={`${i % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 group">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CERTIFICATIONS */
/* ------------------------------------------------------------------ */

function HealerGrid() {
  const items = [
    {
      title: "Bach Flower Remedies",
      text: "Natural emotional healing through flower essences.",
      icon: "🌸",
      image: "https://images.unsplash.com/photo-1613887700980-b5653e86115e?w=600&q=80"
    },
    {
      title: "Regression Therapy",
      text: "Past-life and subconscious healing for deep transformation.",
      icon: "🔮",
      image: "https://images.unsplash.com/photo-1760691313751-98262affa4f9?w=600&q=80"
    },
    {
      title: "Reiki & Angelic Healing",
      text: "Energy healing for emotional balance and inner peace.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1719430225428-add80525dcae?w=600&q=80"
    },
    {
      title: "Crystal & Aromatherapy",
      text: "Holistic modalities for emotional regulation and wellness.",
      icon: "💎",
      image: "https://images.unsplash.com/photo-1608581821109-f825056e31c0?w=600&q=80"
    },
  ];

  return (
    <section className="relative py-32 bg-linear-to-b from-muted/10 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-grid-slate-700/25" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
          <Badge className="mb-4">HEALING MODALITIES</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            My Journey as a Healer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Certified in multiple healing modalities to support holistic wellness
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card
              key={item.title}
              className="group relative overflow-hidden border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl">
                  {item.icon}
                </div>
              </div>

              <CardHeader className="space-y-4">
                <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <JourneyTimeline />
      <HealerGrid />
    </>
  );
}
