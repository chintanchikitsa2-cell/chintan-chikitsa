import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ServiceDialog } from "@/components/landing/service-dialog";
import Link from "next/link";



export default function ServicesPage() {
  return (
    <>

      {/* ================= HERO ================= */}

      <section className="py-20 mx-auto w-full max-w-7xl px-6">
        <Card className="p-16 text-center bg-muted/40 rounded-sm">

          <p className="uppercase text-xs tracking-widest mb-3">
            Elevate Your Vibration
          </p>

          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Therapeutic Services <br /> & Holistic Healing
          </h1>

          <p className="lead max-w-2xl mx-auto mt-6">
            Explore a curated collection of quantum energy therapies and
            cognitive alignment techniques designed to restore your emotional
            and spiritual harmony.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <Button>Free Consultation</Button>
            <Button variant="outline">View Packages</Button>
          </div>

        </Card>
      </section>

      {/* ================= FILTERS ================= */}

      <section className="flex gap-3 justify-center mx-auto w-full max-w-7xl px-6">
        {[
          "All Services",
          "Emotional Healing",
          "Spiritual Alignment",
          "Energy Work",
          "Cognitive Shift",
        ].map((f, i) => (
          <Button
            key={f}
            size="sm"
            variant={i === 0 ? "default" : "outline"}
          >
            {f}
          </Button>
        ))}
      </section>

      {/* ================= GRID ================= */}

      <section className="py-20 mx-auto w-full max-w-7xl px-6">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Core Therapeutic Offerings
            </h2>

            <p className="muted">
              Harmonizing mind, body, and soul through specialized modalities.
            </p>
          </div>

          <Badge>12 Holistic Services Available</Badge>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((s) => (
            <Card key={s.title} className="rounded-sm">

              <CardHeader className="p-0 my-[-24]">

                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </AspectRatio>

              </CardHeader>

              <CardContent className="pt-6 space-y-3">

                <Badge variant="secondary">{s.tag}</Badge>

                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {s.title}
                </h4>

                <p className="muted">{s.desc}</p>

              </CardContent>

              <CardFooter className="gap-3">
                <Button size="sm"><Link href="/book">Book Now</Link></Button>

                <ServiceDialog
                  title={s.title}
                  content={s.content}
                />
              </CardFooter>


            </Card>
          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-24 mx-auto w-full max-w-7xl px-6">

        <Card className="p-12 flex items-center justify-between rounded-sm">

          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Begin Your Transformation
            </h3>

            <p className="muted mt-2">
              Unsure which therapy is right for you? Book a 15-minute discovery
              call to find your personalized healing path.
            </p>
          </div>

          <Button>Schedule Discovery Call</Button>

        </Card>

      </section>
    </>
  );
}
const services = [
  {
    title: "Quantum Soul Alignment",
    tag: "Signature Journey",
    desc:
      "A premium 6-session journey designed for profound vibrational transformation.",
    image: "https://images.unsplash.com/photo-1652341124412-c934d9f65443?w=800&q=80",
    content: {
      overview: [
        "Quantum Soul Alignment blends quantum-inspired ideas with spiritual self-awareness, suggesting that thoughts, emotions, and intentions operate like energetic frequencies that shape life experiences.",
        "The practice centers on releasing emotional or energetic blockages while aligning mindset and actions with a deeper sense of purpose.",
        "It emphasizes intentional living—choosing thoughts and behaviors that resonate with higher values to cultivate clarity, stability, and meaningful growth."
      ],
      howItWorks: [
        "Identifying inner belief and emotional patterns.",
        "Releasing energetic or emotional blockages.",
        "Aligning intentions with life purpose.",
        "Balancing logic, intuition, and emotion.",
        "Practicing conscious, intentional living."
      ],
      benefits: [
        "Greater clarity and self-awareness.",
        "Emotional and energetic balance.",
        "Stronger sense of purpose.",
        "Inner stability and calm.",
        "Enhanced personal growth."
      ]
    }
  },
  {
    title: "Bach Flower Remedies",
    tag: "Emotional Healing",
    desc:
      "Personalized floral essences for navigating anxiety, grief, and inner peace.",
    image: "https://images.unsplash.com/photo-1613887700980-b5653e86115e?w=800&q=80",
    content: {
      overview: [
        "Bach Flower Remedies are natural flower essences developed by Dr. Edward Bach to support emotional and mental well-being rather than physical symptoms.",
        "They focus on restoring emotional harmony and addressing states such as fear, stress, sadness, and emotional imbalance.",
        "Different remedies are selected based on emotional patterns like anxiety, low mood, relationship challenges, or past emotional distress."
      ],
      howItWorks: [
        "Assessing emotional patterns and current challenges.",
        "Selecting remedies matched to emotional states.",
        "Supporting emotional processing and balance.",
        "Encouraging calmness and clarity.",
        "Using Rescue Remedy for short-term emotional support."
      ],
      benefits: [
        "Reduced anxiety and emotional stress.",
        "Support for low mood and discouragement.",
        "Improved sleep linked to calmer thoughts.",
        "Greater emotional stability in relationships.",
        "Gentle support for children’s emotional well-being."
      ]
    }
  },
  {
    title: "Past Life Regression",
    tag: "Subconscious",
    desc:
      "Unlock deep-seated emotional patterns through guided regression sessions.",
    image: "https://images.unsplash.com/photo-1760691313751-98262affa4f9?w=800&q=80",
    content: {
      overview: [
        "Child Regression Therapy helps individuals revisit unresolved childhood experiences that influence present emotions and behavior.",
        "Through guided relaxation or hypnosis, people explore formative memories in a safe, controlled way to uncover emotional roots.",
        "The approach focuses on reframing past experiences and integrating healing into present-day life."
      ],
      howItWorks: [
        "Entering a relaxed, receptive state.",
        "Revisiting formative childhood memories safely.",
        "Identifying emotional roots of present issues.",
        "Reframing limiting beliefs.",
        "Integrating insight into daily life."
      ],
      benefits: [
        "Emotional clarity and healing.",
        "Reduced anxiety and trauma responses.",
        "Improved self-esteem.",
        "Healthier relationship patterns.",
        "Long-term personal growth."
      ]
    }
  },
  {
    title: "Inner Child Healing",
    tag: "Subconscious",
    desc:
      "Unlock deep-seated emotional patterns through guided regression sessions.",
    image: "https://images.unsplash.com/photo-1615199951711-efaf9391bfc8?w=800&q=80",
    content: {
      overview: [
        "Child Regression Therapy supports healing unresolved childhood experiences that shape adult beliefs, emotions, and relationships.",
        "Clients are guided back to formative moments to observe and release emotional blocks without reliving pain.",
        "The goal is to heal the inner child by replacing limiting beliefs and integrating emotional awareness into the present."
      ],
      howItWorks: [
        "Guided relaxation or hypnosis.",
        "Exploring formative childhood memories.",
        "Identifying subconscious emotional patterns.",
        "Reframing and releasing limiting beliefs.",
        "Integrating awareness into current life."
      ],
      benefits: [
        "Reduced anxiety and emotional distress.",
        "Healing from childhood trauma.",
        "Improved self-worth.",
        "Emotional balance.",
        "Sustainable personal growth."
      ]
    }
  },
  {
    title: "Sound Healing",
    tag: "Subconscious",
    desc:
      "Unlock deep-seated emotional patterns through guided regression sessions.",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80",
    content: {
      overview: [
        "Sound Healing Therapy uses frequencies and vibrations to encourage relaxation, emotional balance, and energetic harmony.",
        "It is based on the idea that stress and trauma disrupt natural rhythms that sound can gently restore.",
        "The focus is on deep relaxation and inner balance rather than medical treatment."
      ],
      howItWorks: [
        "Client relaxes in a seated or lying position.",
        "Sounds are played around the body.",
        "Vibrations guide the mind into meditation.",
        "Emotional tension releases naturally.",
        "Session ends with grounding."
      ],
      benefits: [
        "Deep calm and relaxation.",
        "Emotional release.",
        "Improved focus.",
        "Better sleep quality.",
        "Enhanced meditation."
      ]
    }
  },
  {
    title: "Reiki Healing",
    tag: "Energy Healing",
    desc:
      "Restore energetic balance and promote deep relaxation through gentle, non-invasive Reiki energy healing.",
    image: "https://images.unsplash.com/photo-1719430225428-add80525dcae?w=800&q=80",
    content: {
      overview: [
        "Reiki is a Japanese energy healing technique that channels universal life force energy to support physical, emotional, and spiritual well-being.",
        "The practice works by gently placing hands on or above the body to clear energetic blockages and restore balance.",
        "Reiki encourages natural healing processes and promotes harmony within the mind and body."
      ],
      howItWorks: [
        "Client lies comfortably in a relaxed setting.",
        "Practitioner channels universal life energy through hands.",
        "Energy flows to areas needing balance or healing.",
        "Blockages are gently released.",
        "Session concludes with grounding and reflection."
      ],
      benefits: [
        "Reduced stress and anxiety.",
        "Improved emotional balance.",
        "Enhanced relaxation and sleep quality.",
        "Support for physical healing.",
        "Greater inner peace and clarity."
      ]
    }
  }
  ,
  {
    title: "Angelic Therapy",
    tag: "Subconscious",
    desc:
      "Unlock deep-seated emotional patterns through guided regression sessions.",
    image: "https://images.unsplash.com/photo-1628784420252-1bfad7ad4aa0?w=800&q=80",
    content: {
      overview: [
        "Angelic Therapy works with intuitive guidance from angels and archangels to support emotional healing and inner peace.",
        "It is intended for reassurance and clarity rather than prediction or medical treatment.",
        "Messages are received through intuition, symbols, or inner knowing."
      ],
      howItWorks: [
        "Prayer or meditation to connect.",
        "Receiving intuitive guidance.",
        "Sharing insights or impressions.",
        "Invoking healing energy.",
        "Closing with grounding."
      ],
      benefits: [
        "Emotional comfort.",
        "Greater clarity.",
        "Sense of protection.",
        "Stronger intuition.",
        "Spiritual reassurance."
      ]
    }
  },
  {
    title: "Aura Reading",
    tag: "Subconscious",
    desc:
      "Unlock deep-seated emotional patterns through guided regression sessions.",
    image: "https://images.unsplash.com/photo-1764053478954-4e4e3e6b16a4?w=800&q=80",
    content: {
      overview: [
        "Aura reading interprets the human energy field believed to reflect emotional, mental, and spiritual states.",
        "It focuses on self-awareness rather than prediction or diagnosis.",
        "Readers observe colors, brightness, and energy flow to identify imbalances."
      ],
      howItWorks: [
        "Energy sensing or intuitive perception.",
        "Observing aura colors and patterns.",
        "Interpreting emotional themes.",
        "Sharing insights.",
        "Offering grounding guidance."
      ],
      benefits: [
        "Increased self-awareness.",
        "Emotional clarity.",
        "Insight into relationships.",
        "Support for growth.",
        "Validation of inner experiences."
      ]
    }
  },
  {
    title: "Chakra Balancing",
    tag: "Subconscious",
    desc:
      "Unlock deep-seated emotional patterns through guided regression sessions.",
    image: "https://images.unsplash.com/photo-1631191832932-94bc1a53d770?w=800&q=80",
    content: {
      overview: [
        "Chakra balancing assesses the body’s seven main energy centers linked to emotional and spiritual themes.",
        "It helps identify imbalances that may influence recurring patterns or stress.",
        "The practice is complementary and focused on insight and reflection."
      ],
      howItWorks: [
        "Energy sensing of each chakra.",
        "Identifying blockages or excess.",
        "Explaining emotional themes.",
        "Offering balancing suggestions.",
        "Integration through reflection."
      ],
      benefits: [
        "Greater emotional awareness.",
        "Understanding root challenges.",
        "Improved mind–body connection.",
        "Support for growth.",
        "Enhanced balance."
      ]
    }
  }
];
