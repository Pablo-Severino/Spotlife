import Image from "next/image";

import illustration from "../../public/illustrationbg.svg";
import logo from "../../public/52x52.svg"

import styled from "../../styles/Auth.module.css";

export default function login() {
  return (
    <main className={styled.main}>
      <Image src={illustration} alt="illustration" className={styled.illustration} />
      <a
        className={styled.loginButton}
        href={`${process.env.AUTH_ENDPOINT}?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${process.env.RESPONSE_TYPE}`}
      >
        <Image src={logo} alt="logo" className={styled.logotipo} />
        <h4 className={styled.title}>Login to Spotlife</h4>
      </a>
    </main>
  );
}
