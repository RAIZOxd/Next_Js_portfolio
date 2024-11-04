// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-darkGray text-gray-400">
      <Head>
        <title>Frontend Developer - Alex Smith</title>
      </Head>
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-black text-lg	">
            A
          </div>
          <span className="ml-3 text-xl font-bold text-white">Alex</span>
          <span className="ml-3 text-xl  text-white">Smith</span>
        </div>
        <nav className="ml-auto text-gray-300">
          <ul className="flex space-x-16 font-light text-sm">

            <li
              className="hover:text-white"
            >
              <Link href="/">About Me</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/extra">Extra</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex items-center justify-center mt-16 px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-x-8">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
            <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-x-10 mt-8 md:mt-0 text-center md:text-left max-w-lg">
            <h2 className="text-lg text-gray-500">Frontend-developer</h2>
            <h1 className="text-5xl font-bold text-white mt-2">Alex Smith</h1>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
              convallis, risus non condimentum gravida, odio mauris ullamcorper
              felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna,
              a placerat sapien pretium eu.
            </p>
        </div>

        <div className="mt-72 flex space-x-4 justify-center md:justify-start">
          <button className="px-6 py-2 border-2 border-blue-500 text-gray-200 rounded-3xl hover:bg-blue-500 hover:text-white transition">
            Download CV
          </button>
          <button className="px-6 py-2 border-2 border-gray-400 text-gray-200 rounded-3xl hover:bg-gray-400 hover:text-gray-800 transition">
            Contact
          </button>
        </div>
      </main>
    </div>
  );
}
