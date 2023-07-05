import "./App.css";
import React from "react";
import Access from "./components/Access";
import Benefits from "./components/Benefits";
import axios from 'axios';
function App() {
  const [name, setName] = React.useState(""); // [state, setState
  const [text, setText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [day, setDay] = React.useState("");

  
   
  const sendPostRequest = async () => {
    try {
      const response = await axios.post('http://localhost:3000/sms', {
        text: text,
        email: email,
        phone: phone
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendPostRequest();
  };

  
  return (
    <>
      <div>
        {/* hero */}
        <section className="px-2 lg:px-0 mt-16 sm:mt-32 flex w-full container mx-auto pb-16">
          <div className="w-full text-white flex justify-center md:justify-start text-center md:text-left">
            <div className="md:w-1/2 w-full">
              <h2 className="leading-none font-bold text-2xl xs:text-2x1 md:text-5xl lg:6x1 uppercase text-neutral-900">
                Grow your business faster with{" "}
                <span className="text-blue-400">MyBizz </span>
              </h2>
              <p className="mt-12 mb-12 text-neutral-900">
              MyBizz is the leading business solution in Kenya, with everything
                you need to run & grow your business.
              </p>
              <a href="#form">
                <button className="px-16 rounded-full bg-blue-400 text-white font-bold p-4 uppercase border-blue-500 border">
                  Contact Us
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
            <h1 className="text-4xl font-medium">Contact Us.</h1>

            <form 
            onSubmit={handleSubmit}
             className="mt-10">
             
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative z-0">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone_number"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Your phone number
                  </label>
                </div>
                <div className="relative z-0">
                {/* <input
                    type="text"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    name="day"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Day of Consoltation
                  </label> */}
                  {/* select day */}
                  <select
                    name="day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  >
                    <option value="day">Day</option>
                    <option value="monday">monday</option>
                    <option value="tuesday">tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                  </select>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Select Consoltation Day
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
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
