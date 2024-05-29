import NavLogo from "./NavLogo.js";

export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <NavLogo />
      {children}
    </nav>
  );
}
