import axios from "axios";
import { useEffect, useState } from "react";
import './scss/Main.scss'
import ErrorBoard from "../../component/ErrorBoard";
import CustomPagination from "../../component/CustomPagination";

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

    return (
        <>
            <ErrorBoard errorBoardData={errorBoardData} page={page} />
        
            <CustomPagination errorBoardData={errorBoardData} page={page} setPage={setPage} />
        </>
    )
}

export default Main;