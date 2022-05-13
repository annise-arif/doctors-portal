import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const {_id, name, slots } = treatment;

  const handleBooking = (event) =>{
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot, name, _id,);
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary justify-center ">
            Booking for: {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-4">
            <input
              value={format(date, "PP")}
              readOnly
              disabled
              type="text"
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="mt-3 btn btn-primary uppercase text-white font-bold bg-accent w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;