"use client";
import Header from "./components/Header";
import Content from "./components/Content";
import Review from "./components/Review";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <div id="homepage" className="text-textColor bg-black">
      <Header></Header>
      <Content></Content>
      <Review></Review>
      <Footer></Footer>
    </div>
    </>
  );
}
