import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import supabase from "../utils/supabaseClient"
jest.mock('../utils/supabaseClient')

import { UserProvider } from "../helpers/UserProvider"

import Dashboard from "../pages/dashboard"

test('3 Accordions appear in dashboard when authenticated', async () => {
  //arrange
  render(<UserProvider><Dashboard /></UserProvider>)
  await waitForElementToBeRemoved(() => screen.getByLabelText('Loading'));
  //act
  const accordions = screen.getAllByRole("group");
  console.log(accordions[0].innerHTML)
  //assert
  expect(accordions.length).toBe(4);
})

/*test('no Accordions appear in dashboard when unauthenticated', () => {
  //arrange
  supabase.auth.session.mockValueReturnOnce(null);
  render(<Dashboard />)

  //act
  const accordions = screen.queryAllByRole("group");

  //assert
  expect.accordions.toBeFalsy;
})*/