"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { createEventRegistration } from "@/actions/event";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(8, "Phone must be at least 8 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  eventId: z.string(),
  eventTitle: z.string(),
});

type FormValues = z.infer<typeof schema>;

export function EventRegistrationDialog({
  eventId,
  eventTitle,
  trigger,
}: {
  eventId: string;
  eventTitle: string;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingData, setPendingData] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      eventId: eventId,
      eventTitle: eventTitle,
    },
  });

  const onSubmit = (data: FormValues) => {
    setPendingData(data);
    setConfirmOpen(true);
  };

  const handleConfirm = async () => {
    if (!pendingData) return;

    setIsSubmitting(true);

    try {
      const result = await createEventRegistration({
        name: pendingData.name,
        phone: pendingData.phone,
        location: pendingData.location,
        eventId: pendingData.eventId,
      });

      if (!result.success) {
        toast.error(result.error || "Failed to submit registration");
        return;
      }

      toast.success(result.message || "Registration submitted successfully");

      form.reset({
        name: "",
        phone: "",
        location: "",
        eventId: eventId,
        eventTitle: eventTitle,
      });

      setConfirmOpen(false);
      setOpen(false);
      setPendingData(null);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="scroll-m-20 text-xl font-semibold tracking-tight">
              Event Registration
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Secure your spot for a transformative experience.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 pt-4"
          >
            <div>
              <Input
                placeholder="Enter your full name"
                {...form.register("name")}
                disabled={isSubmitting}
              />
              {form.formState.errors.name && (
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-red-600">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                placeholder="+44 20 1234 5678"
                {...form.register("phone")}
                disabled={isSubmitting}
              />
              {form.formState.errors.phone && (
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm text-red-600">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <Input
                placeholder="City or Country"
                {...form.register("location")}
                disabled={isSubmitting}
              />
              {form.formState.errors.location && (
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm text-red-600">
                  {form.formState.errors.location.message}
                </p>
              )}
            </div>

            <Input readOnly {...form.register("eventTitle")} disabled={isSubmitting} />

            <Button className="w-full mt-2" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Confirm Event Registration?
            </AlertDialogTitle>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Confirm"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
