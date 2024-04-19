import { Pagination } from "@mui/material";

function CustomPagination(props: any) {

    const handlePageChange = (event: any, value: any) => {
        props.setPage(value);
    }

    const itemsPerPage = 3;
    const totalItems = props.errorBoardData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <Pagination
            count={totalPages}
            page={props.page}
            onChange={handlePageChange}
            siblingCount={1}
            boundaryCount={1} />
    )
}

export default CustomPagination