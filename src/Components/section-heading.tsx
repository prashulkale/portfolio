import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h1 style={{fontFamily : "Voyage Medium"}} className="text-5xl md:text-7xl px-10 my-[5vmax]  font-medium capitalize    text-start">
      {children}
    </h1>
  );
}
