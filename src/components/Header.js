const Header = ({ active, setActive }) => {
  const updateActiveLink = (el) => {
    setActive(el.target.innerHTML);
  };

  const activeSign = (
    <span className="absolute left-4 inline-block w-1 h-1 rounded-full bg-red-dark"></span>
  );

  return (
    <div
      id="masterHeaderContainer"
      className="fixed w-full top-0 z-10 bg-tan-light"
    >
      <header className="flex justify-between px-24 py-5 max-w-7xl mx-auto text-gray-700 bFour:px-12 bEight:px-6">
        <p className="font-mont text-3xl uppercase font-semibold bSix:text-2xl">
          skr
        </p>
        <nav className="flex items-center font-roboto text-sm bSix:text-xs">
          <a
            onClick={updateActiveLink}
            href="#masterIntroContainer"
            className="relative"
          >
            <p>INTRO</p>
            {active === "INTRO" ? activeSign : null}
          </a>
          <a
            onClick={updateActiveLink}
            href="#seekMasterContainer"
            className="ml-16 relative"
          >
            <p>SEEK</p>
            {active === "SEEK" ? activeSign : null}
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
