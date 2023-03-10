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
          <Link href={"/register"}> 
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
    </header>
  );
};

export default Header;
