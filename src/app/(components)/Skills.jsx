'use client';
import { useState } from 'react';
import Modal from 'react-modal';

const Skills = () => {
  return (
    <div className="min-h-screen px-10 py-6 text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Certificates Section */}
        <section>
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block mb-6">
            Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <CertificateCard
              imageSrc="path-to-less-logo.jpg"
              title="Psychology of International Design"
            />
            <CertificateCard
              imageSrc="path-to-jquery-logo.jpg"
              title="Psychology of International Design"
            />
          </div>
        </section>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Design Skills */}
          <section>
            <h2 className="text-2xl font-bold border-b-2 border-blue-500 inline-block mb-6">
              Design Skills
            </h2>
            <SkillBar skill="UI/UX Design" level="95%" />
            <SkillBar skill="Print Design" level="75%" />
            <SkillBar skill="Graphic Design" level="85%" />
            <SkillBar skill="Logo Design" level="90%" />
          </section>

          {/* Coding Skills */}
          <section>
            <h2 className="text-2xl font-bold border-b-2 border-blue-500 inline-block mb-6">
              Coding Skills
            </h2>
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

// CertificateCard Component with Hover Effect
const CertificateCard = ({ imageSrc, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Clickable Image */}
      <div>
        <img
          src={imageSrc}
          alt={title}
          className="w-16 h-16 object-cover rounded-lg cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">Membership ID: XXXX</p>
        <p className="text-sm text-gray-500">19 April 2018</p>
      </div>

      {/* Modal for Image Popup */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        ariaHideApp={false}
      >
        <div className="relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-auto h-auto max-w-full max-h-full rounded-lg"
          />
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
          >
            ✕
          </button>
        </div>
      </Modal>
    </div>
  );
};

// SkillBar Component
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
