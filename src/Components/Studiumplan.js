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




    return (
        <div className="container" id="pillContainer">
            {
                data.subjects.map((subjects,index)=>(
                    newSemester(index+1,subjects)
                ))
            }
        </div>
    )
}