import React from "react";
import Image from "next/image";
import FooterNav from "./FooterNav";
import data from "../client-side/data/footer.json";
const Footer = () => {
  return (
    <footer className="p-12 bg-[#04452f] text-fourth">
      <div className="footer flex gap-10">
        <div className="footer__logo">
          <Image src="/logo.png" width={100} height={100} alt="logo" className="w-[10rem] h-[5rem]" />
        </div>
        <div className="footer__nav flex gap-[2rem] justify-evenly w-full">
          {[1, 2, 3, 4, 5].map((item, key) => (
            <FooterNav
              key={key}
              title={"Test" + key}
              data={data}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
