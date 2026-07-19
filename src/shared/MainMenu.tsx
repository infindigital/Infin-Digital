import { NavLink } from "react-router-dom";
import { MainMenuRootList } from "@/shared/mobile-menu/MobileMenuCloneContext";

type Item = { to: string; label: string };

const NAV_LINKS: Item[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

function LinkSwap({ label }: { label: string }) {
  return (
    <span className="at-link-swap">
      <span className="text-1">{label}</span>
      <span className="text-2">{label}</span>
    </span>
  );
}

export default function MainMenu() {
  return (
    <MainMenuRootList>
      {NAV_LINKS.map((item) => (
        <li key={item.to}>
          <NavLink to={item.to} end={item.to === "/"} className={({ isActive }) => (isActive ? "active" : undefined)}>
            <LinkSwap label={item.label} />
          </NavLink>
        </li>
      ))}
    </MainMenuRootList>
  );
}
