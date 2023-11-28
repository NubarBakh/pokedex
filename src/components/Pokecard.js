import React, { useState } from "react";
import style from './pockecard.module.css'



let pockemons =[ 
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62, img:'./images/004.png'}, 
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63, img:'./images/007.png'}, 
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72, img:'./images/011.png'}, 
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178, img:'./images/012.png'},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112, img:'./images/025.png'}, 
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95, img:'./images/039.png'}, 
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225, img:'./images/094.png'}, 
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65, img:'./images/113.png'} ]

    
   

let a =[];

let b=[];
let c =pockemons.length

for (let i = 0; i < c; i++) {
    let randomPokemonIndex = Math.floor(Math.random() * pockemons.length);
    let randomPokemon = pockemons[randomPokemonIndex];
    console.log(randomPokemon);
    if (a.length < 4 && !a.includes(randomPokemon)) {
        a.push(randomPokemon);
        pockemons.splice(randomPokemonIndex, 1);
       
    } else {
        b.push(randomPokemon); 
        pockemons.splice(randomPokemonIndex, 1);
        
    }
}
   
    export default function Pockecard ({pockemons}){

        const [data, setData] = useState({ countA: 0, countB: 0 });
        const [winA, setWinA] = useState('tie');
        const [winB, setWinB] = useState('tie');



        const buttonClick = () => {

                            let countA=0;
                a.map((item) => {
                
                    countA+=item.base_experience
                
                });
                console.log(countA)
              

                let countB=0;
                b.map((item) => {
                
                    countB+=item.base_experience
                
                });
                console.log(countB);
          
        
           
        
                setData({ countA: countA, countB: countB });
        
                if (countA > countB) {
                    setWinA('win');
                    setWinB('lose');
                  } else if (countA < countB) {
                    setWinA('lose');
                    setWinB('win');
                  } else {
                    setWinA('tie');
                    setWinB('tie');
                  }
                 

            };

                


  

   return<>

    

    
    
   <div className={style.main}>

    <h1>Pockedex</h1>
    <div className={style.firstPart}>

        <h2>{winA}</h2>
        <p>Total experience :{data.countA}</p>
        <div  className={style.cards}>
            {a.map((pokemon,index)=>(

                <div key={index} className={style.pocemonCard}>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.img}/>
                <p>Type:{pokemon.type}</p>
                <p>Exp:{pokemon.base_experience}</p>
                </div>
            ))}
                   
        </div>

    </div>

    <button onClick={buttonClick} > Click</button>


    <div className={style.secondPart}>
        <h2>{winB}</h2>
        <p>Total experience:{data.countB}</p>
        <div className={style.cards}>
          {b.map((pokemon, index) => (
            <div className={style.pokemonCard} key={index}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.img} alt={pokemon.name} />
              <p>Type: {pokemon.type}</p>
              <p>Exp: {pokemon.base_experience}</p>
            </div>
          ))}
        </div>
      </div>
   </div>
   </> 
}