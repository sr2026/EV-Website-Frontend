import {useEffect, useState} from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let herodata = [
    {text1:"Dive into", text2:"the world of electric vehicles with us!"},
    {text1:"Discover the future of transportation", text2:"with our electric vehicle insights!"},
    {text1:"Join the electric revolution", text2:"and drive towards a sustainable future!"},
    {text1:"Experience the thrill of electric mobility", text2:"with our cutting-edge EV technology!"},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroCount((Count) => {return Count === 2?0:Count + 1})
    },3000);
    return () => clearInterval(timer);
  },[])
  
  return (
    <div className="app">
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <NavBar />
      <Hero
       setPlayStatus={setPlayStatus}
       heroCount={heroCount}
       herodata={herodata[heroCount]}
       setHeroCount={setHeroCount}
       playStatus={playStatus} 
      />

    </div>
  )
}
export default App
