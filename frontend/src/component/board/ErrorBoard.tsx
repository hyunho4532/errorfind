import { Card } from '@mui/material';
import './ErrorBoard.scss'

function ErrorBoard(props: any) {
    const itemsPerPage = 3;
    const startIndex = (props.page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayData = props.errorBoardData.slice(startIndex, endIndex);

    return (
        <>
            <h2 className="main-component-title">최근에 등록한 에러 목록들 🥇</h2>
            <div className="main-component">
                {displayData.map((error: any, index: any) => (
                    <Card className="main-component-card">
                        <div key={index} className="main-card-component">
                            <p className="main-component-card-typedata">{error.errorTypeData}</p>
                            <p className="main-card-formatted">{error.formattedDateData}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default ErrorBoard;