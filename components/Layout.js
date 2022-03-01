import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Apogee Academy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="title"
          content="Apogee Academy - SDG Online Learning Community"
        />
        <meta
          name="description"
          content="Join a community of over 1,000 youth leaders and learners from all over the world. Expand your knowledge on sustainable development and learn from the best in the industry."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apogee-academy.vercel.app/" />
        <meta
          property="og:title"
          content="Apogee Academy - SDG Online Learning Community"
        />
        <meta
          property="og:description"
          content="Join a community of over 1,000 youth leaders and learners from all over the world. Expand your knowledge on sustainable development and learn from the best in the industry."
        />
        <meta
          property="og:image"
          content="https://apogee-academy.vercel.app/images/banner.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://apogee-academy.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Apogee Academy - SDG Online Learning Community"
        />
        <meta
          property="twitter:description"
          content="Join a community of over 1,000 youth leaders and learners from all over the world. Expand your knowledge on sustainable development and learn from the best in the industry."
        />
        <meta
          property="twitter:image"
          content="https://apogee-academy.vercel.app/images/banner.png"
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
