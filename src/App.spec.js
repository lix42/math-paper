import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test("match snapshot", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
