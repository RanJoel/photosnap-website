import Link from "next/link";

function Footer() {
  return (
    <footer className="footer-height bg-black flex justify-center items-center">
      <div className="">
        <img
          src="/images/shared/desktop/logo-white.svg"
          alt="Photosnap Logo"
          className="mx-auto mb-7"
        />
        <ul className="flex justify-center items-center mb-12">
          <li>
            <img
              src="/images/shared/desktop/facebook.svg"
              alt="Facebook Logo"
              className="mx-2"
            />
          </li>
          <li>
            <img
              src="/images/shared/desktop/youtube.svg"
              alt="Youtube Logo"
              className="mx-2"
            />
          </li>
          <li>
            <img
              src="/images/shared/desktop/twitter.svg"
              alt="Twitter Logo"
              className="mx-2"
            />
          </li>
          <li>
            <img
              src="/images/shared/desktop/pinterest.svg"
              alt="Pinterest Logo"
              className="mx-2"
            />
          </li>
          <li>
            <img
              src="/images/shared/desktop/instagram.svg"
              alt="Instagram Logo"
              className="mx-2"
            />
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <ul className="text-white tracking-widest text-xs mb-24">
            <li className="mb-4 text-center">
              <Link href="/">HOME</Link>
            </li>
            <li className="mb-4 text-center">
              <Link href="/" className="">
                STORIES
              </Link>
            </li>
            <li className="mb-4 text-center">
              <Link href="/" className="">
                FEATURES
              </Link>
            </li>
            <li className="mb-4 text-center">
              <Link href="/" className="">
                PRICING
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center mb-7">
          <div className="text-white text-xs tracking-widest mr-5">
            GET AN INVITE
          </div>
          <img
            src="/images/shared/desktop/arrow-white.svg"
            alt="Arrow Icon"
            className=""
          />
        </div>
        <div className="text-gray-500 mx-auto text-sm">
          Copyright 2019. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
