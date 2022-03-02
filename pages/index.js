import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Devices from "../images/devices.svg";

export default function Home() {
  const goals = [
    {
      id: 1,
      src: "/images/goals/goal-1.png",
    },
    {
      id: 2,
      src: "/images/goals/goal-2.png",
    },
    {
      id: 3,
      src: "/images/goals/goal-3.png",
    },
    {
      id: 4,
      src: "/images/goals/goal-4.png",
    },
    {
      id: 5,
      src: "/images/goals/goal-5.png",
    },
    {
      id: 6,
      src: "/images/goals/goal-6.png",
    },
    {
      id: 7,
      src: "/images/goals/goal-7.png",
    },
    {
      id: 8,
      src: "/images/goals/goal-8.png",
    },
    {
      id: 9,
      src: "/images/goals/goal-9.png",
    },
    {
      id: 10,
      src: "/images/goals/goal-10.png",
    },
    {
      id: 11,
      src: "/images/goals/goal-11.png",
    },
    {
      id: 12,
      src: "/images/goals/goal-12.png",
    },
    {
      id: 13,
      src: "/images/goals/goal-13.png",
    },
    {
      id: 14,
      src: "/images/goals/goal-14.png",
    },
    {
      id: 15,
      src: "/images/goals/goal-15.png",
    },
    {
      id: 16,
      src: "/images/goals/goal-16.png",
    },
    {
      id: 17,
      src: "/images/goals/goal-17.png",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto p-8 my-16 overflow-hidden">
        <div className="flex flex-col-reverse sm:flex-row gap-8">
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
                <span className="underline decoration-indigo-500 decoration-4">
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
          <div className="flex-auto grid place-items-center">
            <Devices className="w-full max-w-[420px] mx-auto sm:min-w-[420px] sm:max-w-0" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8 my-8">
        <div className="flex flex-wrap gap-4 lg:gap-8 justify-center max-w-6xl mx-auto">
          <div className="relative w-56 h-28">
            <Image
              src="/images/cyberport-logo.png"
              alt="Cyberport logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-56 h-28">
            <Image
              src="/images/SDG-goals.png"
              alt="SDG goals logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-56 h-28">
            <Image
              src="/images/unitar-logo.png"
              alt="UNITAR logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      {/* Youth Social Entrepreneurs */}
      <section className="mx-auto max-w-6xl p-8 flex my-8 flex-col-reverse md:flex-row gap-8 md:items-center overflow-hidden">
        <div className="w-full md:w-1/2 md:py-8">
          <header className="mb-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-600">
              Resources created and curated by <br />
              <span className="text-indigo-500 text-2xl sm:text-3xl">
                Youth leaders & social entrepreneurs
              </span>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sequi autem distinctio eaque repudiandae voluptate alias porro
              provident officiis ratione.
            </p>
            <button className="mt-8 text-sm rounded-full bg-indigo-50 text-indigo-700 font-semibold px-3 py-1.5 hover:bg-indigo-100">
              Learn more →
            </button>
          </header>
        </div>
        <div className="flex justify-center md:relative md:flex-auto h-80">
          <div className="w-[512px] flex-none h-full md:max-w-none md:absolute left-0">
            <div className="relative w-full h-full">
              <div className="absolute w-72 h-56 top-0 left-0 rounded-2xl border-2 border-gray-400 overflow-hidden shadow-md">
                <div className="relative w-full h-full bg-white">
                  <Image
                    src="/images/speaker-1.jpg"
                    alt="Speaker 1"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute px-2 py-1 top-2 right-2 text-white font-medium bg-black/75 text-xs rounded-full">
                    Speaker Name
                  </div>
                </div>
              </div>
              <div className="absolute w-72 h-56 bottom-0 right-0 rounded-2xl border-2 border-gray-400 overflow-hidden shadow-md">
                <div className="relative w-full h-full bg-white">
                  <Image
                    src="/images/speaker-2.jpg"
                    alt="Speaker 2"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute px-2 py-1 bottom-2 left-2 text-white font-medium bg-black/75 text-xs rounded-full">
                    Speaker Name
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* SDG Goals */}
      <section className="mx-auto max-w-6xl p-8 flex my-8 flex-col md:flex-row gap-8 overflow-hidden md:items-center">
        <div className="flex justify-center md:relative md:flex-auto md:h-64">
          <div className="w-full max-w-[560px] md:max-w-none md:absolute right-0 grid grid-cols-6 gap-2 min-w-[448px] md:min-w-[512px]">
            {goals.map((goal) => (
              <div
                key={goal.id}
                className="relative aspect-square w-full h-full rounded-md overflow-hidden"
              >
                <Image
                  src={goal.src}
                  alt={`Goal ${goal.id}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
            <div className="relative aspect-square w-full h-full">
              <Image
                src="/images/goals/sdg-wheel.png"
                alt="SDG Wheel"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:py-8">
          <header className="mb-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-600">
              Gain valuable insights into the <br />
              <span className="text-indigo-500 text-2xl sm:text-3xl">
                The 17 sustainable development goals
              </span>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sequi autem distinctio eaque repudiandae voluptate alias porro
              provident officiis ratione.
            </p>
          </header>
        </div>
      </section>
      <hr />
      <section className="mx-auto max-w-6xl p-8 flex my-16">
        <div className="w-full md:w-1/2">
          <header className="mb-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-600">
              Learn & share with a community of <br />
              <span className="text-indigo-500 text-2xl sm:text-3xl">
                Like minded students
              </span>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sequi autem distinctio eaque repudiandae voluptate alias porro
              provident officiis ratione.
            </p>
          </header>
        </div>
        <div className="flex-auto"></div>
      </section>
      <Footer />
    </>
  );
}
