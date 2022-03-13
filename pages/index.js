import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Devices from "../images/devices.svg";
import Speakers from "../components/home/Speakers";
import Goals from "../components/home/Goals";
import Learn from "../components/home/Learn";
import Logos from "../components/home/Logos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Apogee Academy</title>
      </Head>
      <Navbar />
      <section className="mx-auto my-16 max-w-6xl overflow-hidden p-8">
        <div className="flex flex-col-reverse gap-8 sm:flex-row">
          <div className="w-full flex-none sm:w-2/3 md:w-1/2">
            <header className="mb-6 mt-8 sm:mt-12 md:mb-12">
              {/* Beta banner */}
              <div className="-ml-1 mb-8 hidden rounded-md bg-white text-sm leading-5 ring-2 ring-gray-200 sm:inline-flex">
                <span className="inline-flex gap-2 p-1">
                  <span className="rounded-md bg-indigo-500 px-1 py-0.5 text-xs font-semibold text-white">
                    NEW
                  </span>
                  <span className="font-medium">
                    Apogee Academy is now in beta!
                  </span>
                </span>
                <button className="border-l-2 border-gray-200 px-2 font-medium hover:bg-gray-200">
                  Sign up →
                </button>
              </div>
              {/* Title section */}
              <h1 className="mb-4 text-3xl font-semibold sm:mb-8 sm:text-4xl">
                World's First{" "}
                <span className="underline decoration-indigo-500 decoration-4">
                  Youth Run
                </span>{" "}
                Online Learning Community For{" "}
                <span className="text-indigo-500">SDG</span> Education
              </h1>
              <h2 className="text-gray-600 sm:text-lg">
                Join a community of over 1,000 youth leaders and learners from
                all over the world. Expand your knowledge on sustainable
                development and learn from the best in the industry.
              </h2>
            </header>
            {/* Call to action button */}
            <button className="rounded-lg bg-indigo-500 px-4 py-2 text-white ring-indigo-600 ring-offset-2 hover:bg-indigo-600 active:ring-2">
              Get Started →
            </button>
          </div>
          <div className="grid flex-auto place-items-center">
            <Devices className="mx-auto w-full max-w-[420px] sm:min-w-[420px] sm:max-w-0" />
          </div>
        </div>
      </section>
      <Logos />
      <div className="divide-y-2 divide-gray-200">
        <Speakers />
        <Goals />
        <Learn />
      </div>
      <Footer />
    </>
  );
}
