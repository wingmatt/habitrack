const getProfile = async () => {
  return {
    username: "testUsername",
    timezone: "UTC",
    streak: 0,
    gems: 7
  }
} 

const getHabits = async () => {
  return [
    {id: "testId",
    owner: "testOwner",
    accessibleBy: [],
    name: "Old Name",
    description: "Old description",
    complete: false,
    lastCompleted: null,
    daysUntilRepeat: 0,
    repeatDate: null,
    timeOfDay: "daytime"}
  ]
};

export { getProfile, getHabits };