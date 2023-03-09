import Clock from "./index";
import {render, screen, cleanup} from "@testing-library/react";
import {delay} from "../../utils/utils";

const timeRegEx = /\d*:\d*:\d*/;
const clock = <Clock
  hasSeconds={true}
/>

test("UnitTest - Clock: Clock is rendered.", async () => {
  render(clock)

  const time = screen.getByText(timeRegEx);
  expect(time).toBeInTheDocument();
});

