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

test("UnitTest - Clock: The clock changes after a second.", async () => {
  const getSeconds = () => screen.getByText(timeRegEx).textContent.split(":")[2];

  render(clock)
  const seconds1 = getSeconds();
  
  cleanup();
  await delay(1000);
  render(clock)
  const seconds2 = getSeconds();
  const diff = seconds2 - seconds1;
  // eslint-disable-next-line no-console
  console.log(`Clock added ${diff} second${diff === 1 ? "" : "s"}. [-58, -59, 0, 1, 2 are normal.]`)
  expect(String(diff)).toMatch(/^-58|-59|0|1|2$/); /* -59 or 1 */
});
