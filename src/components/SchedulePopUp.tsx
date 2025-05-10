import closeIcon from "../images/close_icon.svg"
import moreIcon from "../images/more_icon.svg"
import joinIcon from "../images/join_icon.svg"

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SchedulePopUp({ isOpen, onClose }: AddEventModalProps) {
  return (
    <div className="schedule_popup">
        <button className="close_btn" onClick={onClose}><img src={closeIcon} alt="닫기" /></button>
        <h3>Title</h3>
        <p>contents</p>

        <dl>
            <dt>Members</dt>
            <dd className="schedule_profile">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button className="more_icon"><img src={moreIcon} alt="인원 더보기" /></button>
            </dd>

            <dt>Place</dt>
            <dd>contents</dd>

            <dt>Notice</dt>
            <dd>contents</dd>
        </dl>

        <div className="schedule_btn_wrap">
            <button><img src={joinIcon} alt="가입하기" /> Join</button>
        </div>
    </div>
  )
}
