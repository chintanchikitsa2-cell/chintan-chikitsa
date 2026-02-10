"use server";

import { connectDB } from "@/lib/mongoose";
import { EventRegistration } from "@/models/EventRegistration";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { Event } from "@/models/Event";

// Define validation schema
const eventRegistrationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  phone: z
    .string()
    .min(8, "Phone must be at least 8 characters")
    .max(20, "Phone must be less than 20 characters")
    .trim(),
  location: z
    .string()
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location must be less than 100 characters")
    .trim(),
  eventId: z.string().min(1, "Event ID is required"),
});

export async function createEventRegistration(data: {
  name: string;
  phone: string;
  location: string;
  eventId: string;
}) {
  try {
    // Validate input data using Zod
    const validatedData = eventRegistrationSchema.safeParse(data);

    if (!validatedData.success) {
      // Return first validation error
      const firstError = validatedData.error.errors[0];
      return {
        success: false,
        error: firstError.message,
      };
    }

    const { name, phone, location, eventId } = validatedData.data;

    // Connect to database
    await connectDB();

    // Create new registration
    await EventRegistration.create({
      name,
      phone,
      location,
      event: eventId,
    });

    // Revalidate the home page to show updated data if needed
    revalidatePath("/");

    return {
      success: true,
      message: "Registration submitted successfully",
    };
  } catch (error) {
    console.error("Error creating event registration:", error);
    return {
      success: false,
      error: "Failed to submit registration. Please try again.",
    };
  }
}

export const getEvents = async function () {
  try {
    await connectDB();
    const events = await Event.find({}).sort({ createdAt: -1 }).lean();
    return events.map(event => ({
      _id: event._id.toString(),
      title: event.title,
      date: event.date,
      image: event.image,
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}