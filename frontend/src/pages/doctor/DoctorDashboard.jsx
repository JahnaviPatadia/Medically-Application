import react from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const DoctorDashboard = (props) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        //events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default DoctorDashboard;
