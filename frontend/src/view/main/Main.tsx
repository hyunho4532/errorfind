import axios from "axios";
import { useEffect, useState } from "react";
import './scss/Main.scss'
import ErrorBoard from "../../component/board/ErrorBoard";
import CustomPagination from "../../component/pagination/CustomPagination";
import ErrorBoardWebType from "../../component/board/web/ErrorBoardWebType";
import Header from "../../component/header/Header";

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

            <Header />

            <ErrorBoard errorBoardData={errorBoardData} page={page} />
        
            <CustomPagination errorBoardData={errorBoardData} page={page} setPage={setPage} />

            <ErrorBoardWebType />
        </>
    )
}

export default Main;