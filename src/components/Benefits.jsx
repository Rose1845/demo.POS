/* eslint-disable react/no-unescaped-entities */
import {AiOutlineFieldTime,AiOutlineArrowRight} from 'react-icons/ai'
import {FcSalesPerformance} from 'react-icons/fc'
function Benefits() {
  return (
    <div>
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
          <div>
            <span className="text-gray-900 text-2xl font-bold">
              Benefits of our Point of Sale
            </span>
            <h2 className="mt-4 text-xl text-gray-600 font-semibold md:text-4xl">
              Guaranteed to save you time, increase the accuracy of your
              inventory, and help you to make informed decisions for your
              business <br className="lg:block" hidden /> and finance
            </h2>
          </div>
          <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <AiOutlineFieldTime className="text-4xl text-yellow-600" />
                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Save's time
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                   <AiOutlineArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
               <FcSalesPerformance className="text-4xl text-yellow-600" />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Increase sales
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <AiOutlineArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Make Informed Decisions
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <AiOutlineArrowRight />

                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
              <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    All-time Access
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <AiOutlineArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
