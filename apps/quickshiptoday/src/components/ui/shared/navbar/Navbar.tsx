import Image from "next/image";
import Logo from "public/images/logo.svg";
import HamburgerMenu from "./shared/hamburger-menu";


export default function Navbar() {
  return (
    <nav className="bg-indigo-600">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-shrink-0 items-center">
              <Image
                src={Logo}
                alt="Quick Ship Today"
                width={200}
                height={32}
              />
            </div>
          </div>

          <div className="-mr-2 flex">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
