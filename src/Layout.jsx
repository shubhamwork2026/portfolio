import { Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <h1>Navbar</h1>
            <Outlet />
        </>
    )
}