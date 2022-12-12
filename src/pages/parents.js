import React from "react";
import ChildrenPage from "./children";

const ParentPage = () => {

    let message = "hey iam magic";
    let newMessage = "good morning";
    return(
        <div>
            <h1>this is parent page - {message}</h1>
            <div>
                <ChildrenPage data= {message} newData={newMessage}></ChildrenPage>
            </div>
        </div>
    )
}

export default ParentPage;