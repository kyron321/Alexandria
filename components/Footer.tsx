/* eslint-disable @next/next/no-img-element */
import React from "react";
import Input from "./Input";
import Button from "./Button";
import facebook from "../public/facebook.svg"
import twitter from "../public/twitter.svg"
import instagram from "../public/instagram.svg"
import Link from "next/link";
export interface FooterInfoProps{
  textOne: string,
  textTwo: string,
  textThree: string,
  textFour: string,
  textFive: string 
}

export const FooterInfo = ({textOne, textTwo, textThree, textFour, textFive}: FooterInfoProps)  =>{
  return(
    <div className="flex flex-col">
    <h3 className="text-lg font-bold ">{textOne}</h3>
    <p className=" hover:text-[#712EFF] cursor-pointer">{textTwo}</p>
    <p className=" hover:text-[#712EFF] cursor-pointer">{textThree}</p>
    <p className=" hover:text-[#712EFF] cursor-pointer">{textFour}s</p>
    <p className=" hover:text-[#712EFF] cursor-pointer">{textFive}</p>
  </div>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181818] py-8 flex-shrink-0 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between pb-6">
        <FooterInfo textOne="Shopping with us" textTwo="Contact Us" textThree="Delivery Options" textFour="Returning Items" textFive="Student Discount"/>
        <FooterInfo textOne="Legal" textTwo="Terms & Conditions" textThree="Cookies Policy" textFour="Privacy Notice" textFive="Accessibility"/>
        <FooterInfo textOne="About Alexandria" textTwo="About Us" textThree="Affiliates" textFour="Independent Publishers" textFive="Pricing"/>
      </div>
      <div className="w-5/6 bg-[#BCBCBC] h-px mx-auto center-horizontal "></div>
      <div className="text-gray-200 text-xs first-line:text-center flex items-center justify-center pt-6 space-x-2">
        <Input type="primary" placeholder="Sign up for more deals and offers" />
        <Button title="Subscribe" size="small" />
        <a href="https://en-gb.facebook.com/" target="_blank">
        <img src={facebook.src} alt="facebook logo" className="cursor-pointer"/>
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
        <img src={twitter.src} alt="twitter logo" className="cursor-pointer"/>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
        <img src={instagram.src} alt="instagram logo" className="cursor-pointer"/>
        </a>
      </div>
      <div className="flex justify-center pt-6"> <p>Copyright Alexandria &copy; 2023</p></div>
    </footer>
  );
};

export default Footer;
