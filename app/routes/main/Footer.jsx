import Resources from '../components/footer/Resources';
import Supports from '../components/footer/Supports';
import Legal from '../components/footer/Legal';

const Footer = () => {

  return (
    <footer className='bg-[#111827] text-[#BDC8DE] py-8 px-2 sm:px-12'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Footer Layout */}
        <div className='flex flex-wrap justify-between gap-8'>
          {/* Resources Column */}
          <Resources/>

          {/* Support Column */}
          <Supports/>

          {/* Legal Column */}
          <Legal/>
        </div>

        {/* Divider Line */}
        <div className='my-8 border-t border-gray-600'></div>

        {/* All Rights Reserved Text */}
        <p className='text-center text-sm'>
          &copy; {new Date().getFullYear()} The Lost Manuscripts of Mosul. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
