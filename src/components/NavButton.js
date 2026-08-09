import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { classname } from "../funcs/classname";

export function NavButton({ navTo, title, icon }) {
    return (
        <NavLink
            to={navTo}
            className={({ isActive }) => classname("displayText hover:text-white font-semibold flex items-center space-x-2 px-5 hover:bg-terracotta-dark text-md transition delay-0 duration-[500ms] ease-in-out", isActive ? "bg-gray-light text-cobalt" : "text-white")}
        >
            <FontAwesomeIcon icon={icon} className="w-5" />
            <div>{title}</div>
        </NavLink>
    )
}