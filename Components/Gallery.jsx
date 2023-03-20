const Gallery = ({ dogs }) => {
   return (
      <div>
         <h2>List of Dogs We've Seen So Far</h2>
         <div className="image-container">
            {dogs && dogs[0] !== null ? (
               dogs.map((pic, index) => (
                  <li className="gallery" key={index}>
                     <img
                        className="gallery-screenshot"
                        src={pic}
                        alt="Undefined Screen Shot from Query"
                        width="200"
                     />
                  </li>
               ))
            ) : (
               <div>
                  <h3>Please let the dogs out</h3>
               </div>
         )}
         </div>
      </div>
   );
};

export default Gallery;