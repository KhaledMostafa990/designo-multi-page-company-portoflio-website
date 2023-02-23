import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ProjectHero({ item }: { item: any }) {
  // remove spaces from  heading to be used as link
  const link = item.heading.replace(/\s+/g, "-").toLowerCase();

  return (
    <>
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] z-10 translate-y-[-50%]
        h-full w-full flex flex-col items-center justify-center rounded-2xl
        bg-black/70 hover:bg-primary-default/70"
      >
        <h2 className="text-2xl text-white uppercase xl:text-4xl">{item.heading}</h2>
        <Link href={`/projects/${link}`}>
          <button className="flex gap-3 justify-center items-center text-white uppercase tracking-widest text-center text-sm">View Project
            <i>
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd" />
              </svg>
            </i>
          </button>
        </Link>
      </div>

      <picture className="">
        <source media="(min-width: 1280px)" srcSet={item.imageDesk} />
        <source media="(min-width: 768px)" srcSet={item.imageTab} />
        <Image
          className={`rounded-2xl w-full h-auto max-w-full 
          xl:min-h-auto xl:max-h-[640px] xl:w-[541px] xl:min-w-[541px] xl:max-w-[541px]`}
          src={item.imageMob}
          alt={item.imageAlt}
          height={308}
          width={541}
          loading="lazy"
        />
      </picture>
    </>
  );
}
