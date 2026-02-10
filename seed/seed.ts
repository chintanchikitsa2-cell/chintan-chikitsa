// scripts/seed.ts
import mongoose from "mongoose";
import { Event } from "../src/models/Event";
import { EventRegistration } from "../src/models/EventRegistration";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const MONGO_URL = process.env.MONGO_URL as string;

if (!MONGO_URL) {
  throw new Error("MONGO_URL missing");
}

async function seed() {
  await mongoose.connect(MONGO_URL);

  console.log("Connected to MongoDB");

  // Clear existing data
  await EventRegistration.deleteMany({});
  await Event.deleteMany({});

  // Insert Events
  const events = await Event.insertMany([
    {
      title: "Sound Healing Workshop",
      date: "March 24, 2024 · London, UK",
      image: "/event/sound-healing-workshop.jpg",
    },
    {
      title: "Quantum Soul Alignment",
      date: "April 10, 2024 · Online",
      image: "/event/quantum-soul-alignment.jpg",
    },
    {
      title: "Bach Flower Certification",
      date: "May 05, 2024 · Manchester, UK",
      image: "/event/bach-flower-certification.jpg",
    },
  ]);

  console.log("Seeded Events");

  // Insert Registrations (linked to events)
  const registrations = [
    {
      name: "John Doe",
      phone: "9876543210",
      location: "London",
      event: events[0]._id,
    },
    {
      name: "Alice Smith",
      phone: "8765432109",
      location: "Online",
      event: events[1]._id,
    },
    {
      name: "Michael Brown",
      phone: "7654321098",
      location: "Manchester",
      event: events[2]._id,
    },
    {
      name: "Sarah Johnson",
      phone: "9988776655",
      location: "London",
      event: events[0]._id,
    },
  ];

  await EventRegistration.insertMany(registrations);

  console.log("Seeded Registrations");

  await mongoose.disconnect();
  console.log("Done");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
