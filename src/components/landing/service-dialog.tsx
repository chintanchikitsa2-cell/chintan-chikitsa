"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  content: {
    overview: string[];
    howItWorks: string[];
    benefits: string[];
  };
};

export function ServiceDialog({ title, content }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Learn More
        </Button>
      </DialogTrigger>

      <DialogContent className="  max-h-[85vh] w-full max-w-2xl overflow-y-auto">

        <DialogHeader>
          <DialogTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {title}
          </DialogTitle>
        </DialogHeader>

        {/* ================= OVERVIEW ================= */}

        <section className="mt-6">
          <Badge>Overview</Badge>

          {content.overview.map((p, i) => (
            <p
              key={i}
              className="leading-7 [&:not(:first-child)]:mt-6"
            >
              {p}
            </p>
          ))}
        </section>

        {/* ================= HOW IT WORKS ================= */}

        <section className="mt-10">
          <Badge>How It Works</Badge>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {content.howItWorks.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ================= BENEFITS ================= */}

        <section className="mt-10">
          <Badge>Benefits</Badge>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {content.benefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="flex justify-end gap-3 pt-6 border-t">
          <Button>Book This Session</Button>
        </div>

      </DialogContent>
    </Dialog>
  );
}
