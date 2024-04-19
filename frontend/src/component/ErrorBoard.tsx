function ErrorBoard(props: any) {
    const itemsPerPage = 3;
    const startIndex = (props.page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayData = props.errorBoardData.slice(startIndex, endIndex);

    return (
        <div className="main-component">
            {displayData.map((error: any, index: any) => (
                <div key={index} className="main-card-component">
                    <p>{error.errorTypeData}</p>
                    <p className="main-card-formatted">{error.formattedDateData}</p>
                </div>
            ))}
        </div>
    )
}

export default ErrorBoard;