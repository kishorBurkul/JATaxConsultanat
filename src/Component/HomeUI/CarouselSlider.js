import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function CarouselSlider() {
  const headlineCardsData = [
    {
      image: 'assets/homepage/slider1.png',
      content: {
        title: 'All Tax Solution In One Place',
        // buttonText: 'Contact Us',
      },
    },
    {
      image: 'assets/homepage/slider2.png',
      content: {
        title: 'All Loan Services In One Place',
        // buttonText: 'Contact Us',
      },
    },
    {
      image: 'assets/homepage/slider3.jpg',
      content: {
        title: 'All Registration Services In One Place',
        // buttonText: 'Contact Us',
      },
    },
    {
      image: 'assets/homepage/insurance_home.jpg',
      content: {
        title: 'All Insurance Services In One Place',
        // buttonText: 'Contact Us',
      },
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = headlineCardsData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1 ,mt:2 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {headlineCardsData.map((step, index) => (
          <Box
            key={step.label}
            sx={{ position: "relative", height: 400, overflow: "hidden" }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={step.image}
              alt={step.title}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <Typography variant="h4" sx={{ color: "white" }}>
                {step.content.title}
              </Typography>
              {/* <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                {step.content.buttonText}
              </Button> */}
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 0,
              }}
            >
              <Button
                color="error"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <ArrowForwardIosIcon />
                ) : (
                  <ArrowBackIosIcon />
                )}
              </Button>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: 0,
              }}
            >
              <Button
                color="error"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? (
                  <ArrowBackIosIcon />
                ) : (
                  <ArrowForwardIosIcon />
                )}
              </Button>
            </Box>
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={<div />}
        backButton={<div />}
      />
    </Box>
  );
}

export default CarouselSlider;
