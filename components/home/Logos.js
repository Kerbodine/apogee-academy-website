import Image from "next/image";
import React from "react";

export default function Logos() {
  return (
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
  );
}
