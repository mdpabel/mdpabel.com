import { EXPERIENCES } from '@/data/experiences';
import ComponentWrapper from './component-wrapper';

const Experience = () => {
  return (
    <ComponentWrapper>
      <div className='mb-8'>
        <h2 className='mb-4 font-bold text-white text-2xl'>
          Career Highlights
        </h2>
      </div>

      <div className='flex flex-wrap gap-4'>
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className='flex-1 bg-slate-800/50 p-4 border border-slate-700 rounded-lg min-w-64'>
            <div className='flex items-center gap-2 mb-3'>
              <exp.icon className='w-5 h-5 text-slate-400' />
              <h3 className='font-medium text-white text-sm'>{exp.company}</h3>
            </div>
            <p className='mb-2 text-slate-300 text-xs'>{exp.role}</p>
            <p className='text-slate-500 text-xs'>{exp.period}</p>
          </div>
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Experience;
