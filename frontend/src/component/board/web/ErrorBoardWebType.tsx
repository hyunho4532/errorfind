import { useEffect, useState } from 'react'
import './ErrorBoardWebType.scss'
import axios from 'axios';
import { Card } from '@mui/material';

function ErrorBoardWebType() {

    const [errorBoardWebTypeData, setErrorBoardWebTypeData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:50000/errorBoardData/get/web")
            .then((response) => {
                console.log(response.data);
                setErrorBoardWebTypeData(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }); 

    return (
        <>
            <h2 className="main-component-title">웹에서 이런 에러가 발생했어요! 🥈</h2>

            {   errorBoardWebTypeData.map((error: any, index: any) => (
                <Card className="main-component-web-card">
                    <div key={index}>
                        <p>{error.errorTypeData}</p>
                        <p>{error.formattedDateData}</p>
                    </div>
                </Card>
            ))}
        </>
    )
}

export default ErrorBoardWebType