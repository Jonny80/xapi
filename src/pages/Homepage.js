import React from "react";
import Headline from "../Components/Headline";

export default function Homepage() {

    const [studienplanStatus,setStudienPlanStatus]=React.useState(false);

    return(
        <div>
            <div className="headline">
                <Headline studienplanStatus={studienplanStatus} setStudienPlanStatus={setStudienPlanStatus}></Headline>
            </div>

     
    </div>)
}