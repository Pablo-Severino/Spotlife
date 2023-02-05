import Image from "next/image";

import Logo from "../../public/logo.svg"

import styled from "../../styles/StatusBar.module.css";

export default function index() {
  return (
    <div className={styled.statusbar}>
      <Image src={Logo} alt="Logo website" className={styled.logo} />
    </div>
  );
}
