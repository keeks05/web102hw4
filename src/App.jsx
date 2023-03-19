import axios from 'axios';
import { useState, useEffect } from 'react'
import BreedAttr from '../Components/BreedAttr'
import BanList from './../Components/BanList'
import './App.css'

const ACCESS_KEY ='live_pN2nXsOhx97s5xgo8VslTyQQuB3RNO0XvlEIsKqlq1KcsEGdwmvAN7pNNpRS88tV';

function App() {
   const URL = `https://api.thedogapi.com/v1/images/search?has_breeds=1&api_key=${ACCESS_KEY}`

   const [dogs, setDogs] = useState(null);
   const [breeds, setBreeds] = useState(null);
   const [showDog, setShow] = useState(false);
   const [banList, setBanList] = useState([]);


   const fetchData = async () => {
      const response = await axios.get(URL);
      setDogs(response.data[0])
      setBreeds(response.data[0].breeds[0])
      setShow(true);

   }

   const handleClick = () => {
      fetchData();
   }

   const handleNameClick = () => {
      let attribute = breeds.name;
      setBanList(banList => [...banList, attribute])

   }
   const handleLifeClick = () => {
      let attribute = breeds.life_span;
      setBanList(banList => [...banList, attribute])

   }
   const handleHeightClick = () => {
      let attribute = breeds.height.imperial;
      setBanList(banList => [...banList, attribute])

   }
   const handleWeightClick = () => {
      let attribute = breeds.weight.imperial;
      setBanList(banList => [...banList, attribute])

   }
   return (
      <div className="main-container">
         <div className="container">
            <h1>Doggie dogee doge dog</h1>
            <h3>Discover dogs from around the world!</h3>
            {showDog && breeds && <h1>{breeds.name}</h1>}
            
            <div className="info-container">
               {showDog && breeds && <BreedAttr breedAttr={breeds.name} onClick={handleNameClick} id="1" />}
               {showDog && breeds && <BreedAttr breedAttr={breeds.life_span} onClick={handleLifeClick} id="2"/>}
               {showDog && breeds && <BreedAttr breedAttr={breeds.height.imperial} onClick={handleHeightClick} id="3"/>}
               {showDog && breeds && <BreedAttr breedAttr={breeds.weight.imperial} onClick={handleWeightClick} id="4" />} 
            </div>
            {showDog && dogs && <img src={dogs.url} height="350px" width="375px"/>}

            <button onClick={handleClick}>Let the Dogs Out</button>
         </div>
         <BanList banList={banList}/>
      </div>
   )
}

export default App
