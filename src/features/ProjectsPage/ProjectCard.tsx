import React from 'react';
import Image from 'next/image';

export function ProjectCard({ project }: { project: any }) {
  return (
    <div
      className="flex flex-col justify-center items-center bg-primary-default/10 rounded-xl
      group  hover:bg-primary-default trnsition-all duration-300 
      md:flex-row xl:flex-col"
    >
      <figure className="w-full h-auto md:flex-1">
        <Image
          className="rounded-t-xl w-full max-w-full h-auto min-h-[320px] xl:max-w-[350px]"
          src={project.image}
          alt={project.imageAlt}
          priority
          width={350}
          height={320}
        />
      </figure>

      <div className="flex flex-col gap-6 justify-center px-3 py-8  md:flex-1 md:items-center hover:group-last:text-white">
        <h3 className="text-primary-default group-hover:text-white font-semibold uppercase text-lg text-center tracking-[5px]">
          {project.title}
        </h3>
        <p className="text-black group-hover:text-white text-center max-w-[250px]">
          {project.description}
        </p>
      </div>
    </div>
  );
}
