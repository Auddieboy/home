import {
  faBeer,
  faLightbulb,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { NavButton } from "./NavButton";

const navInfo = [
  {
    title: "pottery",
    navTo: "pottery",
    icon: faBeer,
  },
  {
    title: "design",
    navTo: "design",
    icon: faLightbulb,
  },
  {
    title: "contact",
    navTo: "contact",
    icon: faPaperPlane,
  }
];

export const TopBar = () => {
  return (
    <div className="flex shrink=0 bg-terracotta flex flex-row justify-between sticky top-0">
      <div className="mr-6 text-[40px] text-white displayText font-semibold pl-6 my-2">
        austin’s
      </div>
      <div className="flex flex-row">
        {navInfo.map((i, j) => (
          <NavButton
            key={j}
            title={i.title}
            navTo={i.navTo}
            icon={i.icon}
            pic={i.pic}
          />
        ))}
      </div>
    </div>
  )
}