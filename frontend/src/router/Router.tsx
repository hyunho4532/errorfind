import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorWriteBoard from "../view/write/errorWriteBoard.tsx";
import Main from "../view/main/Main.tsx";

const router = createBrowserRouter([
    {
        path: "/app",
        element: <App />
    },
    {
        path: "/error/write",
        element: <ErrorWriteBoard />
    },
    {
        path: "/",
        element: <Main />
    }
])

export default router;