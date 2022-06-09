import { render,screen } from "@testing-library/react"
import { supabase } from "../utils/supabaseClient"
jest.mock('../utils/supabaseClient')
import Dashboard from "../pages/dashboard"

test('3 Accordions appear in dashboard when authenticated', () => {
  //arrange
  render(<Dashboard />)

  //act
  const accordions = screen.getAllByRole("group");

  //assert
  expect(accordions.length).toBe(3);
})

test('no Accordions appear in dashboard when unauthenticated', () => {
  //arrange
  supabase.auth.session().mockResolvedValue(null);
  render(<Dashboard />)

  //act
  const accordions = screen.queryAllByRole("group");

  //assert
  expect.accordions.toBeFalsy;
})