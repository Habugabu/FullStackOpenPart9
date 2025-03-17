import { NewPatient, Gender, Entry } from "./types";
import { z } from "Zod";

const newPatientSchema = z.object({
  name: z.string(),
  ssn: z.string(),
  occupation: z.string(),
  dateOfBirth: z.string().date(),
  gender: z.nativeEnum(Gender),
});

const toNewPatient = (object: unknown): NewPatient => {
  const patient = newPatientSchema.parse(object);
  const entries: Entry[] = [];
  const patientWithEntries = { entries, ...patient };
  return patientWithEntries;
};

export default toNewPatient;
