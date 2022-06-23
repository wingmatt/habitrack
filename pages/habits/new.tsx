import Layout from "../../components/Layout";
import AuthRequired from "../../helpers/AuthRequired";
import HabitEditor from "../../components/Habit/HabitEditor";

export default function newHabit() {
  const userId = "me";
  return (
    <Layout>
      <AuthRequired>
        <HabitEditor id="" owner={userId} accessibleBy={[]} name="" description="" complete={false} lastCompleted={null} daysUntilRepeat={0} repeatDate={null} timeOfDay="daytime" />
      </AuthRequired>
    </Layout>
  );
}
