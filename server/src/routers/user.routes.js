import { Router } from "express";
import {
    loginUser,
    registerUser, verifyUserToken
} from "../controllers/user.controller.js";

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/verifyauth', verifyUserToken);






export default router;