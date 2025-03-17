import express from "express";
import patientService from "../services/patientService";
import { Response } from "express";
import { NonSensitivePatient, Patient } from "../types";
import toNewPatient from "../utils";
import { z } from "Zod";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  res.send(patientService.getNonSensitivePatients());
});

router.get("/:id", (req, res: Response<Patient>) => {
  const patient = patientService.findById(req.params.id);

  if (patient) {
    res.status(200).send(patient);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.status(201).json(addedPatient);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.issues });
    } else {
      res.status(400).send({ error: "unknown error" });
    }
  }
});

export default router;
