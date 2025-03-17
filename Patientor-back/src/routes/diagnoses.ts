import express from "express";
import diagnosisService from "../services/diagnosisService";
import { Response } from "express";
import { Diagnosis } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<Diagnosis[]>) => {
  res.send(diagnosisService.getDiagnoses());
});

router.get("/:code", (req, res: Response<Diagnosis>) => {
  const diagnosis = diagnosisService.findByCode(req.params.code);

  if (diagnosis) {
    res.status(200).send(diagnosis);
  } else {
    res.sendStatus(404);
  }
});

export default router;
