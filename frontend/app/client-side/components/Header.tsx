import React from "react";
import Button from "../tools/Button";
const Header = () => {
  return (
    <header className=" bg-primary text-fourth">
      <section className="banner">
        <img
          src="https://s3-alpha.figma.com/hub/file/2919915406/d3627f82-4e1c-4ca8-a2ac-9a15f7166b25-cover.png"
          alt="AA"
        />
      </section>
      <section className="paragraph p-5 grid grid-cols-2 gap-10 w-full">
        <div className="p-2 title">
          <h1 className="text-[3rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            odio.
          </h1>
        </div>
        <div className="desc p-2">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            odio.
          </p>
          <div className="p-5 flex justify-start gap-10">
            <Button>Click This</Button>
            <Button>Click This</Button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
