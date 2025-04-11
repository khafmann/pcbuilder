import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import BuildPage from "./components/BuildComponent";
import FaqPage from "./pages/FaqPage";
import ContactsPage from "./pages/ContactsPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <BuildPage />
            },
            {
                path: "/faq",
                element: <FaqPage />
            },
            {
                path: "/contacts",
                element: <ContactsPage />
            }
        ]
    }
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);