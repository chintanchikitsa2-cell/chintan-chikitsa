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

    <>


      {/* ---------------- HERO ---------------- */}
      < section className="container mx-auto grid md:grid-cols-2 gap-12 items-center py-20" >
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

          <h1 className="scroll-m-20 text-center md:text-left text-4xl font-extrabold tracking-tight text-balance">
            Elevate Your{" "}
            <span className="italic text-green-900">Inner Frequency</span>
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Discover a sanctuary of holistic healing with Deepali Sharma.
            Experience the gentle power of Bach Flower Remedies and the profound
            depth of Regression Therapy.
          </p>

          <div className="flex gap-4">
            <Button><Link href="/book">Book a Session</Link></Button>
            <Button variant="outline"><Link href="/book">Discovery Call</Link></Button>
          </div>
        </div>
      </section >

      {/* ---------------- CORE PHILOSOPHY ---------------- */}
      < section className="container mx-auto py-20" >
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Our Core Philosophy
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Mental Well-being",
              text: "Achieve radical clarity and focus through Neuro-Linguistic Programming (NLP) and access consciousness.",
            },
            {
              title: "Emotional Balance",
              text: "Restore harmony to your inner world using gentle yet powerful nature-based Bach Flower Remedies.",
            },
            {
              title: "Spiritual Growth",
              text: "Reconnect with your purpose through guided Regression Therapy and intuitive energy work.",
            },
          ].map((item) => (
            <Card key={item.title} className="rounded-sm">
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
      </section >

      {/* ---------------- ISSUES ---------------- */}
      < section className="container mx-auto py-20" >
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Issues We Address
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            "Anxiety Relief",
            "Relationships",
            "Fears & Phobias",
            "Stress Management",
            "Trauma Recovery",
            "Sleep Disorders",
            "Confidence Building",
            "Spiritual Blockages",
          ].map((issue) => (
            <Card key={issue} className="text-center rounded-sm">
              <CardContent className="pt-6">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {issue}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section >

      {/* ---------------- EVENTS ---------------- */}
      < section className="container mx-auto py-20" >
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
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
      </section >

      {/* ---------------- CTA ---------------- */}
      < section className="container mx-auto py-20" >
        <Card className="text-black text-center p-12 rounded-sm">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Ready to shift your frequency?
          </h2>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Schedule your initial consultation today and begin your journey
            toward lasting peace and alignment.
          </p>

          <div className="mt-6">
            <Button variant="secondary"><Link href="/book">Secure Your Session</Link></Button>
          </div>
        </Card>
      </section >


    </>
  );
}
