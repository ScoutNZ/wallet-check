import React from "react";
import Header from "./header";
export default function Layout({ children }) {

  
  return (
    <main >
      <div className=" z-[1200]">
        <Header />
        <div className="p-0 flex justify-center ">{children}</div>
      </div>
    </main>
  );
}