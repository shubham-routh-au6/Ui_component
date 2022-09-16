import React from "react";
import { useSwipeable } from "react-swipeable";
import { Box, Button, Container } from "@material-ui/core";
import "../../App.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <Box className="carouselItem" style={{ width: width }}>
      {children}
    </Box>
  );
};

const Carousel = ({ children }) => {
  const [active, setActive] = React.useState(0);

  const updateActive = (n) => {
    if (n < 0) {
      n = 0;
    } else if (n >= React.Children.count(children)) {
      n = React.Children.count(children) - 1;
    }
    setActive(n);
  };

  const events = useSwipeable({
    onSwipedLeft: () => updateActive(active + 1),
    onSwipedRight: () => updateActive(active - 1),
  });

  return (
    <Container {...events} className="carousel">
      <Box
        className="inner"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </Box>
      <Box className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <Button
              className={`${index === active ? "active" : ""}`}
              onClick={() => {
                updateActive(index);
              }}
            >
              <img
                className="indicatorImage"
                src={child.props.img}
                alt={"img"}
              />
            </Button>
          );
        })}
      </Box>
    </Container>
  );
};

export default Carousel;
