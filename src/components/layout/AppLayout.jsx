import { Outlet } from "react-router-dom"
import { Navbar } from "../UI/Header"
import { Footer } from "../UI/Footer"
import { ScrollToTop } from "./ScroolToTop"

export const AppLayout = () => {
    return (
        <div className="bg-base min-h-screen text-textMain">
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}