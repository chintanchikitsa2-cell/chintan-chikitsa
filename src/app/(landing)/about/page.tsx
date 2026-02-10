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
          <Badge className="mb-6">ABOUT DEEPALI</Badge>

          <blockquote className="mt-6 border-l-2 pl-6 italic text-3xl font-semibold">
            “My mission is to make children feel understood, supported, and
            emotionally strong —{" "}
            <span className="text-primary">not labeled, not limited.</span>”
          </blockquote>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am Deepali Sharma, a Frequency Coach and holistic healer dedicated
            to helping individuals and families navigate life’s emotional
            complexities with grace, intuition, and scientific understanding.
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
        "Growing up, my home was filled with reverence for life. Silent acts of compassion planted the first seeds of healing.",
      image: "/about/about1.jpeg"
    },
    {
      title: "The Academic Struggle & Law",
      text:
        "Despite my intuitive nature, I followed law—learning logic and structure while sensing something missing.",
      image: "/about/about2.jpeg"
    },
    {
      title: "A Mother’s Turning Point",
      text:
        "Watching my child suffer led me to alternative healing, reshaping my worldview.",
      image: "/about/about3.jpeg"
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 space-y-20">
        {blocks.map((b, i) => (
          <div
            key={b.title}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {i % 2 === 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    {b.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    {b.text}
                  </p>

                </CardContent>
              </Card>
            )}

            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image
                src={b.image}
                alt={b.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>

            {i % 2 === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    {b.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    {b.text}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
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
      title: "Bach Flower",
      text: "Certified practitioner harnessing natural remedies.",
    },
    {
      title: "NLP Master",
      text: "Neuro-Linguistic Programming to reframe patterns.",
    },
    {
      title: "Regression",
      text: "Past-life and subconscious healing therapy.",
    },
    {
      title: "Frequency Coach",
      text: "Energy alignment for holistic wellness.",
    },
  ];

  return (
    <section className="bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
          My Journey as a Healer
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <Card key={i.title}>
              <CardHeader>
                <CardTitle className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {i.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {i.text}
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
