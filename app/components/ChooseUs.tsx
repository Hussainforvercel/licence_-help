import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why Choose Us!</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        <div className="bg-white shadow-md rounded-full px-6 py-2 flex items-center flex-grow md:flex-grow-0 basis-[30%]">
          <span className="text-green-500 mr-2">✔️</span>
          <span className="text-gray-700">
            24/7 online booking & rescheduling
          </span>
        </div>
        <div className="bg-white shadow-md rounded-full px-6 py-2 flex items-center flex-grow md:flex-grow-0 basis-[30%]">
          <span className="text-green-500 mr-2">✔️</span>
          <span className="text-gray-700">
            100,000+ learners graduated with us
          </span>
        </div>
        <div className="bg-white shadow-md rounded-full px-6 py-2 flex items-center flex-grow md:flex-grow-0 basis-[30%]">
          <span className="text-green-500 mr-2">✔️</span>
          <span className="text-gray-700">
            All instructors are police checked
          </span>
        </div>
        <div className="bg-white shadow-md rounded-full px-6 py-2 flex items-center flex-grow md:flex-grow-0 basis-[45%]">
          <span className="text-green-500 mr-2 ">✔️</span>
          <span className="text-gray-700">Change your instructor anytime</span>
        </div>
        <div className="bg-white shadow-md rounded-full px-6 py-2 flex items-center flex-grow md:flex-grow-0 basis-[45%]">
          <span className="text-green-500 mr-2">✔️</span>
          <span className="text-gray-700">
            Choose from 1000+ verified instructors
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between bg-gray-800 space-y-4 sm:space-y-0">
        {/* Left Images Group for Refund Guarantee */}
        <div className="flex items-center">
          <div className="flex -space-x-2">
            <Image
              src="/road.png"
              alt="Left Decor"
              width={200}
              height={200}
              className="sm:block"
            />
            <Image
              src="/refund.png"
              alt="Refund Decor"
              width={200}
              height={200}
              className="sm:block"
            />
          </div>
        </div>

        {/* Refund Guarantee Section */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-semibold bg-gray-800 text-white p-2 rounded">
            Refund Guarantee!
          </h3>
          <p className="text-white">
            No lesson, no charge. We will refund any lesson that isn’t delivered
            or cancelled.
          </p>
        </div>

        {/* Right Images Group for Driving Lessons */}
        <div className="flex items-center order-last sm:order-none">
          <div className="flex -space-x-2">
            <Image
              src="/drive.png"
              alt="Drive Decor"
              width={200}
              height={200}
              className="sm:block"
            />
            {/* Driving Lessons Section */}
            <div className="flex-1 text-center sm:text-right">
              <h3 className="text-lg font-semibold bg-gray-800 text-white p-2 rounded">
                Driving lessons & test packages
              </h3>
              <p className="text-white">
                Buy more lessons & get more discount.
              </p>
            </div>
            <Image
              src="/road.png"
              alt="Right Decor"
              width={200}
              height={200}
              className="sm:block"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <div className="flex items-center justify-center space-x-2">
          <Image
            src="/google-logo.png"
            alt="Google Logo"
            width={30}
            height={30}
          />
          <span className="text-xl font-semibold">4.9</span>
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="text-gray-600">Reviews 8598</span>
        </div>
      </div>
    </section>
  );
}
