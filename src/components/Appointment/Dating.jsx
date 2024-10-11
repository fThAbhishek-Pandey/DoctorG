const GetAvailableSlot = (setDoctorSlot, docInfo) => {
  console.log("docinfo 02",docInfo )
  let today = new Date();
  for (let i = 0; i < 7; i++) {
    // getting date with index
    let currDate = new Date(today);
    currDate.setDate(today.getDate() + i);
    //  seting end of the time
    let endTime = new Date();
    endTime.setDate(today.getDate() + i);
    endTime.setHours(21, 0, 0, 0);
    //  settings hourse
    if (today.getDate() === currDate.getDate()) {
      currDate.setHours(
        currDate.getHours() > 10 ? currDate.getHours() + 1 : 10
      );
      currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0);
    } else {
      currDate.setHours(10);
      currDate.setMinutes(0);
    }
    let timeSlot = [];
    while (currDate < endTime) {
      let formatedTime = currDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      let day = currDate.getDate();
      let month = currDate.getMonth() + 1;
      let year = currDate.getFullYear();
      const slotDate = day + "_" + month + "_" + year;
      const slotTime = formatedTime;
      const isSlotAvailable =
           docInfo.slots_booked
        && docInfo.slots_booked[slotDate] 
        && docInfo.slots_booked[slotDate].includes(slotTime)
          ? false
          : true;
      if (isSlotAvailable) {
        //  add slots to array
        timeSlot.push({
          dateTime: new Date(currDate),
          time: formatedTime,
        });
      }

      // Increment the time slot by 30 min
      currDate.setMinutes(currDate.getMinutes() + 30);
    }
    setDoctorSlot((prev) => [...prev, timeSlot]);
  }
};
export default GetAvailableSlot;
