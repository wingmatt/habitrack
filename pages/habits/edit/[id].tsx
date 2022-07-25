import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import AuthRequired from "../../../helpers/AuthRequired";
import HabitEditor from "../../../components/Habit/HabitEditor";
import { useUserData } from "../../../helpers/UserProvider";

export default function newHabit() {
  const router = useRouter();
  const { state } = useUserData();
  const { user } = state;
  const {
    id,
    owner,
    accessibleBy,
    name,
    description,
    complete,
    lastCompleted,
    daysUntilRepeat,
    timeOfDay,
  } = state.habits.find((habit) => habit.id == router.query.id);
  const userId = user?.id;
  return (
    <Layout>
      <AuthRequired>
        <HabitEditor
          id={id}
          owner={owner}
          accessibleBy={accessibleBy}
          name={name}
          description={description}
          complete={complete}
          lastCompleted={lastCompleted}
          daysUntilRepeat={daysUntilRepeat}
          timeOfDay={timeOfDay}
        />
      </AuthRequired>
    </Layout>
  );
}
