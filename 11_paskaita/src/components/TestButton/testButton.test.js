import { render, fireEvent } from "@testing-library/react";

import Button from "./index";
it("checkButtonRender", () => {
  const { queryByTitle } = render(<Button />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const btn = queryByTitle("dummyButton");
  expect(btn).toBeTruthy();
});

describe("clickButton", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Button />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const btn = queryByTitle("dummyButton");
    expect(btn.innerHTML).toBe("Press Here");
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe("You Clicked!");
  });
});
