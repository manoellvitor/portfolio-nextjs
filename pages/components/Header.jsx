import Image from "next/image";
import React from "react";
import Logo from "../resources/images/Logo.svg";

export function Header() {
  return (
    <>
      <header className="flex justify-between p-4">
        <div>
          <Image src={Logo} alt="Manoel Lopes - Full Stack Developer" />
        </div>
        <div>Social</div>
        <div>Links</div>
      </header>
    </>
  );
}
