import React from "react";
import "./studiumplan.css";
import {Studienplandata as data} from "../Demo/Data";

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
                                        <div>{test.type}</div>

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
            {
                data.subjects.map((subjects,index)=>(
                    newSemester(index+1,subjects)
                ))
            }
            
            {
                data.subjects.map((semester,sindex)=>(
                    semester.map((element, eindex)=>(
                        (element.previous != null &&
                        data.subjects[sindex-1].map((prevElem, pindex)=>(
                            (prevElem.code == element.previous &&
                            <>
                            <div className="connection" style={{ 
                                top: (18+(connectionThickness/2)+pindex*data.maxSubjects)+"%",
                                left: ((69+92.4*(sindex-1))/data.amount)+"%",
                                width: 58.2/data.amount+"%",
                                height: connectionThickness+"em",
                                paddingRight: connectionThickness+"em"}}>
                            </div>
                            {
                                (pindex < eindex &&
                                    <div className="connection" style={{ 
                                        top: (18+(connectionThickness/2)+pindex*data.maxSubjects)+"%",
                                        left: ((58.2+69+92.4*(sindex-1))/data.amount)+"%",
                                        width: connectionThickness+"em",
                                        height: ((eindex-pindex)*data.maxSubjects)+"%",
                                        paddingBottom: connectionThickness+"em"}}>
                                    </div>
                                ) || (
                                pindex > eindex &&
                                    <div className="connection" style={{ 
                                        top: (18+(connectionThickness/2)+eindex*data.maxSubjects)+"%",
                                        left: (((69+92.4*(sindex))-34.2)/data.amount)+"%",
                                        width: connectionThickness+"em",
                                        height: ((pindex-eindex)*data.maxSubjects)+"%",
                                        paddingBottom: connectionThickness+"em"}}>
                                    </div>)
                            }
                            <div className="connection" style={{ 
                                top: (18+(connectionThickness/2)+eindex*data.maxSubjects)+"%",
                                right: (100-(69+92.4*(sindex))/data.amount)+"%",
                                width: 34.2/data.amount+"%",
                                height: connectionThickness+"em"}}>
                            </div>
                            </>
                            )
                        ))
                        )
                    ))
                ))

            }
        </div>
    )
}