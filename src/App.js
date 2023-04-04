import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import FragDemo from "./components/FragDemo";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Parent from "./components/Parent";
import Refs from "./components/Refs";
import Tables from "./components/Tables";
import Webrecap from "./components/Webrecap";
import Error from "./components/Error";
import HeroError from "./components/HeroError";
import Portals from "./components/Portals";
import PortalsDemo from "./components/PortalsDemo";
import Students from "./components/Students";
import ClickedCounter from "./components/ClickedCounter";
import HoverCounter from "./components/HoverCounter";
import ClickedCounterTwo from "./components/ClickedCounterTwo";
import HoveredCounterTwo from "./components/HoveredCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";
import ClickedRenderProps from "./components/ClickedRenderProps";





 

function App() {
  return (
    <div >
      {/* <ClickedRenderProps /> */}
       {/* <Counter render={(count, incrementCount)=><ClickedCounterTwo count={count} incrementCount={incrementCount}/>}/> */}
      {/* <Counter render={(count, incrementCount)=><HoveredCounterTwo count={count} incrementCount={incrementCount}/>}/>  */}
      {/* <HoveredCounterTwo /> */}
      {/* <ClickedCounterTwo /> */}
      {/* <User render={(isLoggedIn)=> isLoggedIn ? "seth" : "guest"}/> */}
      {/* <HoverCounter course="cs" /> */}

      {/* <ClickedCounter course="cs" /> */}
      {/* <Students /> */}
      
      {/* <PortalsDemo /> */}
     
  
      
      
    
      {/* <Portals /> */}
      {/* <HeroError >
      <Hero heroname={"mansetho"} />
      </HeroError>
      <HeroError >

      <Hero heroname={"kenneth"}/>
      </HeroError>

      <HeroError >

      <Hero heroname={"setho"}/>
      </HeroError> */}


      {/* <Error heroname={'seth'}/> */}
      {/* <Error heroname={'okeyo'}/> */}

      
      {/* <PortalsDemo /> */}
      {/* <Webrecap /> */}
      {/* <TypedN /> */}
      
      
      
    
      {/* <Refs /> */}
      {/* <Parent /> */}
      {/* <Tables /> */}
      {/* <FragDemo /> */}
      
      {/* <Nav /> */}
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards /> 
    </div>
  );
}

export default App;
