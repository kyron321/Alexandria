import Link from "next/link";
import { BsCartFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <nav className="bg-[#181818] flex justify-between px-10">
        <Link href="/">
          <div className="w-[304px] h-[58px] not-italic font-[500] text-5xl leading-[58px] text-[#FFFFFF]">
            {title}
          </div>
        </Link>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-[440px] h-10 rounded"
          />
        </div>
        <div
          className="flex gap-3"
        >
          <Link href={"/login"}> 
          <button className=" w-[193px] h-16 not-italic font-[500] text-xl text-[#FFFFFF]">
            Sign in / Register
          </button>
          </Link>
          <Link href={"/cart"}>
          <BsCartFill className="text-[#712EFF]  w-[48px] h-16"  />
          </Link>
          <Link href={"wishlist"}>
          <BsFillStarFill className="text-[#712EFF]  w-[48px] h-16" />
          </Link>
        </div>
      </nav>
      <nav className="bg-[#181818] flex justify-center px-10 border-t-2 border-[#BCBCBC]">
        <div className="px-2 py-1 flex">
          <div className="p-2 border-r-2 border-[#BCBCBC]">
      <h3 className="text-white hover:text-[#712EFF] cursor-pointer">Fiction</h3>
          </div>
          <div className="p-2 border-r-2 border-[#BCBCBC]">
      <h3 className="text-white hover:text-[#712EFF] cursor-pointer">Non-Fiction</h3>
          </div>
          <div className="p-2 border-r-2 border-[#BCBCBC]">
      <h3 className="text-white hover:text-[#712EFF] cursor-pointer">Horror</h3>
          </div>
          <div className="p-2 border-r-2 border-[#BCBCBC]">
      <h3 className="text-white hover:text-[#712EFF] cursor-pointer">Crime</h3>
          </div>
          <div className="p-2 border-r-2 border-[#BCBCBC]">
      <h3 className="text-white hover:text-[#712EFF] cursor-pointer">Biography</h3>
          </div>
          <div className="p-2 border-r-2 border-[#BCBCBC]">
      <h3 className="text-white hover:text-[#712EFF] cursor-pointer">Graphic Novels</h3>
          </div>
          <div className="p-2">
      <h3 className="text-white hover:text-[#712EFF] cursor-pointer">Manga</h3>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
