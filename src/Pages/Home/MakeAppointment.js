import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointmentBg from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointmentBg})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block md:block'>
                <img className='mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-4'>
                <div className='mb-10'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p className='text-white'>The average time a dental appointment lasts is 30 to 45 minutes. You can expect a full exam of teeth, jaws, bite, gums, oral tissues to check the growth and development. A gentle cleaning might take place if needed, followed by polishing teeth and removing plaque, tartar and stains</p>
                </div>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
            
        </section>
    );
};

export default MakeAppointment;