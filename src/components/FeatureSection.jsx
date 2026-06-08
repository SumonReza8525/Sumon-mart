const FeatureSection = () => {
  return (
    <div className="bg-blue-100  my-20 flex flex-col justify-center items-center py-10">
      <div className="w-10/12 mx-auto">
        <p className="text-gray-500">CHECK NOW</p>
        <h3 className="text-2xl lg:text-4xl font-semibold">
          Our Feature Services
        </h3>

        {/* Products div */}
        <div className="flex gap-8 md:gap-12 flex-col md:flex-row mt-8 items-center justify-around">
          <div className="max-w-80 relative">
            <img src="../../public/hero.jpg" alt="" className="rounded-xl" />
            <p className="bg-white px-2 py-1 rounded-xl absolute top-2.5 right-3 text-cyan-500">
              mobile
            </p>
            <div className="flex justify-between mt-3">
              <p className="text-sm font-semibold text-gray-500">Product 1</p>
              <p className="text-sm font-semibold text-gray-500">$60000</p>
            </div>
          </div>
          <div className="max-w-80 relative">
            <img src="../../public/hero.jpg" alt="" className="rounded-xl" />
            <p className="bg-white px-2 py-1 rounded-xl absolute top-2.5 right-3 text-cyan-500">
              mobile
            </p>
            <div className="flex justify-between mt-3">
              <p className="text-sm font-semibold text-gray-500">Product 1</p>
              <p className="text-sm font-semibold text-gray-500">$60000</p>
            </div>
          </div>
          <div className="max-w-80 relative">
            <img src="../../public/hero.jpg" alt="" className="rounded-xl" />
            <p className="bg-white px-2 py-1 rounded-xl absolute top-2.5 right-3 text-cyan-500">
              mobile
            </p>
            <div className="flex justify-between mt-3">
              <p className="text-sm font-semibold text-gray-500">Product 1</p>
              <p className="text-sm font-semibold text-gray-500">$60000</p>
            </div>
          </div>
          <div className="max-w-80 relative">
            <img src="../../public/hero.jpg" alt="" className="rounded-xl" />
            <p className="bg-white px-2 py-1 rounded-xl absolute top-2.5 right-3 text-cyan-500">
              mobile
            </p>
            <div className="flex justify-between mt-3">
              <p className="text-sm font-semibold text-gray-500">Product 1</p>
              <p className="text-sm font-semibold text-gray-500">$60000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
