import CardProject from '@/components/cards/CardProject';
import { projectsSeeds } from '@/seeds/projects.seeds';

export default function () {
  return (
    <div className='pt-3 pb-20'>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-10'>
        {projectsSeeds.map((project) => (
          <CardProject key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
