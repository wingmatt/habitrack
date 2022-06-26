import { HabitInterface } from "../../types";
import styles from "./HabitEditor.module.css";

const addAccessibleBy = () => {
  return "okay";
};
const removeAccessibleBy = (email: string) => {
  return "okay";
};

export default function HabitEditor(props: HabitInterface) {
  return (
    <>
      <h1 className={styles.header}>New Habit</h1>
      <form className={styles.editHabit}>
        <label className={styles.block}>
          Name <input name="name" />
        </label>
        <label className={styles.block}>
          Description <textarea name="description" />
        </label>
        <label className={styles.inline}>
          Time of Day
          <select name="timeOfDay">
            <option value="morning">Morning</option>
            <option value="daytime">Daytime</option>
            <option value="evening">Evening</option>
          </select>
        </label>
        <label className={styles.block}>
          Who else can do this? <input name="newAccessibleBy" />
          <button type="button" onClick={() => addAccessibleBy()}>
            Add
          </button>
        </label>
        <section className={styles.accessList}>
          <ul role="list">
            <li>
              <label>Matt Wing
              <button
                type="button"
                onClick={() => {
                  removeAccessibleBy("matt@wingmatt.dev");
                }}
                title="Remove Matt Wing from this habit"
                className={styles.removeAccess}
              >
                X
              </button></label>
            </li>
          </ul>
          <div className={styles.accessListOptions}>
            <button className={styles.active}>Show Names</button>
            <button>Show Emails</button>
          </div>
        </section>
        <label className={styles.inline}>
          Start this habit on <input type="date" name="repeatDate" />
        </label>
        <label className={styles.inline}>
          <input type="checkbox" name="doesRepeat" />
          Repeat? Uncheck if this is a one-time thing
        </label>
        <label className={styles.inline}>
          Repeat this habit every{" "}
          <input
            type="number"
            name="daysUntilRepeat"
            className={styles.small}
          />{" "}
          days
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
