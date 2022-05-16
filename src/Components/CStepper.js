import React from "react";
import Box from "@mui/material/Box";
import {CardHeader, Step, StepLabel, Stepper} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

/**
 *
 * @param data {{
 *     name:string,
 *     steps:string[],
 *     step:number
 * }}
 * @return {JSX.Element}
 * @constructor
 */
const CStepper = ({data}) =>{
    return(
        <Card>
            <CardHeader>{data.name}</CardHeader>
            <CardContent>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={data.step} >
                        {data.steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </CardContent>
        </Card>

    )
}

export default CStepper;