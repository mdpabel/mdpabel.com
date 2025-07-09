import ComponentWrapper from './component-wrapper';

function Hero() {
  return (
    <ComponentWrapper>
      <div
        className='px-5 sm:px-0 py-6 sm:py-16 pb-14 text-left sm:text-center transition-opacity duration-300 container'
        id='hero-text'>
        <h1 className='bg-clip-text bg-linear-to-b from-amber-50 to-purple-500 mb-2 sm:mb-4 font-bold text-transparent text-2xl sm:text-5xl sm:leading-tight'>
          Build. Secure. Scale.
        </h1>
        <p className='hidden sm:block px-4 text-gray-400 text-lg'>
          Modern web development with a strong focus on security. From building
          custom applications to detecting and removing malware, every project
          is designed to be clean, stable, and protected from real-world
          threats.
        </p>
        <p className='sm:hidden block px-0 text-gray-400 text-md'>
          Custom-built websites with strong security, clean code, and real-world
          protection.
        </p>
      </div>
    </ComponentWrapper>
  );
}

export default Hero;
