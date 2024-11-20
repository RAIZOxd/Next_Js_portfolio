'use client'
import { useEffect, useRef } from 'react';
import Skills from "../(components)/Skills";
import { animateFadeInUp } from '../(components)/gsapAnimations';

const ResumePage = () => {
  // Refs for the sections to be animated
  const sectionRef = useRef(null);
  const fadeInUpElements = useRef([]); // Array to hold references to elements

  useEffect(() => {
    if (fadeInUpElements.current.length > 0 && sectionRef.current) {
      animateFadeInUp(fadeInUpElements.current, sectionRef.current); // Call the animation function
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !fadeInUpElements.current.includes(el)) {
      fadeInUpElements.current.push(el); // Add element to refs array
    }
  };
  return (
    <div className=" min-h-screen text-white" ref={sectionRef}>
      {/* Top Resume Header Section */}
      <div className="h-48 flex items-center justify-between px-14 border-t border-b border-gray-500">
        <h1 className="text-4xl font-bold">Resume</h1>
        <span className="text-gray-400 text-sm sm:text-lg px-4">8 Years of Experience</span>
      </div>

      {/* Education and Experience Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-8 px-4 sm:px-8" ref={addToRefs}>
        {/* Education Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Education
            <div className="relative mb-8">
      <div className="w-10 h-1 bg-blue-500 absolute top-0 left-0"></div> {/* Blue line */}
      <div className="w-40 h-1 bg-gray-600 mt-1"></div> {/* Gray line */}
    </div>
          </h2>

          {/* Education Item 1 */}
          <div className="relative pb-8">
            <span className="px-2 py-1 rounded-full border border-gray-600 text-sm sm:text-base">
              2009
            </span>
            <div className="ml-8 sm:ml-12 pl-4 border-l border-gray-700">
              <p className="text-xs sm:text-sm text-gray-400">
                University of Studies
              </p>
              <h3 className="font-semibold text-base sm:text-lg">UI Design</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Duis posuere, quam non imperdiet egestas, eros enim mattis
                mauris, in posuere lacus arcu quis felis. Etiam interdum erat
                non enim venenatis fermentum.
              </p>
            </div>
          </div>

          {/* Education Item 2 */}
          <div className="relative pb-8">
            <span className="px-2 py-1 rounded-full border border-gray-600 text-sm sm:text-base">
              2008
            </span>
            <div className="ml-8 sm:ml-12 pl-4 border-l border-gray-700">
              <p className="text-xs sm:text-sm text-gray-400">
                University of Studies
              </p>
              <h3 className="font-semibold text-base sm:text-lg">
                Graphic Design
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                mollis risus, eu pulvinar dolor.
              </p>
            </div>
          </div>

          {/* Education Item 3 */}
          <div className="relative pb-8">
            <span className="px-2 py-1 rounded-full border border-gray-600 text-sm sm:text-base">
              2007
            </span>
            <div className="ml-8 sm:ml-12 pl-4 border-l border-gray-700">
              <p className="text-xs sm:text-sm text-gray-400">
                University of Studies
              </p>
              <h3 className="font-semibold text-base sm:text-lg">
                Frontend Development
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
                aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                lobortis ante.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Experience
            <div className="relative mb-8">
      <div className="w-10 h-1 bg-blue-500 absolute top-0 left-0"></div> {/* Blue line */}
      <div className="w-40 h-1 bg-gray-600 mt-1"></div> {/* Gray line */}
    </div>
          </h2>

          {/* Experience Item 1 */}
          <div className="relative pb-8">
            <span className="px-2 py-1 rounded-full border border-gray-600 text-sm sm:text-base">
              2016 - Current
            </span>
            <div className="ml-8 sm:ml-12 pl-4 border-l border-gray-700 py-2">
              <p className="text-xs sm:text-sm text-gray-400">
                Locost Accessories
              </p>
              <h3 className="font-semibold text-base sm:text-lg">
                Senior UI/UX Designer
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                vitae nulla tristique, ornare felis id, congue libero. Nam
                volutpat euismod quam.
              </p>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative pb-8">
            <span className="px-2 py-1 rounded-full border border-gray-600 text-sm sm:text-base">
              2013 - 2016
            </span>
            <div className="ml-8 sm:ml-12 pl-4 border-l border-gray-700 py-2">
              <p className="text-xs sm:text-sm text-gray-400">
                Locost Accessories
              </p>
              <h3 className="font-semibold text-base sm:text-lg">
                Senior UI/UX Designer
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                vitae nulla tristique, ornare felis id, congue libero. Nam
                volutpat euismod quam.
              </p>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="relative pb-8">
            <span className="px-2 py-1 rounded-full border border-gray-600 text-sm sm:text-base">
              2011 - 2013
            </span>
            <div className="ml-8 sm:ml-12 pl-4 border-l border-gray-700 py-2">
              <p className="text-xs sm:text-sm text-gray-400">Sagebrush</p>
              <h3 className="font-semibold text-base sm:text-lg">
                Junior UI/UX Designer
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu,
                congue vitae nunc ac, sodales ultricies diam. Nullam justo leo,
                tincidunt sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={sectionRef}>
        <Skills />
      </div>
    </div>
  );
};

export default ResumePage;
