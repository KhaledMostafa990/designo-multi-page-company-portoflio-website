import React from 'react';
import { ProjectHero } from '@/features/ProjectsPage/ProjectHero';

export interface ProjectsDataProps {
  id: string;
  heading: string;
  introDescription: string;
  imageMob: any;
  imageTab: any;
  imageDesk: any;
  imageDeskSmall?: any;
  projects: {
    title: string;
    description: string;
    image: any;
    imageAlt: string;
  }[];
}

export default function Projects({ data }: { data: ProjectsDataProps[] }) {
  return (
    <>
      <div className={`relative h-auto`}>
        <ProjectHero item={data[0]} />
      </div>

      <div className={`flex flex-col gap-5`}>
        {data.slice(1).map((item: any) => (
          <div key={item.id} className={`relative h-auto`}>
            <ProjectHero item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
