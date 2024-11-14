import Skills from "../(components)/Resume";

const ResumePage = () => {
  return (
    <div className=" text-white p-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Resume Header Section */}
        <div className="h-48 flex justify-between border-t border-b border-gray-500 items-center mb-20">
          <h1 className="text-5xl font-bold">Resume</h1>
          <span className="text-gray-400 text-lg">8 Years of Experience</span>
        </div>
        
        {/* Education and Experience Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Education
              <span className="block h-1 w-10 mt-1"></span>
            </h2>

            {/* Education Item 1 */}
            <div className="relative pb-10">
            <span className="px-2 py-1 rounded-full border border-gray-600">2009</span>
              <div className="ml-12 pl-4 border-l border-gray-700">
                <p className="text-sm text-gray-400">University of Studies</p>
                <h3 className="font-semibold text-lg">UI Design</h3>
                <p className="text-gray-400 text-sm">
                  Duis posuere, quam non imperdiet egestas, eros enim mattis
                  mauris, in posuere lacus arcu quis felis. Etiam interdum erat
                  non enim venenatis fermentum.
                </p>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="relative pb-10">
            <span className="px-2 py-1 rounded-full border border-gray-600">2008</span>
       
              <div className="ml-12 pl-4 border-l border-gray-700">
                <p className="text-sm text-gray-400">University of Studies</p>
                <h3 className="font-semibold text-lg">Graphic Design</h3>
                <p className="text-gray-400 text-sm">
                  Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                  iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                  mollis risus, eu pulvinar dolor.
                </p>
              </div>
            </div>

            {/* Education Item 3 */}
            <div className="relative pb-10">
            <span className="px-2 py-1 rounded-full border border-gray-600">2007</span>
      
              <div className="ml-12 pl-4 border-l border-gray-700">
                <p className="text-sm text-gray-400">University of Studies</p>
                <h3 className="font-semibold text-lg">Frontend Development</h3>
                <p className="text-gray-400 text-sm">
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                  dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                  sem in, lobortis ante.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Experience
              <span className="block h-1 w-10 mt-1"></span>
            </h2>

            {/* Experience Item 1 */}
            <div className="relative pb-10">
            <span className="px-2 py-1 rounded-full border border-gray-600">2016 - Current</span>
        
              <div className="ml-12 pl-4 border-l border-gray-700">
                <p className="text-sm text-gray-400">Locost Accessories</p>
                <h3 className="font-semibold text-lg">Senior UI/UX Designer</h3>
                <p className="text-gray-400 text-sm">
                  Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                  vitae nulla tristique, ornare felis id, congue libero. Nam
                  volutpat euismod quam.
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative pb-10">
            <span className="px-2 py-1 rounded-full border border-gray-600">2013 - 2016</span>
      
              <div className="ml-12 pl-4 border-l border-gray-700">
                <p className="text-sm text-gray-400">Locost Accessories</p>
                <h3 className="font-semibold text-lg">Senior UI/UX Designer</h3>
                <p className="text-gray-400 text-sm">
                  Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                  vitae nulla tristique, ornare felis id, congue libero. Nam
                  volutpat euismod quam.
                </p>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="relative pb-10">
            <span className="px-2 py-1 rounded-full border border-gray-600">2011 - 2013</span>
        
              <div className="ml-12 pl-4 border-l border-gray-700">
                <p className="text-sm text-gray-400">Sagebrush</p>
                <h3 className="font-semibold text-lg">Junior UI/UX Designer</h3>
                <p className="text-gray-400 text-sm">
                  Duis mollis nunc quis quam viverra venenatis. Nulla nulla
                  arcu, congue vitae nunc ac, sodales ultricies diam. Nullam
                  justo leo, tincidunt sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div><Skills/></div>
      </div>
    </div>
  );
};

export default ResumePage;
