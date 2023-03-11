import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181818] py-8 flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between pb-6">
        <div className="flex flex-col">
          <h3 className="text-white text-lg font-bold ">Shopping with us</h3>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">Contact Us</p>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">Delivery Options</p>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">Returning Items</p>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">Student Discount</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-lg font-bold">Legal</h3>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">Terms & Conditions</p>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">Cookies Policy</p>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointerhover:text-[#712EFF] cursor-pointer">Privacy Notice</p>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">Accessibility</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-lg font-bold">About Alexandria</h3>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">About Us</p>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">Affiliates</p>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">Independent Publishers</p>
          <p className="text-white text-sm hover:text-[#712EFF] cursor-pointer">Pricing</p>
        </div>
      </div>
      <div className="w-5/6 bg-[#BCBCBC] h-px mx-auto center-horizontal py"></div>
      <div className="text-gray-200 text-xs first-line:text-center flex items-center justify-center pt-6">
      <input
            type="text"
            placeholder="Sign up for more deals and offers"
            className="w-[440px] h-10 rounded bg-[#181818] border border-[#BCBCBC]"
          />
          <button className="bg-[#712EFF] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded">Subscribe</button>
        <p>Copyright Alexandria &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
