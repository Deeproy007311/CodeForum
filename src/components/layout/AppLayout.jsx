import { Outlet } from "react-router-dom"
import { Navbar } from "../UI/Header"
import { Footer } from "../UI/Footer"

export const AppLayout = () => {
    return (
        <div className="bg-base min-h-screen text-textMain">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}