import React, {useState} from "react";
import {CardHeader, CardMedia, MobileStepper} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

/**
 * Creates a Carousel of data
 * @param data {{
 *     header:string,
 *     description:string,
 *     date:string
 * }[]} data to be displayed at Carousel
 * @return {JSX.Element}
 * @constructor
 */
const CNews = ({data}) =>{
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = data.length;

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
        <Box sx={{ maxWidth: 400, flexGrow: 1,height:300 }}>
            <h2>News</h2>
            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data[activeStep].header}
                    </Typography><Typography gutterBottom variant="h7" component="div">
                        {data[activeStep].date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data[activeStep].description}
                    </Typography>
                </CardContent>
                <CardMedia>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                Back
                            </Button>
                        }
                    />
                </CardMedia>
            </Card>
        </Box>
    );

}

export default CNews