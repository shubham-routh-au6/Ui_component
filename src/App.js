import React from "react";
import "./App.css";
import Carousel, { CarouselItem } from "./Component/Carousel/index";
import FirstPage from "./Component/FirstPage";
import SecondPage from "./Component/SecondPage";
import ThirdPage from "./Component/ThirdPage";
import FourthPage from "./Component/FourthPage";
import FirstIndicator from "./Image/firstIndicator.png";
import SecondIndicator from "./Image/secondIndicator.png";
import ThirdIndicator from "./Image/thirdIndicator.png";
import FourthIndicator from "./Image/fourthIndicator.png";

const App = () => {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem img={FirstIndicator}>
          <FirstPage />
        </CarouselItem>
        <CarouselItem img={SecondIndicator}>
          <SecondPage />
        </CarouselItem>
        <CarouselItem img={ThirdIndicator}>
          <ThirdPage />
        </CarouselItem>
        <CarouselItem img={FourthIndicator}>
          <FourthPage />
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default App;
