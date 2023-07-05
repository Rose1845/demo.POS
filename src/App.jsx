import "./App.css";
import Access from "./components/Access";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <div>
        {/* hero */}
        <section className="px-2 lg:px-0 mt-16 sm:mt-32 flex w-full container mx-auto pb-16">
          <div className="w-full text-white flex justify-center md:justify-start text-center md:text-left">
            <div className="md:w-1/2 w-full">
              <h2 className="leading-none font-bold text-2xl xs:text-2x1 md:text-5xl lg:6x1 uppercase text-neutral-900">
                Grow your business faster with{" "}
                <span className="text-blue-400">Demo POS software</span>
              </h2>
              <p className="mt-12 mb-12 text-neutral-900">
                Demo POS is the leading POS software in Kenya, with everything
                you need to run & grow your business.
              </p>
              <a href="#form">
                <button className="px-16 rounded-full bg-blue-400 text-white font-bold p-4 uppercase border-blue-500 border">
                  Request Demo
                </button>
              </a>
            </div>
            <div className="md:w-1/2 md:justify-center md:flex hidden">
              <img
                src="https://img.freepik.com/free-photo/side-view-businesswoman-showing-analytical-charts-her-male-coworker_1098-20620.jpg?size=626&ext=jpg&ga=GA1.2.254313015.1687680910&semt=sph"
                alt="Mobile Phone"
              />
            </div>
          </div>
        </section>
        <Benefits />
        <Access />
        <div
          className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
        >
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div
                className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
              >
                <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  The all-in-one solution for business management
                </a>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <p className="text-sm font-medium inline">
                    Business management is the cornerstone of fuatilia POS.
                    Track sales, generate reports, manage your employees, and
                    organize your stock with our POS software.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="block">
                <img
                  src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?size=626&ext=jpg&ga=GA1.2.254313015.1687680910&semt=sph"
                  className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* request */}

        <div className="flex min-h-screen items-center justify-start bg-white">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="text-4xl font-medium">Request Demo</h1>

            <form action="https://api.web3forms.com/submit" className="mt-10">
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative z-0">
                  <input
                    type="text"
                    name="name"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Your name
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="text"
                    name="email"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Your email
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="tel"
                    name="phone_number"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Your phone number
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows="5"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Your message
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 rounded-md bg-sky-600 px-10 py-2 text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
