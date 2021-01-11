import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="sticky top-0 w-full z-30 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <img src="/images/shared/desktop/logo.svg" alt="Logo Icon" />
            </Link>
          </div>
          <nav className="">
            <div className="" onClick={handleClick}>
              {click ? (
                <img src="/images/shared/mobile/close.svg" alt="Close Icon" />
              ) : (
                <img src="/images/shared/mobile/menu.svg" alt="Menu Icon" />
              )}
            </div>
            <ul
              className={
                click
                  ? "flex flex-col w-full h-11/12 absolute top-full -left-0 bg-white"
                  : " hidden"
              }
            >
              <li className="tracking-widest text-sm text-center mb-3 font-bold mt-5">
                <Link href="/" className="" onClick={closeMobileMenu}>
                  STORIES
                </Link>
              </li>
              <li className="tracking-widest text-sm text-center mb-3 font-bold">
                <Link href="/" className="" onClick={closeMobileMenu}>
                  FEATURES
                </Link>
              </li>
              <li className="tracking-widest text-sm text-center mb-4 font-bold">
                <Link href="/" className="" onClick={closeMobileMenu}>
                  PRICING
                </Link>
              </li>
              <hr className=" mx-7 border-gray-300 mb-4" />
              <button
                type="submit"
                className="bg-black mx-7 text-white text-sm tracking-widest py-3 mb-6 font-bold"
              >
                GET AN INVITE
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
