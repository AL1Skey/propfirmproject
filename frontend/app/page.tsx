"use client";
import Header from "./client-side/components/Header";
import Content from "./client-side/components/Content";
import Review from "./client-side/components/Review";
export default function Home() {
  return (
    <>
    <div id="homepage" className="text-white bg-black">
      <Header></Header>
      <Content></Content>
      <Review></Review>
    </div>
    </>
  );
}
