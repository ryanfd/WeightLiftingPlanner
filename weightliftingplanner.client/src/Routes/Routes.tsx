import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import DesignGuide from "../Pages/DesignGuide/DesignGuide";
import SearchPage from "../Pages/SearchPage/SearchPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "search", element: <SearchPage /> },
            { path: "design-guide", element: <DesignGuide /> },
        ]
    }
]);