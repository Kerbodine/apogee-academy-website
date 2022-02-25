import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Apogee Academy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Apogee Description" />
      </Head>
      <div className="">
        <main>{children}</main>
      </div>
    </>
  );
}
