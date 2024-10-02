import NavBar, { OpenMenu, openNav } from "./nav-bar";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="flex justify-between md:px-[6em] px-5 py-6">
    <div className="absolute"></div>  
    <div className="flex w-full md:w-fit justify-between items-center">
        <Logo />
        <OpenMenu />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
