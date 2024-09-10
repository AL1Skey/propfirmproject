"use client";
import React from "react";
const Card = ({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div className={"flex flex-col p-5 "+ className}>
    {children}
    </div>
  );
};

export default Card;
