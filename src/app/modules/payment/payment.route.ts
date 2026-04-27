import { Role } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import { 
    // createCheckout, 
    PaymentController } from "./payment.controller";

const router = Router();

router.post("/subscription", auth(Role.USER), PaymentController.createSubscriptionCheckout);
router.post("/verify-session", auth(Role.USER), PaymentController.verifySession);
router.get("/", auth(Role.ADMIN, Role.USER), PaymentController.getAllPayments);

export const PaymentRoutes = router;
