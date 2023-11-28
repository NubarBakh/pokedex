import React, { useState } from "react";

import Pockecard from "./Pokecard";

let pockemons =[ 
   {id: 4, name: 'Charmander', type: 'fire', base_experience: 62, img:'./images/004.png'}, 
   {id: 7, name: 'Squirtle', type: 'water', base_experience: 63, img:'../components/images/007.png'}, 
   {id: 11, name: 'Metapod', type: 'bug', base_experience: 72, img:'../components/images/011.png'}, 
   {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178, img:'../components/images/012.png'},
   {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112, img:'../components/images/025.png'}, 
   {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95, img:'../components/images/039.png'}, 
   {id: 94, name: 'Gengar', type: 'poison', base_experience: 225, img:'../components/images/094.png'}, 
   {id: 133, name: 'Eevee', type: 'normal', base_experience: 65, img:'../components/images/113.png'} ]





 
   
export default function Pokedex (){

   
   
   

   return<>
   <Pockecard/>
  
  
   
   </> 
}