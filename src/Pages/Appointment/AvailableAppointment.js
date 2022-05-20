import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    // console.log(treatment)

    const formattedDate = format(date, 'PP');
    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
        )

        if(isLoading){
            return <Loading></Loading>;
        }
    return (
        <div className=''>
            <h4 className='text-xl text-secondary text-center mt-20 mb-8'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
                {
                    services?.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            { treatment && <BookingModal 
            date={date} 
            treatment={treatment} 
            setTreatment={setTreatment}
            refetch={refetch}
            /> }
        </div>
    );
};

export default AvailableAppointment;