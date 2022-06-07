import "@testing-library/jest-dom";
import { render,screen } from "@testing-library/react"
import Task from "../components/Accordion/Task"

test('Task name renders in the component', () => {
  //arrange
  render(<Task name="Test name please ignore" complete={false} />)

  //act
  const taskName = screen.getByText("Test name please ignore");

  //assert
  expect(taskName).toBeInTheDocument();
})