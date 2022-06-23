import getRepeatDate from "../helpers/getRepeatDate"

// Always base tests on today's date. 
// Supabase dates come through as ISO Strings, so that's what we'll provide for the test
const today = new Date().toISOString()

test("Habit repeating daily should say it repeats tomorrow", () => {
  const tomorrow = getRepeatDate(today, 1)
  expect(tomorrow).toBe("Tomorrow")
})

test("Habit repeating weekly should say it repeats next week", () => {
  const nextWeekString = getRepeatDate(today, 6)
  const validNextWeekStrings = ["Next Sunday", "Next Monday", "Next Tuesday", "Next Wednesday", "Next Thursday", "Next Friday", "Next Saturday" ]

  expect(validNextWeekStrings.includes(nextWeekString)).toBe(true)
})