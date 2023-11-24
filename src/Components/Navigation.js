import { Link } from "react-router-dom";
import { useState } from "react";

import logo from '../Assets/images/logo.svg'
import { Container } from "./Container";

function NavBarOverlay() {
  const [hidden, setHidden] = useState(true);

  function openNav() {
    setHidden(false);
  }

  function closeNav() {
    setHidden(true);
  }

  return (
    <div className="flex justify-between p-5 text-center place-content-center">
      <img src={logo} alt=""/>
      <div
        hidden={hidden}
        id="myNav"
        className={`p-6 h-screen w-screen fixed z-[1] left-0 top-0 bg-black overflow-x-hidden  ease-linear`}
      >
      <div>
        <img src={logo} alt="" className="absolute top-[50px] text-red text-[50px]"/>
        <button onClick={() => closeNav()} className="absolute top-[20px] right-[45px] text-[50px]">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
        <div className="relative text-left top-[25%] flex flex-col gap-4 w-full space-y-4 mt-[30px] font-heading uppercase">
          {[
            ["Home", "/", 1],
            ["Services", "/services", 2],
            ["Who We Are", "/about_us", 3],
            ["Contact Us", "/contact_us", 4],
          ].map(([title, path, id]) => (
            <Link
              to={path}
              key={id}
              onClick={() => closeNav()}
              className="block p-[8px] text-dark-gray hover:text-white text-heading transition-[0.3s] hover:text-red focus:text-teal cursor-pointer"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      <button
        onClick={() => openNav()}
        className="flex items-center gap-3 justify-center text-[30px]"
      >
        <ion-icon name="menu"></ion-icon>
      </button>
    </div>
  );
}

function DesktopNavBar() {
  return (
    <div className="flex gap-4 items-center justify-between">
      <img src={logo} alt=""/>
      <div className="flex gap-4 justify-between items-center py-4 font-semibold text-white">
        {[
          ["Home", "/", 1],
          ["Services", "/services", 2],
          ["Who We Are", "/about_us", 3],
          ["Contact Us", "/contact_us", 4],
        ].map(([title, path, id]) => (
          <Link to={path} key={id}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function NavBar() {
  const screenWidth = window.innerWidth;
  return (
    <Container>
      {screenWidth >= 1024 ? <DesktopNavBar /> : <NavBarOverlay />}
    </Container>
  );
}