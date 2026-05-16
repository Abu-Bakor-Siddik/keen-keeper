"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoGraph } from "react-icons/go";
import { IoMenu, IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          className={`${pathname === "/" ? "bg-green-800 text-white" : ""} text-gray-500 `}
          href="/">
          <RiHome2Line />Home
        </Link>
      </li>
      <li>
        <Link
          className={`${pathname === "/timeline" ? "bg-green-800 text-white" : ""} text-gray-500`}
          href="/timeline">
          <IoTimeOutline />Timeline
        </Link>
      </li>
      <li>
        <Link
          className={`${pathname === "/stats" ? "bg-green-800 text-white" : ""} text-gray-500`}
          href="/stats">
          <GoGraph />Stats
        </Link>
      </li>
    </>
  );
  return (
    <nav className="mb-5">
        <div className=" flex justify-between navbar bg-base-100 shadow-sm">
        <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <IoMenu></IoMenu>
            </div>
            <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
            </ul>
        </div>
        <div>
            <Link
            href={"/"}
            className="btn btn-ghost text-xl gap-0 flex justify-center items-center md:justify-start ">
            Keen<span className="text-green-800">Keeper</span>
            </Link>
        </div>
        <div className="flex-none">
            <ul className=" hidden md:flex menu  menu-horizontal px-1 gap-2 ">
            {links}
            <li></li>
            </ul>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
