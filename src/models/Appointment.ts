import { Schema, model, models } from "mongoose";

const AppointmentSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
  },
  { timestamps: true }
);

export default models.Appointment || model("Appointment", AppointmentSchema);

