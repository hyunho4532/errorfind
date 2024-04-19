import axios from "axios"
import { useEffect, useState } from "react";
import './scss/Main.scss'
import { Card, Pagination } from "@mui/material";

function Main() {

    const [errorBoardData, setErrorBoardData] = useState([]);
    const [page, setPage] = useState(1);

    const handlePageChange = (page: any) => {
        setPage(page);
    }

    useEffect(() => {
        axios.get("http://localhost:50000/errorBoardData/get")
        .then((response) => {
            setErrorBoardData(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    })

    return (
        <>
            <div className="main-component">
                {errorBoardData.map((error: any, index) => (
                    <div key={index} className="main-card-component">
                        <p>{error.errorTypeData}</p>
                        <p className="main-card-formatted">{error.formattedDateData}</p>
                    </div>
                ))}
            </div>

            <Pagination
                count={10}
                onChange={handlePageChange}
                page={page}
            />
        </>
    )
}

export default Main