import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorWriteBoard from "../view/write/errorWriteBoard.tsx";

const router = createBrowserRouter([
    {
        path: "/app",
        element: <App />
    },
    {
        path: "/error/write",
        element: <ErrorWriteBoard />
    }
])

export default router;