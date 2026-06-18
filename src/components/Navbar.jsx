import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex justify-center gap-8 text-[18px] h-[80px] items-center sm:justify-end sm:pr-10">
            <Link to="#home">Home</Link>
            <Link to="#skills">Skills</Link>
            <Link to="#work">Work</Link>
            <Link to="#contact">Contact</Link>
        </nav>
    )
}