import Calendar from "./factory/calendar";
import Day from "./factory/day";
import Month from "./factory/month";
import Week from "./factory/week";
import TZDate from "./time/date";
import type { ExternalEventTypes } from "./types/eventBus";
import type { EventObjectWithDefaultValues } from "./types/events";
import type { Options } from "./types/options";
export default Calendar;
export { Day, Month, TZDate, Week };
export type { EventObjectWithDefaultValues as EventObject, ExternalEventTypes, Options };
declare module '@toast-ui/calendar' {
    const Calendar: any;
    export default Calendar;
    export const Day: any;
    export const Month: any;
    export const Week: any;
    export const TZDate: any;
    export type EventObject = any;
    export type ExternalEventTypes = any;
    export type Options = any;
}

