import React from "react";
import App from "../App";

import {
  render,
  waitForElementToBeRemoved,
  waitFor,
  screen,
  fireEvent,
  getByText,
} from "@testing-library/react";

it("App can switch between renderGameStates correctly", async () => {
  render(<App />);

  // const startGameTitle = await waitFor(() => screen.findByText("fds"));
  // expect(startGameTitle).toBeInTheDocument();

  // fireEvent(
  //   startGameTitle,
  //   new MouseEvent("click", {
  //     bubbles: true,
  //     cancelable: true,
  //   })
  // );

  // const typingPage = await waitFor(() => screen.findByText("typist-insights"));

  // expect(typingPage).toBeInTheDocument();

  // sleep(5000);
  // const insightsPage = await waitFor(() =>
  //   screen.findByText("words per minute")
  // );

  // expect(insightsPage).toBeInTheDocument();
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
