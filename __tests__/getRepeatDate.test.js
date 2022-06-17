import getRepeatDate from "../helpers/getRepeatDate"
import dayjs from "dayjs"

// Always base tests on today's date. 
// Supabase dates come through as ISO Strings, so that's what we'll provide for the test
const today = new Date().toISOString()

test("Habit repeating daily should say it repeats tomorrow", () => {
  const tomorrow = getRepeatDate(today, 1)
  expect(tomorrow).toBe("Tomorrow")
})

test("Habit repeating weekly should say it repeats next week", () => {
  const nextWeek = getRepeatDate(today, 7)
  expect(nextWeek).toBe("Next Week")
})