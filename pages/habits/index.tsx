import Layout from "../../components/Layout";
import AuthRequired from "../../helpers/AuthRequired";
import Habit from "../../components/Habit"

export default function Habits() {
  return (
    <Layout>
      <AuthRequired>
        <h2>Manage Your Habits!</h2>
        <p>
          You can edit all the different data about your habits here, such as:
        </p>
        <ul>
          <li>Recurrance frequency: How often do you want to do the thing?</li>
          <li>Sharing settings: Who else can do the thing in your stead?</li>
          <li>Name: What do you call the habit?</li>
          <li>
            Description: Any helpful info that someone doing this should have on
            hand?
          </li>
          <li>Time of day: When do you want this habit to be done?</li>
        </ul>
        <h2>My Habits</h2>
        <ul>
          <li>
            <Habit id="blah" owner="me" name="test" complete={false} accessibleBy={["me"]} lastCompleted="6/16/2022" daysUntilRepeat={19} timeOfDay="daytime"/>
          </li>
        </ul>
        <h2>Habits Shared with Me</h2>
      </AuthRequired>
    </Layout>
  );
}
