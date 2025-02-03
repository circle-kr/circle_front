import React, { useState } from "react";
import "../Schedule.css";
import SchedulePopUp from "./SchedulePopUp";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // 월간 보기
import timeGridPlugin from "@fullcalendar/timegrid"; // 주간, 일간 뷰 지원
import interactionPlugin from "@fullcalendar/interaction"; // 클릭 이벤트
import momentTimezonePlugin from "@fullcalendar/moment-timezone"; // 시간대 플러그인
import { EventInput } from "@fullcalendar/core"; // ✅ 이벤트 입력 타입
import { DateSelectArg } from "@fullcalendar/core";

const Schedule: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([]);
   // ✅ 일정 ID를 생성하는 함수
   const createEventId = () => String(Date.now());

   // ✅ 날짜 선택 핸들러 (일정 추가)
   const handleDateSelect = (selectInfo: DateSelectArg) => {
     let title = prompt("✏️ 일정 제목을 작성해주세요.");
     let calendarApi = selectInfo.view.calendar;
     calendarApi.unselect(); // 드래그 선택 해제
     if (title) {
       const newEvent: EventInput = {
         id: createEventId(),
         title,
         start: selectInfo.startStr,
         end: selectInfo.endStr,
         allDay: selectInfo.allDay,
       };
       setEvents((prevEvents) => [...prevEvents, newEvent]); // ✅ 상태 업데이트
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

  interface CustomEvent extends EventInput{
    className? : string[];
  }

  const events: CustomEvent[] = [{
    title: 'meeting',
    start: '2024-02-05',
    classNames: ['calendar_cont']
  }
]

  return (
    
    <div className="schedule_wrap">
      <>
      <FullCalendar
      className = "calendar_cont"
        plugins={[dayGridPlugin, timeGridPlugin, momentTimezonePlugin, interactionPlugin]} // 플러그인 설정
        headerToolbar={{
          left: "prev,next today", // 이전달, 다음달, 오늘달
          center: "title", // 현재 날짜 제목
          right: "dayGridMonth,timeGridWeek", // 월별, 주별 뷰
        }}
        initialView="dayGridMonth" // 기본 화면 설정
        editable={true} // 수정 가능 여부
        selectable={true} // 선택 가능 여부
        selectMirror={true} // TimeGrid 뷰에서 자리 표시자 여부
        dayMaxEvents={true} // 한 셀에 최대 이벤트 표시 여부
        slotMinTime="09:00:00"
        slotMaxTime="21:00:00"
        events={events}
        select={handleDateSelect}
        dateClick={handleAddEvent}
        eventClick={handleEventClick}
        eventAdd={function(){}} // 이벤트 추가
        eventChange={function(){}} // 이벤트 수정
        eventRemove={function(){}} // 이벤트 삭제
      />

      {isOpen && (
            <SchedulePopUp
              isOpen={isOpen}
              onClose={handleModalClose}
            />
          )}
        </>
      
        </div>
  );
};

export default Schedule;
