import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
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
  const user = userEvent.setup();
    // TODO: Mock this with mockState
  const state = mockState;
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

  const nameField = screen.getByLabelText('Name', {selector: 'input'})
  const saveButton = screen.getByRole('button', {name: 'Save'});

  //act
  user.type(nameField, 'Take out the trash');
  user.click(saveButton);

  //assert
  const newHabitInState = state.habits.find(habit => habit.name == "Take out the trash")
  expect(newHabitInState).toBeTruthy;
  expect(newHabitInState?.id).toBe('newIdFromSupabaseMock');
  expect(state.habits.length).toBe(2);
});

test("Edit Habit: Submitting a habit with the ID of an existing habit should update the context", () => {
  //arrange
  const user = userEvent.setup();
  const state = mockState;
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

  const nameField = screen.getByLabelText('Name', {selector: 'input'})
  const saveButton = screen.getByRole('button', {name: 'Save'});
  //act
  user.type(nameField, 'New Name');
  user.click(saveButton);

  //assert
  const habitInState = state.habits.find(habit => habit.id == "testId")
  expect(habitInState?.name).toBe('New Name');
  expect(state.habits.length).toBe(1);
});
