import Head from "next/head";

import { getProviders, signIn } from "next-auth/react";

type LoginProps = {
  name?: string | any;
  providers?: string | number;
  id?: number;
  key: string;
};

function Login({ providers }: LoginProps ) {
  return (
    <>
      <Head>
        <title>Spotlife - Login</title>
      </Head>
      <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
        <img
          className="w-52 mb-5"
          src="/208x208.svg"
          alt="logo spotify"
        />

        {Object.values(providers).map((providers) => (
          <div key={providers.name}>
            <button
              className="bg-gray-900 text-white p-5 rounded-full"
              onClick={() => signIn(providers.id, { callbackUrl: "/" })}
            >
              Login with {providers.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
