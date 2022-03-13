import Image from "next/image";
import React from "react";
import { goals } from "../../config/goals";

export default function Goals() {
  return (
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
            Sustainable Development Goals are the key to our collective future.
            Through developing a fuller understanding of such and providing
            meaningful insights into each of them respectively, you could be the
            spark that drives the movement of change.
          </p>
        </header>
      </div>
    </section>
  );
}
