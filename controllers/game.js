import Game from "../models/game";

export const games = [];
var id=1; 

export function getAll (req,res){
    let jeux=[]; 
    for(let i=0;i<games.length;i++){
        jeux.push({
            id: games[i].id,
            title: games[i].title,
            price: games[i].price,
        })
    }
    res.status(200).json(jeux);
}

export function getOnce(req,res){
    res.status(200).json(games.find(val=>val.id==req.params.id));
}

export function addOnce(req,res){
    const game= new Game (req.body.title,req.body.desc,req.body.price,req.body.quantity);
    games.push(game);
    id++; 
    res.status(200).json({message :'Created',entity: game});
}

export function putOnce(req,res) {
    const game= games.find (val=>val.id==req.body.id);
    game.title=req.body.title;
    game.desc=req.body.desc;
    game.price=req.body.price; 
    game.quantity=req.body.quantity; 
    res.status(200).json(game);
} 


