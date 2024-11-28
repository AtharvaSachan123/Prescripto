import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors,currencySymbol } = useContext(AppContext);
  const daysOfWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    
  }

  const getAvailableSlots = async () => {
    setDocSlots([]);
    //getting current date
    let today=new Date();
    for(let i=0;i<7;i++){
      let curerentDate=new Date(today);
      curerentDate.setDate(today.getDate()+i);
      //setting end time
      let endTime=new Date();
      endTime.setDate(today.getDate()+i);
      endTime.setHours(21,0,0,0);
      //setting hours
      if(today.getDate()==curerentDate.getDate()){
        curerentDate.setHours(curerentDate.getHours()>10 ?curerentDate.getHours()+1:10);
        curerentDate.setMinutes(curerentDate.getMinutes()>30 ?30:0);
    }else{
      curerentDate.setHours(10);
      curerentDate.setMinutes(0);
    }
    let timeSlots=[];
    while(curerentDate<endTime){
      let formattedTime=curerentDate.toLocaleTimeString('en-US',{hour:'numeric',minute:'numeric',hour12:true});
      timeSlots.push({
        datetime:new Date(curerentDate),
        time:formattedTime,
      });
      curerentDate.setMinutes(curerentDate.getMinutes()+30);

    }
    setDocSlots((prev)=>[...prev,timeSlots]);
  }
}



  useEffect(() => {
    fetchDocInfo();

  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots])



  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg ' src={docInfo?.image} alt={docInfo?.name} />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo?.name}<img className='w-5' src={assets.verified_icon} /></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p> {docInfo.degree}-{docInfo?.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>

          </div>
          {/* {doctor about} */}
          <div >
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 '>About <img src={assets.info_icon} /></p>
            <p className='text-sm text-gray-500 msx-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment Fee: <span className='text-primary font-medium'> {currencySymbol} {docInfo.fees}</span>
          </p>



        </div>

      </div>

      {/* Booking Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'> 
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => (
                <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? "bg-primary text-white":"border border-gray-500"}`} key={index}>
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Appointment