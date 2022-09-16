import React from "react";
import "./App.css";
import Carousel, { CarouselItem } from "./Component/Carousel/index";
import FirstPage from "./Component/FirstPage";
import SecondPage from "./Component/SecondPage";
import ThirdPage from "./Component/ThirdPage";
import FourthPage from "./Component/FourthPage";

const App = () => {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem
          img={
            "https://geographical.co.uk/wp-content/uploads/somalaya-mountain-range-title.jpg"
          }
        >
          <FirstPage />
        </CarouselItem>
        <CarouselItem
          img={"https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg"}
        >
          <SecondPage />
        </CarouselItem>
        <CarouselItem
          img={"https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg"}
        >
          <ThirdPage />
        </CarouselItem>
        <CarouselItem
          img={"https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg"}
        >
          <FourthPage />
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default App;
