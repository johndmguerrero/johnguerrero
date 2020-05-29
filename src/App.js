import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Header from './components/Header';
import Footer from './components/Footer';
import FrameOne from './components/FrameOne';
import FrameTwo from './components/FrameTwo';
import FrameThree from './components/FrameThree';
import FrameFour from './components/FrameFour';
import Preloader from './components/Preloader';


function App() {


  const [ loading , setLoading ] = useState(false);

  const startIntro = (bool) => {
    if(bool){

      console.log("loaded!");

      const tl = gsap.timeline();

      
      tl.to('.frame-lo-wrapper',1.8,{ css: { opacity: 0}})
      // add z index to header
      .to('.line',0,{css: { zIndex: "5" }})
      // intro header aunmation
      .from('.line span', 1.8,{
        y: 100,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
          amount: 1
        }
      })
      .to('.frame-loader',1.6, {
        height: 0,
        ease: "expo.inOut",
      })
      ;
  
    }else {
      console.log("loading..");
    }

  };


  useEffect(()=> {
    gsap.to("body", 0, { css: { visibility: "visible" } });

    window.onload = () => {


      setLoading(true);

    }

    startIntro(loading);
    
  }, );
  

  const slideFunction = (data) => {
    console.log(`this scroll in id ${data}`);
  }

  return (
    <>
    <Preloader />
    <Header />
    <Footer />
    <div className="j-frame-items">
      <FrameOne slideFunction={slideFunction} />
      <FrameTwo/>
      <FrameThree/>
    </div>
    <FrameFour/>

    </>
  );
}

export default App;
