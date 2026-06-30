import {
  faBeer,
  faInfoCircle,
  faLightbulb,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { NavButton } from "./NavButton";

const navInfo = [
  {
    title: "About",
    navTo: "/",
    icon: faInfoCircle,
  },
  {
    title: "Pottery",
    navTo: "pottery",
    icon: faBeer,
  },
  {
    title: "Design",
    navTo: "design",
    icon: faLightbulb,
  },
  {
    title: "Contact",
    navTo: "contact",
    icon: faPaperPlane,
  }
];

export const TopBar = () => {
  return (
    <div className="flex shrink=0 bg-bg-secondary flex flex-row justify-between sticky top-0">
      <div className="mr-6 text-[50px] displayText font-semibold pl-6">
        Austin’s
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