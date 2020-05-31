import React, { useEffect, useState , useRef} from 'react';
import gsap from 'gsap';
import Header from './components/Header';
import Footer from './components/Footer';
import FrameOne from './components/FrameOne';
import FrameTwo from './components/FrameTwo';
import FrameThree from './components/FrameThree';
import FrameFour from './components/FrameFour';
import Preloader from './components/Preloader';
import { debounce } from 'lodash'; 
import FrameOverlay from './components/FrameOverlay';
import { Swipeable } from 'react-swipeable';


function App() {

  const slideMe = (data) => {
    const tl = gsap.timeline();

    if( data === "Down") {

      if(frameList.children[0].classList.contains("active")){

      }else if(frameList.children[1].classList.contains("active")){

        tl.to(frameList.children[0],1,{
          height: "100vh",
          ease: "expo.inOut",
        });

        setState({isActive1: true,isActive2: false,})
      }else if(frameList.children[2].classList.contains("active")){

          tl.to(frameList.children[1],1,{
            height: "100vh",
            ease: "expo.inOut",
          });

        setState({isActive2: true,isActive3: false,})
      }else if(frameList.children[3].classList.contains("active")){
          tl.to(frameList.children[3].children[0],1,{
            bottom: "-71vh",
            ease: "expo.inOut",
            clearProps: 'all',
          });
        setState({isActive3: true,isActive4: false,})

      }

    }else if( data === "Up"){
      if(frameList.children[0].classList.contains("active")){

        tl.to(frameList.children[0],1,{
          height: "0",
          ease: "expo.inOut",
        });
        
        setState({isActive1: false,isActive2: true,})

      }else if(frameList.children[1].classList.contains("active")){

        tl.to(frameList.children[1],1,{
          height: "0",
          ease: "expo.inOut",
        });

        setState({isActive2: false,isActive3: true,})
      }else if(frameList.children[2].classList.contains("active")){

          tl.to(frameList.children[3].children[0],1,{
            bottom: "0",
            ease: "expo.inOut",
          });

        setState({isActive3: false,isActive4: true,})
      };
    }
  }
  // validate if the page is finished loading
  const [ loading , setLoading ] = useState(false);

  // active handling for frame items
  const [ state , setState ] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
  })

  // ref Frame list
  let frameList = useRef(null);

  useEffect(()=> {
    // prevent flasing 
    gsap.to("body", 0, { css: { visibility: "visible" } });
    // once all assets loaded set Loading to true
    window.onload = () => {
      setLoading(true);
    }
    // start animation intro
    startIntro(loading);
  }, [loading]);

  useEffect(() => {


    if(state.isActive4 ){
      // 
    }else{
      return () => {
        const tl = gsap.timeline();
        tl.to('.frame-slide-overlay',0.9,{
          top: 0,
          ease: "expo.inOut",
        }).to('.frame-slide-overlay',0.9,{
          height: 9,
          ease: "expo.inOut",
          clearProps: 'all',
        });
      }
    }



  },[state]);

  // const swipeHandling = useSwipeable({ onSwiped:(e) => console.log(e.dir)})


  // animation intro
  const startIntro = (bool) => {
    // validate if the page succesfully loaded
    if(bool){
      const tl = gsap.timeline();
      tl.to('.frame-lo-wrapper',1.8,{ css: { opacity: 0}})
      // add z index to header
      .to('.line',0,{css: { zIndex: "9" }})
      // intro header aunmation
      .from('.line span', 1.6,{
        y: 100,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
          amount: 1
        }
      })
      .to('.frame-loader',1, {
        height: 0,
        ease: "expo.inOut",
      });
    // callback if not uet finish loading
    }
  };
  

  const slideFunction = debounce((data) => {

    const tl = gsap.timeline();

    if(data < 0){

      if(frameList.children[0].classList.contains("active")){

      }else if(frameList.children[1].classList.contains("active")){

        tl.to(frameList.children[0],1,{
          height: "100vh",
          ease: "expo.inOut",
        });

        setState({isActive1: true,isActive2: false,})
      }else if(frameList.children[2].classList.contains("active")){

          tl.to(frameList.children[1],1,{
            height: "100vh",
            ease: "expo.inOut",
          });

        setState({isActive2: true,isActive3: false,})
      }else if(frameList.children[3].classList.contains("active")){
          tl.to(frameList.children[3].children[0],1,{
            bottom: "-71vh",
            ease: "expo.inOut",
            clearProps: 'all',
          });
        setState({isActive3: true,isActive4: false,})

      }

    }else if(data > 0){

      if(frameList.children[0].classList.contains("active")){

        tl.to(frameList.children[0],1,{
          height: "0",
          ease: "expo.inOut",
        });
        
        setState({isActive1: false,isActive2: true,})

      }else if(frameList.children[1].classList.contains("active")){

        tl.to(frameList.children[1],1,{
          height: "0",
          ease: "expo.inOut",
        });

        setState({isActive2: false,isActive3: true,})
      }else if(frameList.children[2].classList.contains("active")){

          tl.to(frameList.children[3].children[0],1,{
            bottom: "0",
            ease: "expo.inOut",
          });

        setState({isActive3: false,isActive4: true,})
      }
    }
  

 

  }, 500);

  return (
    <>
    <Preloader />
    <Header />
    <Footer />
    <Swipeable onSwiped={(e) => slideMe(e.dir)}>
    <div className="j-frame-items" ref={el => (frameList = el)} onWheel={(e) => ( e.persist(slideFunction(e.deltaY)) )} >
      <div className={state.isActive1 ? 'frame-item active' : 'frame-item'}>
        <FrameOne/>
      </div>
      <div className={state.isActive2 ? 'frame-item active' : 'frame-item'}>
        <FrameTwo/>
      </div>
      <div className={state.isActive3 ? 'frame-item active' : 'frame-item'}>
        <FrameThree/>
      </div>
      <div className={state.isActive4 ? 'frame-item active' : 'last-frame'}>
        <FrameFour />
      </div>
    </div>
    </Swipeable>
    <FrameOverlay/>
    </>
  );
}

export default App;
