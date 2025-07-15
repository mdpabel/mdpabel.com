import React from 'react';
import ComponentWrapper from '@/components/component-wrapper';
import { siteData } from '@/data/site-data';
import {
  Code,
  Database,
  Server,
  Palette,
  Shield,
  Award,
  CheckCircle,
  Star,
} from 'lucide-react';
import { Heading } from '@/components/ui';

const AboutMe = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: <Palette className='w-6 h-6' />,
      skills: siteData.skills.frontend,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend Technologies',
      icon: <Server className='w-6 h-6' />,
      skills: siteData.skills.backend,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Databases',
      icon: <Database className='w-6 h-6' />,
      skills: siteData.skills.databases,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Security & Tools',
      icon: <Shield className='w-6 h-6' />,
      skills: [...siteData.skills.security, ...siteData.skills.tools],
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <div className='text-white'>
      <ComponentWrapper>
        <div className='py-16'>
          {/* Hero Section */}
          <div className='space-y-6 mb-16 text-center'>
            <h1 className='mb-4 font-bold text-4xl md:text-5xl'>
              About <Heading as='span'>MD Pabel</Heading>
            </h1>
            <p className='mx-auto max-w-2xl text-gray-300 text-xl'>
              {siteData.personal.title}
            </p>
            <div className='flex justify-center items-center gap-8 text-gray-400 text-sm'>
              <div className='flex items-center gap-2'>
                <Award className='w-4 h-4 text-purple-300' />
                <span>{siteData.stats.experience} Years Experience</span>
              </div>
              <div className='flex items-center gap-2'>
                <Star className='w-4 h-4 text-purple-300' />
                <span>{siteData.stats.clientsSatisfied} Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className='mb-16'>
            <h2 className='mb-8 font-bold text-3xl text-center'>
              Technical Expertise
            </h2>
            <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
              {skillCategories.map((category, index) => (
                <div key={index} className='bg-slate-800 p-6 rounded-lg'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className='font-semibold text-xl'>{category.title}</h3>
                  </div>
                  <div className='gap-3 grid grid-cols-2'>
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className='flex items-center gap-2 bg-slate-700 p-2 rounded'>
                        <CheckCircle className='flex-shrink-0 w-4 h-4 text-purple-300' />
                        <span className='text-gray-300 text-sm'>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Overview */}
          <div className='mb-16'>
            <h2 className='mb-8 font-bold text-3xl text-center'>What I Do</h2>
            <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              {siteData.services.map((service, index) => (
                <div
                  key={index}
                  className='bg-slate-800 hover:bg-slate-700 p-6 rounded-lg transition-colors'>
                  <div className='mb-4 text-purple-300'>{service.icon}</div>
                  <h3 className='mb-3 font-semibold text-lg'>
                    {service.title}
                  </h3>
                  <p className='mb-4 text-gray-400 text-sm'>
                    {service.description}
                  </p>
                  <ul className='space-y-1'>
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center gap-2 text-gray-500 text-xs'>
                        <CheckCircle className='w-3 h-3 text-purple-300' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className='mb-16'>
            <h2 className='mb-8 font-bold text-3xl text-center'>
              By the Numbers
            </h2>
            <div className='gap-6 grid grid-cols-2 md:grid-cols-4'>
              <div className='bg-slate-800 p-6 rounded-lg text-center'>
                <div className='mb-2 font-bold text-purple-300 text-3xl'>
                  {siteData.stats.completedProjects}
                </div>
                <div className='text-gray-400 text-sm'>Projects Completed</div>
              </div>
              <div className='bg-slate-800 p-6 rounded-lg text-center'>
                <div className='mb-2 font-bold text-purple-300 text-3xl'>
                  {siteData.stats.hackedWebsites}
                </div>
                <div className='text-gray-400 text-sm'>Websites Secured</div>
              </div>
              <div className='bg-slate-800 p-6 rounded-lg text-center'>
                <div className='mb-2 font-bold text-purple-300 text-3xl'>
                  {siteData.stats.dsaProblems}
                </div>
                <div className='text-gray-400 text-sm'>DSA Problems Solved</div>
              </div>
              <div className='bg-slate-800 p-6 rounded-lg text-center'>
                <div className='mb-2 font-bold text-purple-300 text-3xl'>
                  {siteData.stats.recoveredDomains}
                </div>
                <div className='text-gray-400 text-sm'>Domains Recovered</div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className='p-8 border border-purple-500/30 rounded-lg text-center'>
            <h2 className='mb-4 font-bold text-2xl'>
              My Development Philosophy
            </h2>
            <p className='mx-auto mb-6 max-w-3xl text-gray-300'>
              <span className='font-semibold text-purple-300'>
                {siteData.personal.tagline}
              </span>{' '}
              - This philosophy drives every line of code I write. Whether I'm
              working on a simple website or a complex web application, I focus
              on quality, security, and performance.
            </p>
            <div className='flex sm:flex-row flex-col justify-center gap-4'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-purple-500 hover:from-purple-600 to-purple-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white transition-all duration-300'>
                Start a Project
              </a>
              <a
                href='/portfolio'
                className='hover:bg-purple-500/10 px-6 py-3 border border-purple-500 rounded-lg text-purple-300 transition-all duration-300'>
                See My Work
              </a>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default AboutMe;
