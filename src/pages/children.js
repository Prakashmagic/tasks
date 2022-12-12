import React from "react";

const ChildrenPage = (props) => {

    console.log(props);
    return(
        <div>
            <h1>this is a children page -- {props.data}</h1>
            <h2>wishes -- {props.newData}</h2>
        </div>
    )
}

export default ChildrenPage;