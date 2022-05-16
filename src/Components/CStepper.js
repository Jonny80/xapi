import React from "react";
import Box from "@mui/material/Box";
import {CardHeader, Step, StepLabel, Stepper} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

/**
 *
 * @param data {{
 *     name:string,
 *     steps:string[],
 *     step:number,
 *     date:string
 * }}
 * @param style
 * @return {JSX.Element}
 * @constructor
 */
const CStepper = ({data,style}) =>{
    return(
        <Card style={style}>
            <CardHeader title={data.name}/>
            <CardContent>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={data.step} >
                        {data.steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>{data.date}</Typography>
                    </React.Fragment>
                </Box>
            </CardContent>
        </Card>

    )
}

export default CStepper;