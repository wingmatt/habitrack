import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import HabitEditor from "../components/Habit/HabitEditor";
import { UserProvider  } from "../helpers/UserProvider";
//@ts-ignore-next: Need to mock supabase so I gotta import it
import supabase from "../utils/supabaseClient"
jest.mock('../utils/supabaseClient')
import {getProfile, getHabits} from "../helpers/getUserData"
jest.mock("../helpers/getUserData")

test("New Habit: Submitting a new habit should add that habit to the context", () => {
  //arrange
  const userAction = userEvent.setup();
  render(
    <UserProvider><HabitEditor
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
    /></UserProvider>
  );

  const nameField = screen.getByLabelText('Name', {selector: 'input'})
  const saveButton = screen.getByRole('button', {name: 'Save'});

  //act
  userAction.type(nameField, 'Take out the trash');
  userAction.click(saveButton);

  //assert
  const newHabitInState = state.habits.find(habit => habit.name == "Take out the trash")
  expect(newHabitInState).toBeTruthy;
  expect(newHabitInState?.id).toBe('newIdFromSupabaseMock');
  expect(state.habits.length).toBe(2);
});

test("Edit Habit: Submitting a habit with the ID of an existing habit should update the context", () => {
  //arrange
  const user = userEvent.setup();
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
