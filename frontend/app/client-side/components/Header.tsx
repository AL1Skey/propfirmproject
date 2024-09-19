import React from "react";
import Button from "../tools/Button";
const Header = () => {
  return (
    <header className=" bg-primary text-fourth">
      <section className="banner">
        <img
          src="https://tse3.mm.bing.net/th/id/OIG1._mtFbgtIAiafNEfpDZse?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt="AA"
          className="w-full h-[50rem]"
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
