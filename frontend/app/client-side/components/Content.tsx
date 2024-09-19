import React from "react";
import Card from "../tools/Card";
const Content = () => {
  return (
    <section className="bg-tertiary ">
      <header className="text-center text-3xl py-5">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </header>
      <section className="text-center text-xl">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, voluptatum? Earum quidem sapiente beatae in reprehenderit eius quaerat ea, odio at nisi rem saepe dolorum excepturi a consequatur libero reiciendis!</p>
      </section>
      <section className="grid grid-cols-3">
        {[1,2,3].map((item, index) => (
          <div key={index} >
            <Card>
              <img src="https://3dmdb.com/previews/5811193.jpg" alt="" />
              <h3 className="text-center">Card Title</h3>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quid em sapiente beatae in reprehenderit eius quaerat ea, odio at nisi rem saepe dolorum excepturi a consequatur libero reiciendis!</p>
            </Card>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Content;
