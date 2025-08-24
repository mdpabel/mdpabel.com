import { AlertTriangle, CheckCircle, AlertCircle, Code } from 'lucide-react';
import ComponentWrapper from './component-wrapper';

const Services = () => {
  return (
    <ComponentWrapper className='mt-10'>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 mb-16'>
        {/* Malware Removal - Full width on md */}
        <div className='md:col-span-2 bg-red-900/20 p-8 border border-red-700 rounded-lg'>
          <div className='flex items-center gap-3 mb-4'>
            <AlertTriangle className='w-6 h-6 text-red-400' />
            <h2 className='font-semibold text-red-400 text-xl'>
              Malware Removal From Hacked Websites
            </h2>
          </div>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
            <div>
              <h3 className='mb-3 font-medium text-white'>
                Common Malware Symptoms:
              </h3>
              <ul className='space-y-2 text-slate-300'>
                <li className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-red-400' />
                  <span>Google "This site may be hacked" warning</span>
                </li>
                <li className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-red-400' />
                  <span>Unexpected redirects to spam/adult sites</span>
                </li>
                <li className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-red-400' />
                  <span>Pop-ups and unwanted advertisements</span>
                </li>
                <li className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-red-400' />
                  <span>Slow website performance</span>
                </li>
                <li className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-red-400' />
                  <span>Unknown admin users or files</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='mb-3 font-medium text-white'>
                Immediate Actions Needed:
              </h3>
              <ul className='space-y-2 text-slate-300'>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span>Don't panic - we can fix this quickly</span>
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span>Change all passwords immediately</span>
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span>Contact us for professional cleanup</span>
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span>Avoid DIY fixes that might cause damage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fix Website Errors */}
        <div className='bg-yellow-900/20 p-8 border border-yellow-700 rounded-lg'>
          <div className='flex items-center gap-3 mb-4'>
            <AlertCircle className='w-6 h-6 text-yellow-400' />
            <h2 className='font-semibold text-yellow-400 text-xl'>
              Fix Website Errors
            </h2>
          </div>
          <div className='gap-6 grid grid-cols-1'>
            <div>
              <h3 className='mb-3 font-medium text-white'>
                Common Error Symptoms:
              </h3>
              <ul className='space-y-2 text-slate-300'>
                <li className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-yellow-400' />
                  <span>404 Not Found pages</span>
                </li>
                <li className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-yellow-400' />
                  <span>Broken links and images</span>
                </li>
                <li className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-yellow-400' />
                  <span>Database connection failures</span>
                </li>
                <li className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-yellow-400' />
                  <span>White screen of death</span>
                </li>
                <li className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-yellow-400' />
                  <span>Plugin or theme conflicts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Website Development */}
        <div className='bg-green-900/20 p-8 border border-green-700 rounded-lg'>
          <div className='flex items-center gap-3 mb-4'>
            <Code className='w-6 h-6 text-green-400' />
            <h2 className='font-semibold text-green-400 text-xl'>
              Website Development
            </h2>
          </div>
          <div className='gap-6 grid grid-cols-1'>
            <div>
              <h3 className='mb-3 font-medium text-white'>
                Key Features We Offer:
              </h3>
              <ul className='space-y-2 text-slate-300'>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span>Custom responsive design</span>
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span>Secure coding practices</span>
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span>SEO optimization</span>
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span>Fast loading speeds</span>
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span>E-commerce integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Services;
