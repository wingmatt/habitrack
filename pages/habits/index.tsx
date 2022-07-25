import Layout from "../../components/Layout";
import AuthRequired from "../../helpers/AuthRequired";
import Habit from "../../components/Habit";
import { useUserData } from "../../helpers/UserProvider";
import { useEffect } from "react";

export default function Habits() {
  const { state } = useUserData();
  return (
    <Layout>
      <AuthRequired>
        <h2>My Habits</h2>
        <ul role="list">
          {state.habits.map((habit) => (
              <Habit
                id={habit.id}
                owner={habit.owner}
                name={habit.name}
                complete={habit.complete}
                accessibleBy={habit.accessibleBy}
                lastCompleted={habit.lastCompleted}
                daysUntilRepeat={habit.daysUntilRepeat}
                timeOfDay={habit.timeOfDay}
              />
          ))}
        </ul>
        <h2>Habits Shared with Me</h2>
      </AuthRequired>
    </Layout>
  );
}
