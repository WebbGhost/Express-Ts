import { Router } from "express";
import { healthCheck } from "@/controllers/healthCheck";
const router:Router = Router()


router.get("/healthcheck",healthCheck)
export default router