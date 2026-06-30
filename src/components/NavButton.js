import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { classname } from "../funcs/classname";

export function NavButton({ navTo, title, icon }) {
    return (
        <NavLink
            to={navTo}
            className={({ isActive }) => classname("displayText font-semibold flex items-center space-x-2 px-4 hover:bg-bg-hover hover:text-text-hover text-lg transition delay-0 duration-[500ms] ease-in-out", isActive ? "bg-bg-primary" : "")}
        >
            <FontAwesomeIcon icon={icon} className="w-5" />
            <div>{title}</div>
        </NavLink>
    )
}