import { TCar } from '../../types';
import { IoCheckmarkDone } from 'react-icons/io5';
import { LuDollarSign } from 'react-icons/lu';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { Link } from 'react-router-dom';
type TPrimaryCarCard = {
  car: TCar;
};
const PrimaryCarCard = ({ car }: TPrimaryCarCard) => {
  return (
    <div className=" bg-white dark:bg-[#1D232A] p-3 rounded-lg hover:cursor-pointer border  dark:border-none flex flex-col h-full">
      <div className="bg-gray-secondary dark:bg-transparent p-3 md:p-5 rounded-lg">
        <img className="w-full scale-125" src={car.images[0]} alt="" />
      </div>
      <div className="mt-5 flex-grow">
        <div className="space-y-3">
          <div className="space-y-2">
            <h6 className="font-medium dark:text-slate-200">{car.brand}</h6>
            <h1 className="text-xl text-black font-semibold dark:text-slate-50">
              {car.name}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-fit bg-gray-50  flex items-center gap-1 px-2 py-1 border rounded-full dark:text-gray-800">
              <span>
                {' '}
                <MdOutlineAirlineSeatReclineExtra />
              </span>{' '}
              <span className="font-medium ">{car.seats}</span>
            </div>
            <div className="w-fit bg-gray-50 flex items-center gap-1 px-2 py-1 border rounded-full">
              <span>
                {' '}
                <IoCheckmarkDone />
              </span>{' '}
              <span
                className={`font-medium uppercase text-[0.9rem] ${car.status === 'available' ? 'text-green-500' : 'text-red-500'}`}
              >
                {car.status}
              </span>
            </div>
          </div>
        </div>
       
      </div>
      <div className="flex justify-between items-center mt-5">
          <Link to={`/car/${car._id}`}>
            <button className="px-4 py-2  bg-secondary-color text-white rounded-full">
              Read More
            </button>
          </Link>
          <div className="flex items-center text-2xl font-bold dark:text-slate-100">
            <span>
              <LuDollarSign />
            </span>
            <h1>
              {car.pricePerHour}
              <span className="text-[1.2rem] font-medium">/hour</span>
            </h1>
          </div>
        </div>
    </div>
  );
};

export default PrimaryCarCard;
