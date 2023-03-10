import Clock from "./index";
import {render, screen} from "@testing-library/react";

const timeRegEx = /\d*:\d*:\d*/;
const clock = <Clock
  hasSeconds={true}
/>

test("UnitTest - Clock: Clock is rendered.", async () => {
  render(clock)

  const time = screen.getByText(timeRegEx);
  expect(time).toBeInTheDocument();
});

