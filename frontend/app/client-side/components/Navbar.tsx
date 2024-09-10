import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full text-white bg-blue-700 p-5">
      <div className="auth-nav w-full flex justify-end gap-20 ">
        <ButtonGroup>
          <Button >
            <a href="/login">Login</a>
          </Button>
          <Button>
            <a href="/signup">Signup</a>
          </Button>
        </ButtonGroup>
      </div>
      <div className="main-nav w-full flex justify-around">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
