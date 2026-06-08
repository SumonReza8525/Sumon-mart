import { Car, CircleDollarSign, LockIcon, ShipWheelIcon } from "lucide-react";

const Servicex = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-8/12 mx-auto    gap-6 mb-20 mt-30">
      <div className="bg-purple-400 h-40 rounded-2xl flex justify-center items-center flex-col gap-2 relative">
        <Car className="bg-white rounded-full w-10 h-10 p-2"></Car>
        <p className="text-white">Super Fast and Free Delivery</p>
      </div>

      <div className="h-40 rounded-2xl flex flex-col gap-4">
        <div className="bg-purple-400 h-full flex-1 rounded-2xl flex justify-center items-center gap-2">
          <ShipWheelIcon className="bg-white rounded-full w-10 h-10 p-2"></ShipWheelIcon>
          <p className="text-white">Non-contact Shipping</p>
        </div>
        <div className="bg-purple-400 h-full flex-1 rounded-2xl flex justify-center items-center gap-2">
          <CircleDollarSign className="bg-white rounded-full w-10 h-10 p-2"></CircleDollarSign>
          <p className="text-white">Money-back Guaranteed</p>
        </div>
      </div>

      <div className="bg-purple-400 h-40 rounded-2xl flex justify-center items-center flex-col gap-2">
        <LockIcon className="bg-white rounded-full w-10 h-10 p-2"></LockIcon>
        <p className="text-white">Super Secure Payment System</p>
      </div>
    </div>
  );
};

export default Servicex;
