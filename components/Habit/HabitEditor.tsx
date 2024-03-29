import { HabitInterface } from "../../types";
import styles from "./HabitEditor.module.css";
import { useState } from "react";
import { createHabit, updateHabit, deleteHabit } from "../../helpers/updateUserData";
import { useUserData } from "../../helpers/UserProvider";
import { useRouter, NextRouter } from "next/router";

const addAccessibleBy = () => {
  return "okay";
};
const removeAccessibleBy = (email: string) => {
  return "okay";
};

//TODO: Use more specific types
const submitSave = async (event: any, form: any, dispatch: any, router: NextRouter): Promise<void> => {
  event.preventDefault();
  const formData = form.data;
  let response;
  let alert;
  // If the form has no existing ID, then create a new habit instead
  if (formData.id == '') {
    delete formData.id;
    response = await createHabit(formData);
    alert = "Habit created."
  } 
  else {
    response = await updateHabit(formData);
    alert = "Habit updated."
  }
  dispatch({type:'UPDATE_HABIT', payload: {
    habit: response,
    alert: alert
  }})
  router.push('/habits');
}

const submitDelete = async (event: any, form: any, dispatch: any, router: NextRouter): Promise<void> => {
  event.preventDefault();
  const habitId = form.data.id;
  const response = await deleteHabit(habitId);
  dispatch({type:'DELETE_HABIT', payload: response})
  router.push('/habits');
}

export default function HabitEditor(props: HabitInterface) {
  const [form, setForm] = useState({ data: { ...props } });
  const {dispatch} = useUserData();
  const router = useRouter();
  const handleChange = (event: {
    target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  }) => {
    setForm((prevState) => ({
      data: {
        ...prevState.data,
        [event.target.name]: event.target.value,
      },
    }));
  };

  return (
    <>
      <h1 className={styles.header}>New Habit</h1>
      <form className={styles.editHabit} onSubmit={(event) => submitSave(event, form, dispatch, router)}>
        <label className={styles.block}>
          Name{" "}
          <input
            name="name"
            value={form.data.name}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label className={styles.block}>
          Description{" "}
          <textarea
            name="description"
            value={form.data.description}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label className={styles.inline}>
          Time of Day
          <select
            name="timeOfDay"
            value={form.data.timeOfDay}
            onChange={(event) => handleChange(event)}
          >
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
              <label>
                Matt Wing
                <button
                  type="button"
                  onClick={() => {
                    removeAccessibleBy("matt@wingmatt.dev");
                  }}
                  title="Remove Matt Wing from this habit"
                  className={styles.removeAccess}
                >
                  X
                </button>
              </label>
            </li>
          </ul>
          <div className={styles.accessListOptions}>
            <button className={styles.active}>Show Names</button>
            <button>Show Emails</button>
          </div>
        </section>
        <label className={styles.inline}>
          Start this habit on{" "}
          <input
            type="date"
            name="repeatDate"
            value={form.data.description}
            onChange={(event) => handleChange(event)}
          />
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
            value={form.data.daysUntilRepeat}
            onChange={(event) => handleChange(event)}
          />{" "}
          days
        </label>
        <button type="submit" name="Save Habit">Save</button>
        <button type="button" name="Delete Habit" onClick={(event) => submitDelete(event, form, dispatch, router)}>Delete</button>
      </form>
    </>
  );
}
