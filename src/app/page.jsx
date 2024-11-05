// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/profile_img.png";

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
          </ul>
        </nav>
      </header>
      <main className="flex items-center justify-center mt-16 px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-x-8">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
            <Image
              src={img1}
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
      <main className="flex flex-col items-center mt-16 px-8">
       {/* "What I Do" Section */}
       <section className="mt-16 max-w-6xl text-left">
          <h2 className="text-2xl font-bold text-white mb-4">What I Do</h2>
          <div className="relative mb-8">
            <div className="w-10 h-1 bg-blue-500 absolute top-0 left-0"></div> {/* Blue line */}
            <div className="w-28 h-1 bg-gray-600 mt-1"></div> {/* Gray line */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-blue-500">✍️</div> {/* Icon Placeholder */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Copywrite</h3>
                <p className="text-gray-400">
                  Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Vivamus blandit.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl text-blue-500">🛒</div> {/* Icon Placeholder */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Ecommerce</h3>
                <p className="text-gray-400">
                  Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Vivamus blandit.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl text-blue-500">💻</div> {/* Icon Placeholder */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Web Design</h3>
                <p className="text-gray-400">
                  Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Vivamus blandit.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl text-blue-500">📣</div> {/* Icon Placeholder */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Marketing</h3>
                <p className="text-gray-400">
                  Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Vivamus blandit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-16 max-w-6xl text-left">
          <h2 className="text-2xl font-bold text-white mb-4">Testimonials</h2>
          <div className="relative mb-8">
            <div className="w-10 h-1 bg-blue-500 absolute top-0 left-0"></div> {/* Blue line */}
            <div className="w-36 h-1 bg-gray-600 mt-1"></div> {/* Gray line */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg flex items-start">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 mr-4">
                <Image src="/path-to-image" alt="Testimonial 1" width={64} height={64} />
              </div>
              <div>
                <p className="text-gray-400 mb-4">
                  Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.
                </p>
                <h3 className="text-lg font-semibold text-white">Billy Adams</h3>
                <p className="text-gray-500">Rolling Thunder</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg flex items-start">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 mr-4">
                <Image src="/path-to-image" alt="Testimonial 2" width={64} height={64} />
              </div>
              <div>
                <p className="text-gray-400 mb-4">
                  Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.
                </p>
                <h3 className="text-lg font-semibold text-white">Gary Johnson</h3>
                <p className="text-gray-500">Locost Accessories</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
