
// ContactSection Component
const ContactSection = () => {
  return (
    <div className="min-h-screen p-10 text-white">
      {/* Contact Header */}
      <div className="h-48 flex items-center justify-between px-14 border-t border-b border-gray-700">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <a href="#get-in-touch" className="text-gray-400 text-lg">
          Get in Touch
        </a>
      </div>

      {/* Google Map Embed */}
      <div className="mt-8 px-14 py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0860147340326!2d-122.39968928468182!3d37.774929979759596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3c661f5ebf%3A0xe4b0eb3f61df9d87!2sTownsend%20St%2C%20San%20Francisco%2C%20CA%2094113%2C%20USA!5e0!3m2!1sen!2sus!4v1699914289372!5m2!1sen!2sus"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

// ContactPage Component
const ContactPage = () => {
  return (
    <div className=" text-white py-16 px-8">
      {/* Contact Section */}
      <ContactSection />

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
        {/* Contact Info Section */}
        <div className="space-y-8">
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h2a2 2 0 012 2v0a2 2 0 01-2 2H3v5h5v-2a2 2 0 012-2v0a2 2 0 012 2v2h5V7a2 2 0 012-2h2"
              ></path>
            </svg>
            <div>
              <p className="font-semibold">415-832-2000</p>
              <p className="text-gray-400">
                Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                dui.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 00-4 19.5c.6.1 1.1-.4 1.1-.9v-1.5c-4 0-4.8-2-5-2-1-.8-.1-1.6.1-1.7 1.4-.3 3.6 1 3.6 1.5 1 .8 2.7 0 4.3-.3s3-.5 4-1c.8-.7 1.6-2 .9-2.6-.6-.5-2.5.5-4.6 1.1-1.6.5-2.8.6-3.6-.1-1.3-1.3-2-3.6-2-5.8 0-4.5 3-8 7-8s7 3.5 7 8c0 2.2-.8 4.5-2 5.8-.8.7-2 1-3.6.7-.5-.1-2-.5-3.3-.9-.8-.2-1.6-.3-2.5-.3-3.3 0-5.4 1.8-6.5 3.1-.4.4-.6.9-.6 1.4v.8c0 .6.5 1.1 1.1 1.1H12"
              ></path>
            </svg>
            <div>
              <p className="font-semibold">San Francisco</p>
              <p className="text-gray-400">
                Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                dui.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12l-4-4m0 0l-4 4m4-4v12m0-12l-4-4m0 0H4a2 2 0 00-2 2v8a2 2 0 002 2h4m0 0l4-4m0 0l4 4"
              ></path>
            </svg>
            <div>
              <p className="font-semibold">hello@example.com</p>
              <p className="text-gray-400">
                Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                dui.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">
            How Can I Help You?
            <span className="block h-1 w-12 bg-blue-500 mt-2"></span>
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-md"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-md col-span-2"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-md h-32"
            ></textarea>
            <div className="flex items-center space-x-4">
              {/* Placeholder for reCAPTCHA */}
              <div className="w-32 h-16 bg-gray-700 rounded-md flex items-center justify-center text-gray-400">
                reCAPTCHA
              </div>
            </div>
            <button className="px-6 py-2 border-2 border-blue-500 text-gray-200 rounded-3xl hover:bg-blue-500 hover:text-white transition">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
