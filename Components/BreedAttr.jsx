import React from "react";

const BreedAttr = ({breedAttr, onClick, id}) => {
   return (
         <button onClick={onClick} id={id}>{breedAttr}</button>
   )
}

export default BreedAttr;