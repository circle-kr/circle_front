import React, { useState } from "react";
import "../Schedule.css";
import closeIcon from "../images/close_icon.svg"
import moreIcon from "../images/more_icon.svg"
import joinIcon from "../images/join_icon.svg"
import exitIcon from "../images/exit_icon.svg"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // 월간 보기
import timeGridPlugin from "@fullcalendar/timegrid"; // 주간, 일간 뷰 지원
import interactionPlugin from "@fullcalendar/interaction"; // 클릭 이벤트
import momentTimezonePlugin from "@fullcalendar/moment-timezone"; // 시간대 플러그인
import { DateSelectArg } from "@fullcalendar/core";
import { EventInput } from "@fullcalendar/core"; // ✅ 이벤트 입력 타입

const Schedule: React.FC = () => {
  // ✅ 일정 목록을 저장하는 state 추가 (EventApi 대신 EventInput 사용)
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
  

  return (
    <div className="schedule_wrap">
      <FullCalendar
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
        select={handleDateSelect} // 날짜 선택 시 기능 추가
        events={events} // ✅ 일정 목록 추가 (화면에 반영됨
      />
      <div className="schedule_popup">
        <button className="close_btn"><img src={closeIcon} alt="닫기" /></button>
        <h3>Title</h3>
        <p className="contents">contents</p>
        <dl>
          <dt>Members</dt>
          <dd className="schedule_profile">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <button className="more_icon"><img src={moreIcon} alt="가입인원 더보기" /></button>
          </dd>

          <dt>Place</dt>
          <dd>korea university of foreign studies gymnasium</dd>

          <dt>Notice</dt>
          <dd>please wear cloths that are easy to work</dd>
        </dl>

        <div className="schedule_btn_wrap">
          <button className="join_btn"><img src={joinIcon} alt="가입하기" /> Join</button>
          <button className="exit_btn"><img src={exitIcon} alt="나가기" /> Leave</button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
