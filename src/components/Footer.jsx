import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-base-content rounded p-10 pt-20 mt-5">
      <nav className="flex flex-col justify-center items-center">
        <div className="text-white text-center">
            <h1 className="text-5xl mb-3"><span className="font-extrabold!">Keen</span>Keeper</h1>
            <p className="text-[#fafafac1]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        </div>
        <h4 className="text-white font-semibold text-xl mt-5 mb-2">Social Links</h4>
        <div className="grid grid-flow-col gap-4">
            <a href="/instagram" className=" bg-white p-2 rounded-full"><RiInstagramFill /></a>
            <a href="/facebook" className=" bg-white p-2 rounded-full"><FaFacebookSquare /> </a>
            <a href="/twitter" className=" bg-white p-2 rounded-full"><FaXTwitter /></a>
        </div>
      </nav>
      <div className="divider mt-5 "></div>
      <div className="text-white md:flex justify-between! mt-5 text-center">
        <p className="text-[#fafafa8b]">
          © 2026 KeenKeeper. All rights reserved.
        </p>
        <ul className="flex flex-col md:flex-row gap-5 text-[#fafafa8b] text-center mt-2">
            <li>Privacy Policy</li>
            <li> Terms of Services</li>
            <li>cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
