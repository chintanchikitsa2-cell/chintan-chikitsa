// app/page.tsx

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Calendar } from "lucide-react";

import { EventRegistrationDialog } from "@/components/landing/EventRegistrationDialog";
import { getEvents } from "@/actions/event";
import { getSupabaseImage } from "@/lib/utils";



export default async function HomePage() {
  const events = await getEvents();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* ---------------- HERO ---------------- */}
      <section className="grid md:grid-cols-2 gap-6 md:gap-12 items-center py-12 md:py-20">
        <AspectRatio ratio={4 / 4} className="rounded-md overflow-hidden">
          <Image
            src="/hero.jpeg"
            alt="Coach"
            fill
            className="object-cover"
          />
        </AspectRatio>

        <div className="space-y-6">
          <Badge>Frequency Coach</Badge>

          <h1 className="scroll-m-20 text-center md:text-left text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
            Elevate Your{" "}
            <span className="italic text-green-900">Inner Frequency</span>
          </h1>

          <p className="leading-7 not-first:mt-6 text-sm md:text-base">
            Discover a sanctuary of holistic healing with Deepali Sharma.
            Experience the gentle power of Bach Flower Remedies and the profound
            depth of Regression Therapy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button><Link href="/book">Book a Session</Link></Button>
            <Button variant="outline"><Link href="/book">Discovery Call</Link></Button>
          </div>
        </div>
      </section>

      {/* ---------------- CORE PHILOSOPHY ---------------- */}
      <section className="py-12 md:py-20">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Our Core Philosophy
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          {[
            {
              title: "Mental Well-being",
              text: "Achieve radical clarity and focus through Neuro-Linguistic Programming (NLP) and access consciousness.",
              image: "https://images.unsplash.com/photo-1674505520294-640e2382f525?w=800&q=80",
            },
            {
              title: "Emotional Balance",
              text: "Restore harmony to your inner world using gentle yet powerful nature-based Bach Flower Remedies.",
              image: "https://images.unsplash.com/photo-1758274526671-ad18176acb01?w=800&q=80",
            },
            {
              title: "Spiritual Growth",
              text: "Reconnect with your purpose through guided Regression Therapy and intuitive energy work.",
              image: "https://images.unsplash.com/photo-1767610966803-821ac98f3edc?w=800&q=80",
            },
          ].map((item) => (
            <Card key={item.title} className="rounded-sm overflow-hidden group">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- ISSUES ---------------- */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-linear-to-b from-muted/30 to-background rounded-xl -z-10" />
        
        <h2 className="scroll-m-20 border-b pb-2 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Issues We Address
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 mt-8 md:mt-12">
          {[
            { name: "Anxiety Relief", icon: "🧘‍♀️" },
            { name: "Relationships", icon: "💝" },
            { name: "Fears & Phobias", icon: "🌟" },
            { name: "Stress Management", icon: "🌿" },
            { name: "Trauma Recovery", icon: "🦋" },
            { name: "Sleep Disorders", icon: "🌙" },
            { name: "Confidence Building", icon: "💪" },
            { name: "Spiritual Blockages", icon: "✨" },
          ].map((issue) => (
            <Card key={issue.name} className="text-center rounded-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="pt-4 md:pt-6 space-y-2">
                <div className="text-3xl md:text-4xl transition-transform group-hover:scale-110 duration-300">
                  {issue.icon}
                </div>
                <h4 className="scroll-m-20 text-base md:text-xl font-semibold tracking-tight">
                  {issue.name}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- EVENTS ---------------- */}
      <section className="py-12 md:py-20">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Upcoming Events
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          {events.map((event) => (
            <Card key={event._id} className="rounded-sm">
              <AspectRatio ratio={16 / 9} className="p-0 my-[-24]">
                <Image
                  src={getSupabaseImage("event", event.image)}
                  alt={event.title}
                  fill
                  className="object-cover rounded-sm"
                />
              </AspectRatio>

              <CardContent className="space-y-4 pt-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>

                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {event.title}
                </h4>

                <EventRegistrationDialog
                  eventId={event._id}
                  eventTitle={event.title}
                  trigger={<Button className="w-full">Register Now</Button>}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-12 md:py-20">
        <Card className="text-black text-center p-6 md:p-12 rounded-sm">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0">
            Ready to shift your frequency?
          </h2>

          <p className="leading-7 not-first:mt-6">
            Schedule your initial consultation today and begin your journey
            toward lasting peace and alignment.
          </p>

          <div className="mt-2">
            <Button variant="outline"><Link href="/book" >Secure Your Session</Link></Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
