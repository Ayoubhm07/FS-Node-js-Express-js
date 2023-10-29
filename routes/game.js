import { Express } from "express";

import { addGame,displayGames,updateGame,search } from "../controllers/game";

const router= Express.router; 

router
    .route('/addGame')
    .post(addGame); 
router 
    .route('/displayGames')
    .get(displayGames);
router 
    .route('/updateGame')
    .put(updateGame); 
router 
    .route('/search')
    .get(search);
export default router; 
