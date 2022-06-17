import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

export default function getRepeatDate(
  lastCompleted: Date | null,
  daysUntilRepeat: number
): string {
  if (lastCompleted === null) return 'Never';
  dayjs.extend(calendar)
  let result = dayjs(lastCompleted).add(daysUntilRepeat, "day");
  return dayjs(result).calendar(null, {
    sameDay: '[Today]', // The same day ( Today at 2:30 AM )
    nextDay: '[Tomorrow]', // The next day ( Tomorrow at 2:30 AM )
    nextWeek: 'dddd', // The next week ( Sunday at 2:30 AM )
    lastDay: '[Yesterday]', // The day before ( Yesterday at 2:30 AM )
    lastWeek: '[Last] dddd', // Last week ( Last Monday at 2:30 AM )
    sameElse: 'DD/MM/YYYY' // Everything else ( 17/10/2011 )
  })
}
