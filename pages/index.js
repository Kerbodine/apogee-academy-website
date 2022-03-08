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
      <section className="my-8 bg-gray-100 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 lg:gap-8">
          <div className="relative h-28 w-56">
            <Image
              src="/images/cyberport-logo.png"
              alt="Cyberport logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-28 w-56">
            <Image
              src="/images/SDG-goals.png"
              alt="SDG goals logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-28 w-56">
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
      <section className="mx-auto my-8 flex max-w-6xl flex-col-reverse gap-8 overflow-hidden p-8 md:flex-row md:items-center">
        <div className="w-full md:w-1/2 md:py-8">
          <header className="mb-4">
            <h2 className="mb-4 text-lg font-semibold text-gray-600 sm:text-xl">
              Resources created and curated by <br />
              <span className="text-2xl text-indigo-500 sm:text-3xl">
                Youth leaders & social entrepreneurs
              </span>
            </h2>
            <p className="text-gray-600">
              From up-and-coming SDG world leaders to educators to simply
              students like you - Apogee Academy is a place for everyone.
              Resources on our site are meticulously curated by ourselves and
              contributors alike; establishing a one-and-only digitalized
              educational experience centered around the SDGs.
            </p>
            <button className="mt-8 rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-100">
              Learn more →
            </button>
          </header>
        </div>
        <div className="flex h-80 justify-center md:relative md:flex-auto">
          <div className="left-0 h-full w-[512px] flex-none md:absolute md:max-w-none">
            <div className="relative h-full w-full">
              <div className="absolute top-0 left-0 h-56 w-72 overflow-hidden rounded-2xl border-2 border-gray-400 shadow-md">
                <div className="relative h-full w-full bg-white">
                  <Image
                    src="/images/speaker-1.jpg"
                    alt="Speaker 1"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-2 right-2 rounded-full bg-black/75 px-2 py-1 text-xs font-medium text-white">
                    Speaker Name
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 h-56 w-72 overflow-hidden rounded-2xl border-2 border-gray-400 shadow-md">
                <div className="relative h-full w-full bg-white">
                  <Image
                    src="/images/speaker-2.jpg"
                    alt="Speaker 2"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-2 left-2 rounded-full bg-black/75 px-2 py-1 text-xs font-medium text-white">
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
      <section className="mx-auto my-8 flex max-w-6xl flex-col gap-8 overflow-hidden p-8 md:flex-row md:items-center">
        <div className="flex justify-center md:relative md:h-64 md:flex-auto">
          <div className="right-0 grid w-full min-w-[448px] max-w-[560px] grid-cols-6 gap-2 md:absolute md:min-w-[512px] md:max-w-none">
            {goals.map((goal) => (
              <div
                key={goal.id}
                className="relative aspect-square h-full w-full overflow-hidden rounded-md"
              >
                <Image
                  src={goal.src}
                  alt={`Goal ${goal.id}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
            <div className="relative aspect-square h-full w-full">
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
            <h2 className="mb-4 text-lg font-semibold text-gray-600 sm:text-xl">
              Gain valuable insights into the <br />
              <span className="text-2xl text-indigo-500 sm:text-3xl">
                The 17 sustainable development goals
              </span>
            </h2>
            <p className="text-gray-600">
              Sustainable Development Goals are the key to our collective
              future. Through developing a fuller understanding of such and
              providing meaningful insights into each of them respectively, you
              could be the spark that drives the movement of change.
            </p>
          </header>
        </div>
      </section>
      <hr />
      <section className="mx-auto my-16 flex max-w-6xl p-8">
        <div className="w-full md:w-1/2">
          <header className="mb-4">
            <h2 className="mb-4 text-lg font-semibold text-gray-600 sm:text-xl">
              Learn & share with a community of <br />
              <span className="text-2xl text-indigo-500 sm:text-3xl">
                Like-minded students
              </span>
            </h2>
            <p className="text-gray-600">
              We, at Apogee Academy, fully believe that collaboration is the key
              to success; making the world a better place is no less than a team
              effort. By communicating with like-minded individuals that share
              the same ideals, working towards these goals will be made easier.
            </p>
          </header>
        </div>
        <div className="flex-auto"></div>
      </section>
      <Footer />
    </>
  );
}
