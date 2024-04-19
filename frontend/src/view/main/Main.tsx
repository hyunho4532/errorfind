import axios from "axios"
import { useState } from "react";
import './scss/Main.scss'
import { Card } from "@mui/material";

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
        <div className="main-component">
                {errorBoardData.map((error: any, index) => (
                    <Card className="main-card-component">
                        <div key={index}>
                            <p>{error.errorTypeData}</p>
                            <p className="main-card-formatted">{error.formattedDateData}</p>
                        </div>
                    </Card>
                ))}
        </div>
    )
}

export default Main