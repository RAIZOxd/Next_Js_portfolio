// components/Skills.js


const Skills = () => {
  return (
    <div className="min-h-screen p-10 text-white">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Certificates Section */}
        <section>
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block mb-6">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <CertificateCard icon="{less}" title="Psychology of Internation Design" />
            <CertificateCard icon="jQuery" title="Psychology of Internation Design" />
          </div>
        </section>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Design Skills */}
          <section>
            <h2 className="text-2xl font-bold border-b-2 border-blue-500 inline-block mb-6">Design Skills</h2>
            <SkillBar skill="UI/UX Design" level="95%" />
            <SkillBar skill="Print Design" level="75%" />
            <SkillBar skill="Graphic Design" level="85%" />
            <SkillBar skill="Logo Design" level="90%" />
          </section>

          {/* Coding Skills */}
          <section>
            <h2 className="text-2xl font-bold border-b-2 border-blue-500 inline-block mb-6">Coding Skills</h2>
            <SkillBar skill="HTML / CSS" level="100%" />
            <SkillBar skill="PHP" level="90%" />
            <SkillBar skill="JavaScript" level="90%" />
            <SkillBar skill="Smarty / Twig" level="85%" />
          </section>
        </div>
      </div>
    </div>
  );
};



// CertificateCard Component to create a card similar to the image layout
const CertificateCard = ({ icon, title }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4">
      <div className="text-5xl text-gray-400">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">Membership ID: XXXX</p>
        <p className="text-sm text-gray-500">19 April 2018</p>
      </div>
    </div>
  );
};



// SkillBar Component to represent each skill with a progress bar
const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-sm">
        <span>{skill}</span>
        <span>{level}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
