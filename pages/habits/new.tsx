import Layout from "../../components/Layout";
import AuthRequired from "../../helpers/AuthRequired";
import HabitEditor from "../../components/Habit/HabitEditor";
import { useUserData } from "../../helpers/UserProvider";

export default function newHabit() {
  const {state} = useUserData()
  const {user} = state;
  const userId = user?.id;
  return (
    <Layout>
      <AuthRequired>
        <HabitEditor id="" owner={userId} accessibleBy={[]} name="" description="" complete={false} lastCompleted={null} daysUntilRepeat={0} timeOfDay="daytime" />
      </AuthRequired>
    </Layout>
  );
}
