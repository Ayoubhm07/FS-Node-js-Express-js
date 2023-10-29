import { express } from "express";
import { buyGame } from "../controllers/achat";

const router=express.Router(); 

router
    .route('/buyGame')
    .post(buyGame);

    export default router; 