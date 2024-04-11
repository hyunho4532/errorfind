import axios from "axios"
import { useState } from "react";

function Main() {

    const [errorBoardData, setErrorBoardData] = useState([]);

    axios.get("http://localhost:50000/errorBoardData/get")
        .then((response) => {
            console.log(response.data); 
            setErrorBoardData(response.data);
        })
        .catch((error) => {
            console.error(error);
        })

    return (
        <div>
            {errorBoardData.map((error: any, index) => (
                <div key={index}>
                    <p>{error.errorTypeData}</p>
                </div>
            ))}
        </div>
    )
}

export default Main