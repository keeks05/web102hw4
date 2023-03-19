import React from "react";

const BanList = ({banList}) => {
   return (
      <div className="ban-list">
            <h2>Ba Sing Se Ban List</h2>
            <p>Select an attribute in your listing to ban it</p>
            {banList && banList.map((name, index) => <li key={index}><button>{name}</button></li>)}
      </div>
   )

}

export default BanList;