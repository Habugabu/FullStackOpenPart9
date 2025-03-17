/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientService from "../services/patientService";
import { Response } from "express";
import { NonSensitivePatient } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  res.send(patientService.getNonSensitivePatients());
});

router.post("/", (req, res) => {
  const { name, dateOfBirth, gender, ssn, occupation } = req.body;
  const addedPatient = patientService.addPatient({
    name,
    dateOfBirth,
    gender,
    ssn,
    occupation,
  });
  res.status(201).json(addedPatient);
});

export default router;
