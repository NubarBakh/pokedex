import React, { useState } from "react";
import style from './pockecard.module.css'
//import img from './images'



let pockemons =[ 
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62, img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png'}, 
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63, img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'}, 
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72, img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png'}, 
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178, img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png'},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112, img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png'}, 
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95, img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png'}, 
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225, img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png'}, 
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65, img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png'} ]

    
   

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
        const [winA, setWinA] = useState('Tie');
        const [winB, setWinB] = useState('Tie');



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
                    setWinA('Winning Hand');
                    setWinB('Losing Hand');
                  } else if (countA < countB) {
                    setWinA('Losing Hand');
                    setWinB('Winning Hand');
                  } else {
                    setWinA('Tie');
                    setWinB('Tie');
                  }
                 

            };

                


  

   return<>

    

    
    
   <div className={style.main}>

    <h1>Pockedex</h1>
    <div className={style.firstPart}>

        <h2 style={{ color: winA == 'Losing Hand' ? 'red' : 'green' }}>{winA}</h2>
        <p>Total experience :{data.countA}</p>
        <div  className={style.cards}>
            {a.map((pokemon,index)=>(

                <div key={index} className={style.pocemonCard}>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.img} alt={pokemon.img}/>
                <p>Type:{pokemon.type}</p>
                <p>Exp:{pokemon.base_experience}</p>
                </div>
            ))}
                   
        </div>

    </div>

    <button onClick={buttonClick} className={style.button}  > Click</button>


    <div className={style.secondPart}>
        <h2  style={{ color: winB == 'Losing Hand' ? 'red' : 'green' }}>{winB}</h2>
        <p>Total experience:{data.countB}</p>
        <div className={style.cards}>
          {b.map((pokemon, index) => (
            <div className={style.pocemonCard} key={index}>
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