import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex gap-10 h-[6.4rem] border-b-2 border-fourth sticky top-0 text-white bg-green-400 p-5">
      <div className="navbar__logo">
      <Image src="/logo.png" width={200} height={200} alt="logo" />
      </div>
      <div className="main-nav w-full flex justify-around items-center h-full">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/article">Article</a>
      </div>
      <div className="auth-nav w-full items-center h-full flex justify-end gap-20 ">
        <ButtonGroup>
          <Button className="bg-teritary">
            <a href="/login">Login</a>
          </Button>
          <Button className="bg-teritary">
            <a href="/signup">Signup</a>
          </Button>
        </ButtonGroup>
      </div>
    </nav>
  );
};

export default Navbar;
