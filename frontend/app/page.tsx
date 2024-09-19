"use client";
import Header from "./client-side/components/Header";
import Content from "./client-side/components/Content";
import Review from "./client-side/components/Review";
import Footer from "./client-side/components/Footer";
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
