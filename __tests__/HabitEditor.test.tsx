import { render, screen } from "@testing-library/react";
import HabitEditor from "../components/Habit/HabitEditor";
import { useUserData } from "../helpers/UserProvider";

const mockState = {
  user: {},
  habits: [
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
}

test("New Habit: Submitting a new habit should add that habit to the context", () => {
  //arrange
  const {state, dispatch} = useUserData();
  render(
    <HabitEditor
      id=""
      owner="testOwner"
      accessibleBy={[]}
      name=""
      description=""
      complete={false}
      lastCompleted={null}
      daysUntilRepeat={0}
      repeatDate={null}
      timeOfDay="daytime"
    />
  );
  //act
    // Fill out form with some basic data
    // Click save
    // Form should handle the dispatch
    // Probably have to mock the supabase create call

  //assert
    // Check that we have the ID from the mocked supabase call in the state, and the other stuff matches too
});

test("Edit Habit: Submitting a habit with the ID of an existing habit should update the context", () => {
  //arrange
  const {state, dispatch} = useUserData();
  render(
    <HabitEditor
      id="testId"
      owner="testOwner"
      accessibleBy={[]}
      name="Old Name"
      description="Old description"
      complete={false}
      lastCompleted={null}
      daysUntilRepeat={0}
      repeatDate={null}
      timeOfDay="daytime"
    />
  );
  //act

    // Change value of name and description
    // Click "Save"
    // The component should handle the dispatch

  //assert
  const habitInState = state.habits.find(habit => habit.id == "testId")
  // Check that the state has the new info in it
});
