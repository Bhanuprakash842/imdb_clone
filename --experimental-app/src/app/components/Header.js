import Link from "next/link";
import Menuitem from "./Menubar";
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6 ">
      <div className="flex ">
      <Menuitem title="HOME" address="/" Icon={AiFillHome}/>
      <Menuitem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className="flex items-center space-x-5 ">
          <DarkModeSwitch />
          <Link href="/">
          <h2 className="text-2xl"><span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">TrendFlix</span></h2></Link>
        </div>
    </div>
  );
}