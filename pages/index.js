import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8 mb-32">
        <section className="flex flex-col md:flex-row">
          <div className="w-full sm:w-2/3 md:w-1/2 flex-none">
            <header className="mb-6 md:mb-12 mt-8 sm:mt-12">
              {/* Beta banner */}
              <div className="hidden sm:inline-flex -ml-1 bg-white ring-2 ring-gray-200 rounded-md text-sm leading-5 mb-8">
                <span className="p-1 inline-flex gap-2">
                  <span className="px-1 py-0.5 font-semibold text-white bg-indigo-500 text-xs rounded-md">
                    NEW
                  </span>
                  <span className="font-medium">
                    Apogee Academy is now in beta!
                  </span>
                </span>
                <button className="hover:bg-gray-200 border-l-2 border-gray-200 font-medium px-2">
                  Sign up →
                </button>
              </div>
              {/* Title section */}
              <h1 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-8">
                World's First{" "}
                <span className="underline decoration-indigo-500">
                  Youth Run
                </span>{" "}
                Online Learning Community For{" "}
                <span className="text-indigo-500">SDG</span> Education
              </h1>
              <h2 className="sm:text-lg text-gray-600">
                Join a community of over 1,000 youth leaders and learners from
                all over the world. Expand your knowledge on sustainable
                development and learn from the best in the industry.
              </h2>
            </header>
            {/* Call to action button */}
            <button className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 active:ring-2 ring-indigo-600 ring-offset-2 text-white">
              Get Started →
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
