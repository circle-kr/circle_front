import React, { useState } from "react";
import "../Schedule.css";
import SchedulePopUp from "./SchedulePopUp";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import timeGridPlugin from "@fullcalendar/timegrid"; 
import interactionPlugin from "@fullcalendar/interaction"; 
import momentTimezonePlugin from "@fullcalendar/moment-timezone"; 
import { EventInput } from "@fullcalendar/core"; 
import { DateSelectArg } from "@fullcalendar/core";

  interface ScheduleProps {
    editable?: boolean;
    selectable?: boolean;
    showPopup?: boolean;
}
const Schedule: React.FC<ScheduleProps> = ({ editable = true,
  selectable = true,
  showPopup = true, 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([]);
  const createEventId = () => String(Date.now());

   const handleDateSelect = (selectInfo: DateSelectArg) => {
     let title = prompt("✏️ 일정 제목을 작성해주세요.");
     let calendarApi = selectInfo.view.calendar;
     calendarApi.unselect(); 
     if (title) {
       const newEvent: EventInput = {
         id: createEventId(),
         title,
         start: selectInfo.startStr,
         end: selectInfo.endStr,
         allDay: selectInfo.allDay,
       };
       setEvents((prevEvents) => [...prevEvents, newEvent]); 
     }
   };
  const handleAddEvent = (arg: { dateStr: string }) => {
    setIsOpen(true);
  }

  const handleModalClose = () => {
    setIsOpen(false);
  }

  const handleEventClick = (info: EventInput) => {
    console.log("Cliquei no evento de: ", info.event);
  }
 

  return (
    
    <div className="schedule_wrap">
      <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, momentTimezonePlugin, interactionPlugin]} // 플러그인 설정
        headerToolbar={{
          left: "prev,next today", 
          center: "title", 
          right: "dayGridMonth,timeGridWeek",
        }}
        initialView="dayGridMonth" 
        editable={editable}
        selectable={selectable}
        selectMirror={true} 
        dayMaxEvents={true} 
        slotMinTime="09:00:00"
        slotMaxTime="21:00:00"
        events={events}
        select={selectable ? handleDateSelect : undefined}
        dateClick={selectable && showPopup ? handleAddEvent : undefined}
        eventClick={handleEventClick}
        eventAdd={function(){}} 
        eventChange={function(){}}
        eventRemove={function(){}} 
      />

      {/* {isOpen && (
            <SchedulePopUp
              isOpen={isOpen}
              onClose={handleModalClose}
            />
          )} */}
        </>
    </div>
  );
};

export default Schedule;
