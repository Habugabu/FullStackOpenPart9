import diagnosisData from "../../data/diagnoses";

import { Diagnosis } from "../types";

const diagnoses: Diagnosis[] = diagnosisData;

const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

const findByCode = (code: string): Diagnosis | undefined => {
  const diagnosis = diagnoses.find((d) => d.code === code);
  return diagnosis;
};

export default {
  getDiagnoses,
  findByCode,
};
