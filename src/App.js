import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [dogImage, setDogImage]= useState(null);
  const [dogPhotos, setDogImages]= useState([]);
  const [dogTypes, setDogTypes]= useState([]);
  
  // Have a button when I click display a random dog photo
  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(res => setDogTypes(Object.keys(res.message)));
  }, [])
  const onDogClick = () => {
    // fetch the random dog photo
    fetch ('https://dog.ceo/api/breeds/image/random')
    .then (res => (res.json())
    .then (res => setDogImage (res.message)));
  }

//   const PhotosClick = () => { 
//   fetch('https://dog.ceo/api/breeds/image/random/3')
//   .then(res => res.json())
//   .then (res => setDogPhotos(res.message)); 
// }
  const dogPhotosClick = () =>{
    fetch('https://dog.ceo/api/breed/images/random')
    .then(res => res.json())
    .then(res => setDogImages(res.message[0]));
    
  }

  // display a that random dog photo
  console.log(dogPhotos)
  return (
  <div className="App">
   <h1> Click this button for doggo:</h1>
   <button onClick={onDogClick}>Doggo</button>
   {dogImage && <div>
    <h1>Here is your dog photo</h1>
    <img src={dogImage} alt='random dog'/>
    </div>}
    <h1>Click on breed to view photo</h1>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {dogTypes.map(dogTypes => <button onClick={()=>dogPhotosClick(dogPhotos)} key={dogTypes}>{dogTypes}</button>)}
  </div>
  );
}
export default App;



