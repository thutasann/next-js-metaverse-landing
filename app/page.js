import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='overflow-hidden bg-primary-black'>
    <Navbar />
    <Hero/>
    {/* About / Explore */}
    <div className='relative'>
      <About />
      <div className='z-0 gradient-03'/>
      <Explore />
    </div>

    {/* Get Started / What News */}
    <div className='relative'>
      <GetStarted />
      <div className='z-0 gradient-04'/>
      <WhatsNew />
    </div>

    <World />

    {/* Insights */}
    <div className='relative'>
      <Insights />
      <div className='z-0 gradient-04'/>
      <Feedback />
    </div>
    
    <Footer />
  </div>
);

export default Page;
