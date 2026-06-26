import { profile } from '../assets';
import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-black-100" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-black-100">Hadi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Building end-to-end AI-powered apps: <br className="sm:block hidden" />
            React frontends, Python backends, <br className="sm:block hidden" />
            LLM integrations and cloud deployments.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="absolute flex xs:bottom-10 bottom-10 w-full sm:justify-end justify-center items-center sm:pr-5">
        <img
          src={profile}
          alt="PROFILE"
          className="lg:w-[22rem] lg:wh-[30rem] sm:w-[16rem] sm:h-[22rem] w-[9rem] h-[9rem] object-cover rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
