import { Outlet } from "react-router-dom"
import { Navbar } from "../UI/Header"
import { Footer } from "../UI/Footer"
import { ScrollToTop } from "./ScroolToTop"
import { Toaster } from "react-hot-toast"

export const AppLayout = () => {
    return (
        <div className="bg-base min-h-screen text-textMain">
            <ScrollToTop />
            <Navbar />
            <Toaster
                position="top-right"
                gutter={12}
                containerStyle={{
                    top: 20,
                    right: 20,
                }}
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: "rgba(15, 23, 42, 0.7)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        color: "#e2e8f0",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "14px",
                        padding: "12px 16px",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                    },
                }}
            />
            <Outlet />
            <Footer />
        </div>
    )
}