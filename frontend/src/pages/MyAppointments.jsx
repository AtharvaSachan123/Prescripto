import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      
      <div>
        {doctors && doctors.length > 0 ? (
          doctors.slice(0, 2).map((item, index) => (
            <div key={index} className="p-4 border rounded-md mb-4 flex gap-4">
              
              {/* Doctor Image */}
              <div className="w-24 h-24">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
              </div>

              {/* Doctor Details */}
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
                <p className="text-xs font-medium mt-1">Address:</p>
                <p className="text-sm">{item.address.line1}</p>
                <p className="text-sm">{item.address.line2}</p>
                <p className="text-sm mt-2">
                  <span className="font-medium">Date & Time:</span> 25, July, 2024 | 8:30 PM
                </p>
              </div>
              <div></div>
              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">Pay Online</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">Cancel Appointment</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm mt-4">No Appointments Available</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
