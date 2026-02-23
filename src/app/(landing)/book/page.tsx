"use client";

import Link from "next/link";
import { useState } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { Calendar } from "@/components/ui/calendar";
import { Alert, AlertDescription } from "@/components/ui/alert";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Info } from "lucide-react";
import { bookAppointment } from "@/actions/appointment";

/* ---------------- FORM SCHEMA ---------------- */

const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional(),
  note: z.string().optional(),
});


type FormValues = z.infer<typeof formSchema>;

/* ---------------- DATA ---------------- */

const therapies = [
  "Quantum Soul Alignment",
  "Sound Healing",
  "Bach Flower Remedies",
  "Regression Therapy",
  "NLP Coaching",
];

const slots = (() => {
  const startMinutes = 10 * 60;
  const endMinutes = 19 * 60;
  const step = 30;
  const labels: string[] = [];

  for (let minutes = startMinutes; minutes <= endMinutes; minutes += step) {
    const hours24 = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours24 >= 12 ? "PM" : "AM";
    const hours12 = hours24 % 12 || 12;
    const label = `${hours12.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")
      } ${period}`;

    labels.push(label);
  }

  return labels;
})();

/* ---------------- PAGE ---------------- */

export default function BookingPage() {
  const [therapy] = useState(therapies[0]);
  const [date, setDate] = useState<Date>();
  const [slot, setSlot] = useState<string>();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    if (!date || !slot) return;

    setLoading(true);

    const res = await bookAppointment({
      ...data,
      therapy,
      date,
      slot,
    });

    setLoading(false);

    if (!res.success) {
      setOpen(false);
      toast.error("Error while booking appointment");
    }

    setOpen(false);
    toast.success("Appointment booked");
  }

  return (
    <div className="min-h-screen">

      {/* ---------------- HEADER ---------------- */}

      <section className="container mx-auto py-20 space-y-6">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Booking & Consultation Center
        </h1>

        <p className="lead text-center">
          Experience a sanctuary for frequency alignment.
        </p>
      </section>

      {/* ---------------- CONTENT GRID ---------------- */}

      <section className="container mx-auto grid lg:grid-cols-3 gap-10 pb-24">

        {/* ---------------- LEFT ---------------- */}

        <div className="lg:col-span-2 space-y-10">

          {/* ---- Date & Time ---- */}

          <Card>
            <CardHeader>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                1. Choose Date & Time
              </h3>
            </CardHeader>

            <CardContent className="grid md:grid-cols-2 gap-8">

              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
              />

              <div className="space-y-4">
                <p className="muted">Available Slots</p>

                <Select onValueChange={setSlot} value={slot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>

                  <SelectContent>
                    {slots.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Sessions are 60 minutes long. Join 5 minutes early.
                  </AlertDescription>
                </Alert> */}
              </div>
            </CardContent>
          </Card>

          {/* ---- Personal Info ---- */}

          <Card>
            <CardHeader>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                2. Personal Information
              </h3>
            </CardHeader>

            <CardContent>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Note</FormLabel>
                        <FormControl>
                          <Textarea rows={5} {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* ---- CONFIRM ---- */}

                  <AlertDialog open={open} onOpenChange={setOpen}>
                    <AlertDialogTrigger asChild>
                      <Button size="lg" className="mx-auto block">
                        Confirm Appointment
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Confirm Booking?
                        </AlertDialogTitle>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel>
                          Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                          onClick={form.handleSubmit(onSubmit)}
                          disabled={loading}
                        >
                          Confirm
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                </form>
              </Form>
            </CardContent>
          </Card>

        </div>

        {/* ---------------- RIGHT ---------------- */}

        <Card className="h-fit rounded-sm">
          <CardHeader>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Direct Contact
            </h4>
          </CardHeader>

          <CardContent className="space-y-4 text-sm">

            <p>
              <span className="muted">Email:</span>{" "}
              <Link href="mailto:chintanchikitsa2@gmail.com">
                chintanchikitsa2@gmail.com
              </Link>
            </p>

            <p>
              <span className="muted">Phone:</span> +91 9646118555
            </p>

            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/chintan.chikitsa?igsh=MWR3ODhpcXdtaGNjeA=="
                target="_blank"
                rel="noreferrer"
              >
                <Badge>Instagram</Badge>
              </Link>
              <Link
                href="https://www.facebook.com/share/1FmXaRAF9i/"
                target="_blank"
                rel="noreferrer"
              >
                <Badge variant="outline">Facebook</Badge>
              </Link>
            </div>

          </CardContent>
        </Card>

      </section>

    </div>
  );
}
