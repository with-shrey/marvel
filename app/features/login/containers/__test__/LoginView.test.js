import React from "react";
import { shallow } from "enzyme";
import LoginView from "../LoginView";

describe("LoginView Tests", () => {
  it("should match to snapshot", () => {
    const component = shallow(<LoginView />);
    expect(component).toMatchSnapshot();
  });

  it("should render email field", () => {
    const wrapper = shallow(<LoginView />);
    const emailField = wrapper.find(`[name="email"]`);
    expect(emailField.length).toBe(1);
  });

  it("should render password field", () => {
    const wrapper = shallow(<LoginView />);
    const emailField = wrapper.find(`[name="password"]`);
    expect(emailField.length).toBe(1);
  });

  it("should contain a login button", () => {
    const wrapper = shallow(<LoginView />);
    const text = wrapper.find('Text').children().text();  
    expect(text).toEqual('LOGIN');
  });
});
// });
