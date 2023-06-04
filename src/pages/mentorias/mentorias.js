import React, { useEffect, useState } from "react";
import './mentorias.css';

const Mentorias = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    renderCalendar();
  }, [date]);

  const renderCalendar = () => {
    const monthDays = document.querySelector(".days");

    if (!monthDays) return;

    date.setDate(1);

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dateElement = document.querySelector(".date");
    if (dateElement) {
      dateElement.querySelector("h1").innerHTML = months[date.getMonth()];
      dateElement.querySelector("p").innerHTML = new Date().toDateString();
    }

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="today">${i}</div>`;
      } else {
        days += `<div>${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
    }

    monthDays.innerHTML = days;
  };

  const handlePrevClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const handleNextClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleAgendarClick = () => {
    if (selectedTime) {
      // Logic to schedule the selected time
      console.log("Horário agendado:", selectedTime);
    } else {
      console.log("Nenhum horário selecionado.");
    }
  };

  return (
    <div>
      <div className="headerM">
      <h1 className="tituloM">Agendamento de mentoria</h1>
      </div>
      <div className="containerM">
        <div className="calendar">
          <div className="month">
            <i className="fas fa-angle-left prev" onClick={handlePrevClick}></i>
            <div className="date">
              <h1></h1>
              <p></p>
            </div>
            <i className="fas fa-angle-right next" onClick={handleNextClick}></i>
          </div>
          <div className="weekdays">
            <div>Dom</div>
            <div>Seg</div>
            <div>Ter</div>
            <div>Qua</div>
            <div>Qui</div>
            <div>Sex</div>
            <div>Sab</div>
          </div>
          <div className="days"></div>
        </div>
        <div className="timeslots">
          <h1> Qual melhor horário? </h1>
          <div onClick={() => handleTimeSelect("9:00")}>9:00</div>
          <div onClick={() => handleTimeSelect("10:00")}>10:00</div>
          <div onClick={() => handleTimeSelect("11:00")}>11:00</div>
          <div onClick={() => handleTimeSelect("12:00")}>12:00</div>
          <div onClick={() => handleTimeSelect("13:00")}>13:00</div>
          <div onClick={() => handleTimeSelect("14:00")}>14:00</div>
          <div onClick={() => handleTimeSelect("15:00")}>15:00</div>
          <button onClick={handleAgendarClick}>AGENDAR</button>
        </div>
      </div>
    </div>
  );
};

export default Mentorias;