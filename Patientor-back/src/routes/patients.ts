import express from "express";
import patientService from "../services/patientService";
import { Response } from "express";
import { NonSensitivePatient } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  res.send(patientService.getNonSensitivePatients());
});

router.post("/", (_req, res) => {
  res.send("Saving a patient!");
});

export default router;
