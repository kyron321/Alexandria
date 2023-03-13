import React from "react";
import Button from "../components/Button";
import Link from "next/link";
import Input from "../components/Input";
import { BsArrowLeft } from "react-icons/bs";

export default function register() {
  return (
    <>
      <Link href="/">
        <div className="absolute p-8 text-white text-6xl cursor-pointer hover:text-[#712EFF]">
          <BsArrowLeft />
        </div>
        </Link>
      <div className=" flex flex-row items-center ">
        <div className=" bg-[#181818] flex flex-col justify-center items-center w-1/2 h-screen gap-7">
          <h1 className="text-white text-5xl font-medium cursor-default">
          Already Have an Account?
          </h1>
          <h2 className="text-white text-4xl font-base text-center w-3/5 cursor-default">
          Click the button below in order to go to the sign in page.
          </h2>
          <Link href="login">
            <Button title="Sign In Page" size="large" />
          </Link>
        </div>
        <div className="flex  flex-col justify-center items-center w-1/2 h-screen">
          <form className="flex  flex-col justify-center items-center w-1/2 h-screen gap-4">
            <h1 className="text-black text-5xl font-medium cursor-default">Sign Up</h1>
            <Input type="secondary" placeholder="First Name" />
            <Input type="secondary" placeholder="Last Name" />
            <Input type="secondary" placeholder="Email" />
            <Input type="secondary" placeholder="Password" />
            <Button title="Sign In" />
            <Link href={"forgot-password"}>
              <p className="text-[#0094FF] font-medium cursor-pointer">
                Forgot Password?
              </p>
            </Link>
            <p className="font-medium cursor-default">
              Already have an account?
              <Link href="/login">
                <span className="text-[#0094FF] cursor-pointer">
                  {" "}
                  Sign In
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
