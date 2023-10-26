import express from 'express';
import { readFile } from 'fs';
import { join,dirname } from 'path';
import { fileURLToPath } from 'url';

const app=express();
const port=process.env.port || 9090 ; 

class Game {
    constructor(name,year,url){
        this.name=name;
        this.year=year;
        this.url=url;
    }
}

app.get('/game',(req,res)=>{
    const __dirname= dirname(fileURLToPath(import.meta.url));
    readFile(join(__dirname,'SteamGames.json'),function(err,data){
        if(!err){
            const list= JSON.parse(data); 
            let games = []; 
            for(let i=0; i<list.length;i++){
                games.push(new Game(list[i].Game,list[i].year,list[i].GameLink));
            }
            res.status(200).json(games);
        }else {
            res.status(404).json({error : err});
        }
    });
});


app.get('/game/select/:year',(req,res)=>{
    const __dirname= dirname(fileURLToPath(import.meta.url));
    readFile(join(__dirname,'SteamGames.json'),function(err,data){
        if(!err){
            const list= JSON.parse(data); 
            let games = []; 
            for(let i=0; i<list.length;i++){
                if(list[i].year>req.params.year){games.push(new Game(list[i].Game,list[i].year,list[i].GameLink));
                }
            }
            res.status(200).json(games);
        }else {
            res.status(404).json({error : err});
        }
    });
});

app.get('/game/select/:name',(req,res)=>{
    const __dirname= dirname(fileURLToPath(import.meta.url));
    readFile(join(__dirname,'SteamGames.json'),function(err,data){
        if(!err){
            const list= JSON.parse(data); 
            let games=[];
            for(let i=0; i<list.length;i++){
                if(list[i].name==req.params.name){games.push(new Game(list[i].Game,list[i].year,list[i].GameLink));
                }
            }
            res.status(200).json(games.map(game=>game.url));
        }else {
            res.status(404).json({error : err});
        }
    });
});

