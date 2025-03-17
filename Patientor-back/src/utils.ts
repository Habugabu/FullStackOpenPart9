import { NewPatient, Gender } from "./types";
import { z } from "Zod";

const newPatientSchema = z.object({
  name: z.string(),
  ssn: z.string(),
  occupation: z.string(),
  dateOfBirth: z.string().date(),
  gender: z.nativeEnum(Gender),
});

const toNewPatient = (object: unknown): NewPatient => {
  return newPatientSchema.parse(object);
};

export default toNewPatient;
