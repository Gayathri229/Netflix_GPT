import React from "react";

const Footer = () => {
  return (
    <div className="py-20 px-32 bg-black font-netflixSansRegular text-white text-opacity-70 ">
      <p className="mx-9 p-2 font-bold font-netflixSansBold">
        Questions? Call 000-800-919-1694
      </p>
      <div className="flex text-sm underline">
        <div className="m-6 p-2 mr-16">
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            FAQ
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Investor Relations
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Privacy
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Speed Test
          </p>
        </div>
        <div className="m-6 p-2 mr-16">
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Help Centre
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Jobs
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Cookie Preferences
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Legal Notices
          </p>
        </div>
        <div className="m-6 p-2 mr-16">
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Account
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Ways to watch
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Corporate Information
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Only on Netflix
          </p>
        </div>
        <div className="m-6 p-2 mr-16">
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Media Centre
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Terms of Use
          </p>
          <p className="m-4 cursor-default text-white text-opacity-70 hover:text-opacity-50">
            Contact Us
          </p>
        </div>
      </div>
      <p className="mx-9 p-2">Netflix India</p>
    </div>
  );
};

export default Footer;
