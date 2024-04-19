import axios from "axios";
import { useEffect, useState } from "react";
import './scss/Main.scss'
import { Pagination } from "@mui/material";

function Main() {
    const [errorBoardData, setErrorBoardData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get("http://localhost:50000/errorBoardData/get")
            .then((response) => {
                setErrorBoardData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handlePageChange = (event: any, value: any) => {
        setPage(value);
    }

    const itemsPerPage = 3;
    const totalItems = errorBoardData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayData = errorBoardData.slice(startIndex, endIndex);

    return (
        <>
            <div className="main-component">
                {displayData.map((error: any, index) => (
                    <div key={index} className="main-card-component">
                        <p>{error.errorTypeData}</p>
                        <p className="main-card-formatted">{error.formattedDateData}</p>
                    </div>
                ))}
            </div>

            <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                siblingCount={1}
                boundaryCount={1}
            />
        </>
    )
}

export default Main;