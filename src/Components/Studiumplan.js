import React from "react";
import "./studiumplan.css";
import {Studienplandata as data} from "../Demo/Data";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const Studiumplan = () =>{

    /**
     *
     * @param id {number}
     * @param subjects {Subject[]}
     * @returns {JSX.Element}
     */
    const newSemester = (id,subjects) =>{
        return(
            <div className="semester">
                <div>{data.title + " " + id}</div>
                {
                    subjects.map((element)=>(
                        <div className="pill">
                            <div>{element.code + " " +element.short}</div>
                            {
                                element.tests.map(test=>(
                                    <div className="test">
                                        {
                                        ((test.result == "NaN" &&
                                            <div>{test.type}</div>) ||
                                         (test.result < 1 &&
                                            <CheckIcon sx={{fontSize: "1.4em", color: "black"}}/>) ||
                                         (test.result > 4 &&
                                            <CloseIcon sx={{fontSize: "1.4em", color: "black"}}/>) ||
                                         <div>{test.result}</div>
                                        )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        )
    }


    const connectionThickness = 0.2;
    for (let i = 0; i < data.amount; i++) {
        if (data.subjects[i].length > data.maxSubjects) 
        data.maxSubjects = data.subjects[i].length;
    }

    return (
        <div className="container" id="pillContainer">
            {   // get all semesters
                data.subjects.map((subjects,index)=>(
                    newSemester(index+1,subjects)
                ))
            }
            
            {   // get all connections between subjects
                // 1. check if a previous element exists
                // 2. if it does, go through all previous elements (from semester index - 1)
                // 3. if code equals one of the codes stored in "previous" create 3 connection
                data.subjects.map((semester,sindex)=>(
                    semester.map((element, eindex)=>(
                        (element.previous != null && 
                        element.previous.map((prevCode)=>( 
                            data.subjects[sindex-1].map((prevElem, pindex)=>(
                                (prevElem.code == prevCode &&
                                <>
                                <div className="connection" style={{ // connection to previous
                                    top: (18.5-(connectionThickness/2)+pindex*data.maxSubjects)+"%",
                                    left: ((58+92.4*(sindex-1))/data.amount)+"%",
                                    width: 58.2/data.amount+"%",
                                    height: connectionThickness+"em",
                                    paddingRight: connectionThickness+"em"}}>
                                </div>
                                {   // get middle connections depending on position of both subjects
                                    (pindex < eindex &&
                                        <div className="connection" style={{ 
                                            top: (18.5-(connectionThickness/2)+pindex*data.maxSubjects)+"%",
                                            left: ((58.2+58+92.4*(sindex-1))/data.amount)+"%",
                                            width: connectionThickness+"em",
                                            height: ((eindex-pindex)*data.maxSubjects)+"%",
                                            paddingBottom: connectionThickness+"em"}}>
                                        </div>
                                    ) || (
                                    pindex > eindex &&
                                        <div className="connection" style={{ 
                                            top: (18.5-(connectionThickness/2)+eindex*data.maxSubjects)+"%",
                                            left: (((58+92.4*(sindex))-34.2)/data.amount)+"%",
                                            width: connectionThickness+"em",
                                            height: ((pindex-eindex)*data.maxSubjects)+"%",
                                            paddingBottom: connectionThickness+"em"}}>
                                        </div>)
                                }
                                <div className="connection" style={{ // connection to current
                                    top: (18.5-(connectionThickness/2)+eindex*data.maxSubjects)+"%",
                                    right: (100-(58+92.4*(sindex))/data.amount)+"%",
                                    width: 34.2/data.amount+"%",
                                    height: connectionThickness+"em"}}>
                                </div>
                                </>
                                )
                            )))
                        ))                   
                    ))
                ))
            }
        </div>
    )
}