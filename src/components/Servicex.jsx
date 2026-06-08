import { Car, CircleDollarSign, LockIcon, ShipWheelIcon } from "lucide-react";

const Servicex = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-8/12 mx-auto    gap-6 mb-20">
      <div className="bg-amber-100 h-40 rounded-2xl flex justify-center items-center flex-col gap-2">
        <Car className="bg-white rounded-full w-10 h-10 p-2"></Car>
        <p>Super Fast and Free Delivery</p>
      </div>

      <div className="h-40 rounded-2xl flex flex-col gap-4">
        <div className="bg-blue-300 h-full flex-1 rounded-2xl flex justify-center items-center gap-2">
          <ShipWheelIcon className="bg-white rounded-full w-10 h-10 p-2"></ShipWheelIcon>
          <p>Non-contact Shipping</p>
        </div>
        <div className="bg-blue-300 h-full flex-1 rounded-2xl flex justify-center items-center gap-2">
          <CircleDollarSign className="bg-white rounded-full w-10 h-10 p-2"></CircleDollarSign>
          <p>Money-back Guaranteed</p>
        </div>
      </div>
      <div className="bg-amber-100 h-40 rounded-2xl flex justify-center items-center flex-col gap-2">
        <LockIcon className="bg-white rounded-full w-10 h-10 p-2"></LockIcon>
        <p>Super Secure Payment System</p>
      </div>
    </div>
  );
};

export default Servicex;
