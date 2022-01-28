import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";


export default function Form() {
  const [roomName, setRoomName] = useState("");
  const [userName, setuserName] = useState("");
  const [description, setDescription] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [success, setSuccess] = useState(false);
  const successMessage = () => {
    return (
      <>
        {success && (
          <div class="alert alert-success m-2" role="alert">
            Your Appointment Booked SuccessFully
            <span class="text-danger">{userName}</span>
          </div>
        )}
      </>
    );
  };
  const bookAppointment = () => {
    setSuccess(true);
    setuserName("");
    setDescription("");
    setSelectedDate("");
  };

  const onChange = (value) => {
    setSelectDate(value);
    var date = new Date(value),
      dayOfDate = ("0" + date.getDate()).slice(-2),
      month = ("0" + (date.getMonth() + 1)).slice(-2);
    setSelectedDate([dayOfDate, month, date.getFullYear()].join("-"));
    setSuccess(false);
  };
  return (
    <>
      <div className="container">
        <div className="justify-content-center col-6">
         
            <div className="form-floating mb-3">
              <div className="react-calendar">
                <Calendar onClickDay={onChange} value={selectDate} required />
              </div>
            </div>
          
          <h5 className="card-title">Date : {selectedDate}</h5>

          
          {successMessage()}
         
        </div>
      </div>
    </>
  );
}
